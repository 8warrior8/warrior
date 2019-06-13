<template>
  <div ref="line_chart"></div>
</template>


<script>
export default {
  name: "line_chart",
  data() {
    return {
      myChart: "",
      baseoption: {
        tooltip: {
          trigger: "axis"
        },
        xAxis: [
          {
            type: "category",
            data: []
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: []
      }
    };
  },
  props: {
    dataSource: {
      type: Array,
      default: function() {
        return [];
      }
    },
    customTheme: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  watch: {
    dataSource: function(newDataSource, oldDataSource) {
      this.drawLine();
    }
  },
  mounted: function() {
    var self = this;
    this.myChart = this.$echarts.init(this.$refs.line_chart);
    this.myChart.on("click", params => {
      this.$emit("pointClick", params);
    });
    this.myChart.on("dblclick", params => {
      this.$emit("pointdbClick", params);
    });
    window.addEventListener("resize", function() {
      self.myChart.resize();
    });
  },
  methods: {
    drawLine: function() {
      // 绘制图表
      var option = $.extend(
        true,
        {},
        this.baseoption,
        this.customTheme && this.customTheme.option
      );
      for (var i = 0; i < this.dataSource.length; i++) {
        var _chartItem = this.dataSource[i];
        var dataobj = $.extend(
          true,
          { name: _chartItem.title, type: "line", data: [] },
          this.customTheme && this.customTheme.series
        );
        for (var j = 0; j < _chartItem.data.length; j++) {
          if (
            option.xAxis[0].data.includes(_chartItem.data[j].name) === false
          ) {
            option.xAxis[0].data.push(_chartItem.data[j].name);
          }
          dataobj.data.push(_chartItem.data[j].value);
        }
        option.series.push(dataobj);
      }

      this.myChart.setOption(option);
    }
  }
};
</script>