<template>
  <div class="scoringSystemContainer">
    <div class="scoringEcharts" id="scoringEcharts"></div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      dataX: [
        "城市安全源头治理",
        "城市安全风险防控",
        "城市安全监督管理",
        "城市安全保障能力",
        "城市安全应急救援",
        "城市安全状况",
        "鼓励项"
      ],
      dataInY: [0, 0, 0, 0, 0, 0, 0],
      dataOutY: [0, 0, 0, 0, 0, 0, 0]
    };
  },
  components: {},
  computed: {
    // ...mapState([''])
  },
  methods: {
    // ...mapMutations(['']),
    handleGetSystemScoreInfo() {
      this.api
        .handleGetSystemScoreInfo()
        .then(this.handleGetSystemScoreInfoSucc.bind(this));
    },

    handleGetSystemScoreInfoSucc(res) {
      if( res.code == 200 ) {
        this.dataX = res.data.dataX
        this.dataInY = res.data.dataInY
        this.dataOutY = res.data.dataOutY
        this.handleGetCityEcharts(this.dataX, this.dataInY, this.dataOutY);
      } else {
        this.handleGetCityEcharts(this.dataX, this.dataInY, this.dataOutY);
      }
    },
    //柱
    handleGetCityEcharts(datax, dataInY, dataOutY) {

       if (document.getElementById("scoringEcharts")) {
        var myChart = this.$echarts.init(
          document.getElementById("scoringEcharts")
        );
      }
      let option = {
        // backgroundColor: "#fff",
        color: ["#3C7AD9"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: "5%",
          right: "5%",
          bottom: "0%",
          top: "17%",
          // height: "85%",
          containLabel: true
          // z: 22
        },
        xAxis: [
          {
            type: "category",
            // // gridIndex: 0,
            // axisTick: {
            //   alignWithLabel: true
            // },
            axisLine: {
              lineStyle: {
                color: "#000",
              },
            },
            axisTick: {
              show: false
            },
           

            // axisLabel: {
            //   interval: 0 //代表显示所有x轴标签显示

            // },

            axisLabel: {
              show: true,
              interval: 0,
              formatter: function(params) {
                var newParamsName = ""; // 最终拼接成的字符串
                var paramsNameNumber = params.length; // 实际标签的个数
                var provideNumber = 4; // 每行能显示的字的个数
                var rowNumber = Math.ceil(paramsNameNumber / provideNumber); // 换行的话，需要显示几行，向上取整
                /**
                 * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
                 */
                // 条件等同于rowNumber>1
                if (paramsNameNumber > provideNumber) {
                  /** 循环每一行,p表示行 */
                  for (var p = 0; p < rowNumber; p++) {
                    var tempStr = ""; // 表示每一次截取的字符串
                    var start = p * provideNumber; // 开始截取的位置
                    var end = start + provideNumber; // 结束截取的位置
                    // 此处特殊处理最后一行的索引值
                    if (p == rowNumber - 1) {
                      // 最后一次不换行
                      tempStr = params.substring(start, paramsNameNumber);
                    } else {
                      // 每一次拼接字符串并换行
                      tempStr = params.substring(start, end) + "\n";
                    }
                    newParamsName += tempStr; // 最终拼成的字符串
                  }
                } else {
                  // 将旧标签的值赋给新标签
                  newParamsName = params;
                }
                //将最终的字符串返回
                return newParamsName;
              },

              fontSize: 16
            },
            data: datax
          }
        ],
        yAxis: [
          {
            type: "value",
            // gridIndex: 0,
            axisLine: {
              lineStyle: {
                color: "#000",
              },
            },
            splitLine: {
              show: true,
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              color: "#000",
              fontSize: 18
              // formatter: "{value} %"
            }
          }
        ],
        series: [
          {
            name: "所得分数",
            type: "bar",
            barWidth: "25%",
            xAxisIndex: 0,
            yAxisIndex: 0,
            itemStyle: {
              normal: {
                // barBorderRadius: 30,
                //     color: {
                //       colorStops: [
                //         {
                //           offset: 0,
                //           color: "#1C73F7" // 0% 处的颜色
                //         },
                //         {
                //           offset: 1,
                //           color: "#A5D2FF" // 100% 处的颜色
                //         }
                //       ]
                //     }
              }
            },
            data: dataInY,
            zlevel: 11,
            
          },
          {
            name: "总分",
            type: "bar",
            barWidth: "25%",
            xAxisIndex: 0,
            yAxisIndex: 1,
            barGap: "-100 %",
            offset: "10",
            xAxisIndex: 0,
            yAxisIndex: 0,
            data: dataOutY,
            itemStyle: {
              normal: {
                color: "#E7E531",
                // barBorderRadius: 30
                label: {
                        show: true, //开启显示
                        position: 'top', //在上方显示
                        textStyle: { //数值样式
                            color: 'black',
                            fontSize: 16
                        }
                    }
              }
            },

            zlevel: 9,
            
          }
        ]
      };
      myChart.setOption(option);
    }
  },
  watch: {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {

    this.handleGetSystemScoreInfo()

    this.handleGetCityEcharts(this.dataX, this.dataInY, this.dataOutY);
  },
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {}
};
</script>

<style scoped lang="less" >
.scoringSystemContainer {
  height: 100%;
  .scoringEcharts {
    height: 100%;
    width: 100%;
  }
}
</style>
