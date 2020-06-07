<template>
  <div class="wrapepr">
    <!-- 模版 -->
    <div class="wrapper-wrap">
      <p class="headerTitle">评价得分:</p>
      <p class="headerTitle">评价日志:</p>

      <div class="wrapper-header">
        <div class="wrapepr-header-left">
          <ul>
            <li style="font-size: 60px">85</li>
            <br />
            <li style="paddingLeft: 10px">自评得分</li>
          </ul>

          <ul>
            <li style="font-size: 60px">90</li>
            <li>专家评分</li>
          </ul>
        </div>

        <div class="wrapepr-header-right">
          <!-- <ul>
            <li v-for="(item,index) in list" :key="index">{{item}}</li>
          </ul>-->
          <el-table :data="tableData" style="width: 400px" align="center">
            <el-table-column prop="name" label="所属部门" width="180"></el-table-column>
            <el-table-column prop="date" label="评价时间" width="180"></el-table-column>
            <el-table-column prop="data" label="上传材料" align="center"></el-table-column>
            <el-table-column prop="address" label="评价得分" align="center"></el-table-column>
          </el-table>
        </div>
      </div>
      <div class="wrapepr-echarts">
        <div class="wrapper-content-echarts" id="cityEcharts"></div>
        <div class="wrapper-content-echarts" id="cityPieEcharts"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      tableData: [
        {
          date: "2020-5-30 12:06:35",
          name: "市发展改革委",
          address: "3",
          data: "规划年度实施计划;"
        },
        {
          date: "2020-5-30 12:06:35",
          name: "市自然资源局",
          address: "2",
          data: "规划年度实施计划;"
        },
        {
          date: "2020-5-30 12:06:35",
          name: "市应急局",
          address: "1",
          data: "规划年度实施计划;"
        },
        {
          date: "2020-5-30 12:06:35",
          name: "市应急管理服务中心",
          address: "3",
          data: "规划年度实施计划;"
        }
      ],
      list: ["2020-5-30 12:06:35", "2020-5-30 12:06:35"],
      dataX: [
        "城市安全源头治理",
        "城市安全风险防控",
        "城市安全监督管理",
        "城市安全保障能力",
        "城市安全应急救援",
        "城市安全状况",
        "鼓励项"
      ],
      dataInY: [10, 20, 30, 40, 30, 20, 10],
      dataOutY: [20, 30, 40, 50, 40, 30, 20],
      datapie: [
        { value: 2, name: "市发展改革委" },
        { value: 3, name: "市自然资源局" },
        { value: 2, name: "市应急局" },
        { value: 2, name: "市应急管理服务中心" },
        { value: 2, name: "市自然资源局" },
        { value: 3, name: "市水务局" },
        { value: 1, name: "市应急局" }
      ]
    };
  },
  components: {},
  computed: {
    // ...mapState([''])
  },
  watch: {},

  created() {},

  mounted() {
    this.getCityEcharts(this.dataX, this.dataInY, this.dataOutY);
    this.getCityPieEcharts(this.datapie);
  },
  methods: {
    //柱
    getCityEcharts(datax, dataInY, dataOutY) {
      let myChart = this.$echarts.init(document.getElementById("cityEcharts"));
      let option = {
        // backgroundColor: "#fff",
        color: ["#3398DB"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        // legend: {
        //   // data: ["党支部", "党员"],
        //   show: true,
        //   right: "10",
        //   top: "0",
        //   itemHeight: 10,
        //   itemWidth: 10,
        //   icon: "circle",
        //   textStyle: {
        //     fontSize: 14
        //   }
        // },
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
                color: "#000"
              }
            },

            // axisLabel: {
            //   interval: 0 //代表显示所有x轴标签显示

            // },

            axisLabel: {
              show: true,
              interval: 0,
              formatter : function(params){
                   var newParamsName = "";// 最终拼接成的字符串
                            var paramsNameNumber = params.length;// 实际标签的个数
                            var provideNumber = 4;// 每行能显示的字的个数
                            var rowNumber = Math.ceil(paramsNameNumber / provideNumber);// 换行的话，需要显示几行，向上取整
                            /**
                             * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
                             */
                            // 条件等同于rowNumber>1
                            if (paramsNameNumber > provideNumber) {
                                /** 循环每一行,p表示行 */
                                for (var p = 0; p < rowNumber; p++) {
                                    var tempStr = "";// 表示每一次截取的字符串
                                    var start = p * provideNumber;// 开始截取的位置
                                    var end = start + provideNumber;// 结束截取的位置
                                    // 此处特殊处理最后一行的索引值
                                    if (p == rowNumber - 1) {
                                        // 最后一次不换行
                                        tempStr = params.substring(start, paramsNameNumber);
                                    } else {
                                        // 每一次拼接字符串并换行
                                        tempStr = params.substring(start, end) + "\n";
                                    }
                                    newParamsName += tempStr;// 最终拼成的字符串
                                }
 
                            } else {
                                // 将旧标签的值赋给新标签
                                newParamsName = params;
                            }
                            //将最终的字符串返回
                            return newParamsName
                },

              fontSize: 14

            },
            data: datax
          }
        ],
        yAxis: [
          {
            type: "value",
            // gridIndex: 0,
            splitLine: {
              show: true
            },
            axisTick: {
              show: true
            },

            axisLine: {
              lineStyle: {
                color: "#000"
              }
            },
            axisLabel: {
              color: "rgb(170,170,170)"
              // formatter: "{value} %"
            }
          }
        ],
        series: [
          {
            name: "所得分数",
            type: "bar",
            barWidth: "40%",
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
            zlevel: 11
          },
          {
            name: "总分",
            type: "bar",
            barWidth: "40%",
            xAxisIndex: 0,
            yAxisIndex: 1,
            barGap: "-100 %",
            offset: "10",
            xAxisIndex: 0,
            yAxisIndex: 0,
            data: dataOutY,
            itemStyle: {
              normal: {
                color: "#ccc"
                // barBorderRadius: 30
              }
            },

            zlevel: 9
          }
        ]
      };
      myChart.setOption(option);
    },
    //饼图
    getCityPieEcharts(dataPie) {
      let myChart = this.$echarts.init(
        document.getElementById("cityPieEcharts")
      );
      let option = {
        color: [
          "#37a2da",
          "#32c5e9",
          "#9fe6b8",
          "#ffdb5c",
          "#ff9f7f",
          "#fb7293",
          "#e7bcf3",
          "#8378ea"
        ],
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
          fontSize: 30
        },
        legend: {
          orient: "vertical",
          x: "right",
          y: "50",
          data: [
            "市发展改革委",
            "市自然资源局",
            "市应急局",
            "市应急管理服务中心",
            "市自然资源局",
            "市水务局",
            "市应急局"
          ],
          icon: "circle",
          formatter: function(name) {
            let target;
            for (let i = 0; i < dataPie.length; i++) {
              if (dataPie[i].name === name) {
                target = dataPie[i].value;
              }
            }
            let arr = [target + name];
            return arr.join("\n");
          }
        },

        series: [
          {
            name: "所属部门",
            type: "pie",
            // radius: [0, 150],

            data: dataPie,
            label: {
              show: true,
              formatter: "{c}",
              fontSize: 20
            }
          }
        ]
      };
      myChart.setOption(option);
    }
  }
};
</script>

