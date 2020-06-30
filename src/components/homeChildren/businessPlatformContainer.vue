<template>
  <div class="businessPlatformContainer">
    <!-- echarts -->
    <div class="echartsContent" id="echartsContent"></div>

		<!-- 业务平台right -->
		<div class="rightContent">
			<p v-for="(item, index) in list" :key="index" class="numberBox">
				<span class="border"></span>
				<span>{{item.name}}</span>
				<span class='number'>{{item.number}}</span>分
			</p>
		</div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
			list: [{
				name: '基础分',
				number: 0
			}, {
				name: '奖励分',
				number: 0
      }],
      totalPoints: 0
		};
  },
  components: {},
  computed: {
    // ...mapState([''])
  },
  methods: {
    // ...mapMutations(['']),
    handleGetHomeBusinessPlatformInfo() {
      this.api
        .handleGetHomeBusinessPlatformInfo()
        .then(this.handleGetHomeBusinessPlatformInfoSucc.bind(this));
    },

    handleGetHomeBusinessPlatformInfoSucc(res) {
      if( res.code == 200 ) {
        this.list.map( item => {
          if( item.name == '基础分' ) {
            item.number = res.data.basics
          }

          if( item.name == '奖励分' ) {
            item.number = res.data.award
          }
        } )

        this.totalPoints = res.data.totalPoints
        this.handleInitEcharts()
      } else {
        this.$message.error(res.message);
      }
    },


    handleInitEcharts() {
      let myChart = this.$echarts.init(
        document.getElementById("echartsContent")
			);
			
      let axisTickLength = 0; //刻度线宽度
      let value = this.totalPoints;
      let colorRegionRate = (value / 100).toFixed(2);
      let index = value >= 80 ? 0 : value > 30 ? 1 : 2;
      let startColor = "#3C7AD9";
      let endColor = "#3C7AD9";

      let option = {
        backgroundColor: "#fff",

        series: [
          {
            type: "gauge",
            name: "外层半透明边框圈",
            radius: "85%",
            startAngle: "225",
            endAngle: "-45",
						splitNumber: "100",
						center: ["45%", "54%"], 　
            pointer: {
              show: false
            },
            detail: {
              show: false
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: [[1, "#0BA6FF"]],
                width: 3,
                opacity: 1
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: false
            },
            axisLabel: {
              show: false
            }
          },
          {
            type: "gauge",
            name: "第二层",
            radius: "75%",
            startAngle: "225",
						endAngle: "-45",
						center: ["45%", "54%"], 　
            splitNumber: 4,
            pointer: {
              show: true,
              length: "53%"
            },
            // 仪表盘指针样式。
            itemStyle: {
							color: "#519BEC",
							borderWidth: 120,	
						},
						pointer: {
                width: 7,//指针的宽度
                length:"68%", //指针长度，按照半圆半径的百分比
                shadowColor : '#ccc', //默认透明
                shadowBlur: 5
            },
            data: [
              {
                value: value,
                name: "总分"
              }
            ],
            title: {
              show: false
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: [
                  // 有数值的部分
                  [
										colorRegionRate,
										'#3C7AD9'
                    // new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    //   {
                    //     offset: 0,
                    //     color: "red" // 0% 处的颜色
                    //   },
                    //   {
                    //     offset: 0,
                    //     color: endColor // 100% 处的颜色
                    //   }
                    // ])
                  ],
                  // 底色
                  [
                    1, 'rgba(81,155,236,.15)'
                  ]
                ],
                width: 20,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                opacity: 1
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: false
            },
            detail: {
              show: false
            },
            axisLabel: {
              show: false
            },
            animationDuration: 2000
          },

          {
            name: "与div背景色相同模拟axisTick",
            type: "gauge",
						radius: "62%",
						center: ["45%", "54%"], 　
            startAngle: "225",
            endAngle: "-45",
            splitNumber: 1,
            pointer: {
              show: false
            },
            title: {
              show: false
            },
            detail: {
              show: true,
              offsetCenter: [0, "80%"],
              formatter: value => {
                return [`{c|总分} {a|${value}}`];
              },
              rich: {
                a: {
                  color: "#3C7AD9",
                  fontWeight: 600,
									fontSize: 30,
									fontWeight: 600
                },
                b: {
                  color: "#3C7AD9",
                  fontWeight: 600,
                  fontSize: 36
                },
                c: {
                  color: "#3C7AD9",
                  fontWeight: 600,
                  fontSize: 20
                }
              }
            },
            data: [
              {
                value: value,
                name: "警押比"
              }
            ],
            axisLine: {
              show: false,
              lineStyle: {
                width: 1,
                opacity: 0
              }
            },
            axisTick: {
              show: true,
              splitNumber: 120,
              length: axisTickLength, // 刻度线宽度
              lineStyle: {
                // 与div背景色相同
                color: "red",
                width: 5
              }
            },
            splitLine: {
              show: false
            },
            axisLabel: {
              show: false
            }
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
    this.handleGetHomeBusinessPlatformInfo()
    this.handleInitEcharts();
  },
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {}
};
</script>

<style scoped lang="less" >
.businessPlatformContainer {
	display: flex;
	height: 100%;
	justify-self: center;
	align-self: center;
	.echartsContent {
		width: 50%;
		height: 100%;
	}
	.rightContent {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.border {
		display: inline-block;
		width: 4px;
		height: 100%;
		background: #3780F8;
	}

	.numberBox {
		width: 270px;
		height: 74px;
		background:rgba(81,155,236, .15);
		line-height: 74px;
		margin-bottom: 30px;
		font-size:20px;
		color: #3780F8;
		font-weight: 700;
		span {
			float: left;
		}
		span:nth-child(1) {
		}
		span:nth-child(2) {
			margin-left: 36px;
		}
		span:nth-child(3) {
			font-size:40px;
			display: inline-block;
			width: 100px;
			text-align: center;
		}
	}
}
</style>
