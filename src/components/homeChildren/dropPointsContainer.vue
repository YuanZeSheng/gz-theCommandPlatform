<template>
  <div class="dropPointsContainer">
    <!-- 模版 -->
    <div class="dropPointsEchats" id="dropPointsEchats"></div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      datapie: [
        { value: 1, name: "市发展改革委" },
        { value: 2, name: "市自然资源局" },
        { value: 3, name: "市应急局" },
        { value: 4, name: "市应急管理服务中心" }
      ]
    };
  },
  components: {},
  computed: {
    // ...mapState([''])
  },
  methods: {
    // ...mapMutations(['']),
    handleGetLosePointsOfCompanys() {
      this.api
        .handleGetLosePointsOfCompanys()
        .then(this.handleGetLosePointsOfCompanysSucc.bind(this));
    },

    handleGetLosePointsOfCompanysSucc(res) {
      if( res.code == 200 ) {
        let list = []
        res.data.map( item => {
          let obj = {}
          obj.name = item.departmentName 
          obj.value = item.number
          list.push(obj)
        } )

        this.datapie = list
        this.handleGetCityPieEcharts(this.dataPie)
      }
    },

    handleGetCityPieEcharts(dataPie) {
      let myChart = this.$echarts.init(
        document.getElementById("dropPointsEchats")
      );
      let option = {
        backgroundColor: "#fff",
        animation: true,
        legend: {
          width: "70%",
          align: "left",
          left: "right",
          textStyle: {
            color: "#5b5b5b",
            fontSize: 18
          },
          itemWidth: 10, // 设置宽度
          itemHeight: 10, // 设置高度
          icon: "rect",
          right: "20",
          bottom: "10",
          padding: [10, 10],
          orient: "vertical",
          x: "0",
          y: "30",
          data: this.dataPie
        },
        series: [
          {
            type: "pie",
            center: ["40%", "50%"],
            radius: ["48%", "60%"],
            color: [
              "#50FFE0",
              "#FF5092",
              "#468EF0",
              "#65FF50",
              "#DDDF49",
              "#F76F01",
              "#01A4F7",
              "#FE2C8A",
              "#9be088",
              "#ffd22f",
              "#f8a36f",
              "#ff5371"
            ],
            // 'color' :['#26a3ff','#5fd3eb','#26cecd','#34e1c1','#26cd7b','#9be088','#ffd22f','#f8a36f','#ff5371','#eb7bcf','#9f5ce3','#a18aef'],
            startAngle: -100,
            labelLine: {
              normal: {
                length: 25
              }
            },
            label: {
              normal: {
                formatter: "{b|{b}:}  {per|{c}} ",
                backgroundColor: "rgba(255, 147, 38, 0)",
                borderColor: "transparent",
                borderRadius: 4,
                rich: {
                  a: {
                    color: "#999",
                    lineHeight: 20,
                    align: "center"
                  },
                  hr: {
                    borderColor: "#aaa",
                    width: "100%",
                    borderWidth: 1,
                    height: 0
                  },
                  b: {
                    color: "#4b4b4b",
                    fontSize: 14,
                    lineHeight: 33
                  },
                  c: {
                    fontSize: 14,
                    color: "#eee"
                  },
                  per: {
                    color: "#5b5b5b",
                    fontSize: 14,
                    padding: [5, 8],
                    borderRadius: 2
                  }
                },
                textStyle: {
                  color: "#fff",
                  fontSize: 14
                }
              }
            },
            emphasis: {
              label: {
                show: true,
                formatter: "{b|{b}:}  {per|{c}}  ",
                backgroundColor: "rgba(255, 147, 38, 0)",
                borderColor: "transparent",
                borderRadius: 4,
                rich: {
                  a: {
                    color: "#999",
                    lineHeight: 14,
                    align: "center"
                  },
                  hr: {
                    borderColor: "#aaa",
                    width: "100%",
                    borderWidth: 1,
                    height: 0
                  },
                  b: {
                    color: "#4b4b4b",
                    fontSize: 14,
                    lineHeight: 33
                  },
                  c: {
                    fontSize: 14,
                    color: "#eee"
                  },
                  per: {
                    color: "#5b5b5b",
                    fontSize: 14,
                    padding: [5, 6],
                    borderRadius: 2
                  }
                }
              }
            },
            data: this.datapie
          },
          {
            type: "pie",
            center: ["40%", "50%"],
            radius: ["62%", "65%"],
            label: {
              show: false
            },
            data: [
              {
                value: 78,
                itemStyle: {
                  normal: {
                    color: "#3C7AD9"
                  }
                }
              }
            ]
          },
          {
            type: "pie",
            center: ["40%", "50%"],
            radius: ["43%", "46%"],
            label: {
              show: false
            },
            data: [
              {
                value: 78,
                itemStyle: {
                  normal: {
                    color: "#3C7AD9"
                  }
                }
              }
            ]
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
    this.handleGetLosePointsOfCompanys();

    this.handleGetCityPieEcharts(this.datapie);
  },
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {}
};
</script>

<style scoped lang="less" >
.dropPointsContainer {
  height: 100%;
  .dropPointsEchats {
    height: 100%;
    width: 100%;
  }
}
</style>