<style scoped lang="less" >
// .wrapepr {
//   width: 90%;
//   height: 100%;
//   // background: #ccc;
//   margin: 0 auto;
// }

.wrapper-header {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 80px;
  .wrapepr-header-left {
    display: flex;
    width: 30%;
    font-size: 20px;
    text-align: left;
    ul {
      width: 100%;
      height: 100%;
      li {
        &:nth-child(1) {
          color: #fff;
          display: inline-block;
          text-align: center;
          line-height: 100%;
          background: #409eff;
          width: 100px;
          height: 100px;
          line-height: 100px;
          margin-bottom: 20px;
        }
      }

      li {
        &:nth-child(2) {
          padding-left: 8px;
        }
      }
    }
  }
  .wrapepr-header-right {
    font-size: 20px;
    margin-left: 150px;
    display: flex;
    text-align: left;
    // justify-content: center;
    align-items: center;
    div:nth-child(1) {
      text-align: center;
      margin-right: 20px;
    }
    .el-table {
      width: 750px !important;
      margin-top: 20px;
    }
  }
}
.wrapepr-echarts {
  width: 100%;
  height: 300px;
  display: flex;
}
.wrapper-content-echarts {
  width: 50%;
  height: 100%;
  margin-top: 20px;
}
.headerTitle {
  display: inline-block;
}
.headerTitle:nth-child(2) {
  display: inline-block;
  margin-left: 40%;
}
</style>
