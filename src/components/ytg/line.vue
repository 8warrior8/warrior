<template>
  <div id="line" class="linediv">
    <linechart v-bind:dataSource="dataSource" v-bind:customTheme="customTheme"></linechart>
  </div>
</template>

<script>
import line_chart from "./chart/line_chart";
export default {
  name: "line",
  data() {
    return {
      dataSource: [],
      customTheme: {
        option: {
          yAxis: [
            {
              //name: '单位:  %',
              nameGap: 5,
              nameTextStyle: {
                color: "#000",
                fontFamily: "Microsoft YaHei",
                fontSize: 10,
                align: "left",
                padding: [0, 0, 0, 50]
              },
              splitLine: {
                show: true,
                lineStyle: {
                  color: "red",
                  width: 1
                }
              },
              axisLine: {
                lineStyle: {
                  color: "blue",
                  width: 1
                }
              },
              axisTick: {
                show: false
              },
              axisLabel: {
                color: "blue"
              }
            }
          ],
          xAxis: [
            {
              axisLine: {
                lineStyle: {
                  color: "blue",
                  width: 1
                }
              },
              axisTick: {
                show: false
              },
              axisLabel: {
                color: "blue"
              }
            }
          ]
        }
      }
    };
  },
  components: {
    linechart: line_chart
  },
  mounted: function() {
    this.drawLine();
  },
  methods: {
    drawLine: function() {
      this.dataSource = [];
      var _line1 = [];
      var _dataitem1 = {};
      _dataitem1.name = "周一";
      _dataitem1.value = 100;
      _line1.push(_dataitem1);
      var _dataitem2 = {};
      _dataitem2.name = "周二";
      _dataitem2.value = 150;
      _line1.push(_dataitem2);
      var _line2 = [];
      var _dataitem21 = {};
      _dataitem21.name = "周一";
      _dataitem21.value = 110;
      _line2.push(_dataitem21);
      var _dataitem22 = {};
      _dataitem22.name = "周二";
      _dataitem22.value = 160;
      _line2.push(_dataitem22);
      this.dataSource.push(_line1);
      this.dataSource.push(_line2);
    }
  }
};
</script>

<style>
.linediv {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
}

.linediv > div {
  width: 100%;
  height: 100%;
}
</style>
