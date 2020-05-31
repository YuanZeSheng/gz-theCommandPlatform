<template>
  <div class="wrapepr">
    <!-- 模版 -->
    <div class="wrapper-wrap">
      <div class="wrapper-header">
        <div class="wrapepr-header-left">
          <ul>
            <li>85</li>
            <li>自得分</li>
          </ul>
        </div>
        <div class="wrapepr-header-right">
          <div>评价日志:</div>
          <ul>
            <li v-for="(item,index) in list" :key="index">{{item}}</li>
          </ul>
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
      list: ["2020-5-30 12:06:35", "2020-5-30 12:06:35"],
      dataX: [
        "源头治理",
        "风险防控",
        "监督管理",
        "源头治理",
        "风险防控",
        "监督管理",
        "监督管理"
      ],
      dataInY: [700, 600, 500, 400, 300, 200, 100],
      dataOutY: [   1000,   1000,    1000,   1000,    1000,   1000,    1000],
      datapie: [
        { value: 20, name: "源头治理" },
        { value: 30, name: "风险防控" },
        { value: 25, name: "监督管理" },
        { value: 25, name: "源头治理" },
        { value: 20, name: "治安管理" },
        { value: 35, name: "区政管理" },
        { value: 30, name: "水污管理" },
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
            // axisLine: {
            //   lineStyle: {
            //     color: "#000"
            //   }
            // },

            axisLabel: {
              interval: 0 //代表显示所有x轴标签显示
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
            name: "实际数据",
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
            name: "总数据节点",
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
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },           
        legend: {
                orient: 'vertical',
                x: 'right',
                y:'50',
                data: ['源头治理', '风险防控', '监督管理', '源头治理', '治安管理','区政管理','水污管理'],
                icon:"circle",
                formatter:function(name){
                    let target;
                    for(let i=0;i<dataPie.length;i++){
                        if(dataPie[i].name===name){
                            target=dataPie[i].value
                        }
                    }
                    let arr=[target+name]
                    return arr.join("\n")

                },
        },

        series: [
          {
            name: "业务警种",
            type: "pie",
            // radius: [0, 150],

            data: dataPie
          }
        ]
      };
      myChart.setOption(option);
    }
  }
};
</script>

<style scoped lang="less" >
.wrapepr {
  width: 90%;
  height: 100%;
  // background: #ccc;
  margin: 0 auto;
}

.wrapper-header {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60px;
  .wrapepr-header-left {
    width: 30%;
    height: 60px;
    font-size: 20px;
    text-align: left;
    ul {
      width: 100%;
      height: 100%;
      li {
        &:nth-child(1) {
          color: red;
        }
      }
    }
  }
  .wrapepr-header-right {
    width: 80%;
    font-size: 20px;
    display: flex;
    text-align: left;
    // justify-content: center;
    align-items: center;
    div {
      width: 30%;
      text-align: center;
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
  margin-top:20px;
}
</style>
