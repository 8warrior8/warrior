<template>
  <div id="lineComp" class="linediv">
    <linechart
      v-bind:dataSource="dataSource"
      v-bind:customTheme="customTheme"
      v-on:pointClick="pointClick"
      v-on:pointdbClick="pointdbClick"
    ></linechart>
  </div>
</template>

<script>
import line_chart from "./chart/line_chart";
export default {
  name: "lineComp",
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
          ],
          legend: {
            show: true
          }
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
      var self = this;
      this.getLinePromise()
        .then(function(data) {
          data.data.forEach(function(lines, index) {
            var _lineItem = { title: "line" + index, data: [] };
            lines.forEach(function(item) {
              var _dataitem = {};
              _dataitem.name = item.name;
              _dataitem.value = item.value;
              _lineItem.data.push(_dataitem);
            });
            self.dataSource.push(_lineItem);
          });
        })
        .catch(function(error) {
          console.error("出错了", error);
        });
    },
    getLinePromise: function() {
      var self = this;
      return new Promise(function(resolve, reject) {
        self.$axios
          .get("/server/getLineList")
          .then(response => {
            resolve(response.data);
          })
          .catch(function(error) {
            // 请求失败处理
            reject(error);
          });
      });
    },
    pointClick: function(param) {
      var _param = param;
    },
    pointdbClick: function(param) {
      var _param = param;
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
