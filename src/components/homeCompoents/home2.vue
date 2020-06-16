<template>
  <div class="home3Container">
    <!-- 模版 -->
    <el-tabs :tab-position="tabPosition" class="el-table">
      <el-tab-pane v-for="(item, index) in evaluateList" :key="index" style="font-size: 18px">
        <span slot="label">
          <span v-html="item.name"></span>
        </span>
        <div v-for="(it, ind) in item.content" :key="ind" style="margin-bottom: 35px">
          <p class="title">
            <span class="titleIcon"></span>
            {{ind + 1}}. {{it.title}}
            <span>(总分：{{it.allNumber}})</span>
            <span class="deductMarksNumber">得分：{{it.deductMarksNumber}}</span>
          </p>

          <!-- 表头 -->
          <div class="tableHeader">
            <span
              v-for="(tabelHeaderItem, index3) in it.tabelHeaderList"
              :key="index3"
            >{{tabelHeaderItem.name}}</span>
          </div>

          <!-- 表 -->
          <div class="tableContent">
            <div
              class="scoreContent"
              v-for="(scoreContentItem, scoreContentIndex) in it.tabelDetailList"
              :key="scoreContentIndex"
            >
              <div class="rightBox">
                <div
                  v-for="(items, index) in scoreContentItem.list"
                  :key="index"
                  :class="['rightContent', index % 2 ==0 ? 'backgroundBlue' : 'bakcgroundFFF']"
                >
                  <p class="fontStyle" style="width: 20%;">{{items.task}}</p>
                  <!-- 责任单位 -->
                  <p class="textCenter fontStyle" style="width: 20%">{{items.department}}</p>
                  <!-- 提交材料 -->

                  <div style="width: 60%; display: flex;">
                    <div style="width: 100%">
                      <div
                        v-for="(materialsListItem, materialsListIndex) in items.materialsList"
                        :class="['fontStyle', materialsListIndex == 1 ? 'red': 'cur', materialsListIndex == items.materialsList.length - 1 ? 'lastMarginBottom' : 'margimBottom']"
                       
                        :key="materialsListIndex"
                      >
                        <div class="blockFlex">
                          <div
                           @click="handleShowPdf(materialsListIndex)"
                            style="width: 33.3%;"
                            :class="[materialsListItem.status == 1 ? 'fontywc' : 'fontwwc']"
                          >{{materialsListItem.name}}</div>
                          <div style="width: 33.3%" :class="['flexCenter']">
                            <span :class="[materialsListItem.status == 1 ? 'zpywc': 'zpwwc']"></span>
                            <span
                              :class="[materialsListItem.status == 1 ? 'zpywcStyle': 'zpwwcStyle']"
                            >{{materialsListItem.status == 1 ? '已完成' : '未完成'}}</span>
                          </div>

                          <div
                            class="textCenter flexCenter deductMarks"
                            style="width: 33.3%"
                            v-if="materialsListItem.status == 1"
                          >{{items.deductMarks}}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      tabPosition: "top"
    };
  },
  components: {},
  computed: {
    ...mapState(["evaluateList", "tabelDetailList"])
  },
  methods: {
    // ...mapMutations(['']),

    handleShowPdf(index) {
      if (index == 0) {
        this.$message({
          message: "请先上传材料",
          type: "error"
        });

        return false;
      }

      const url = "http://210.76.75.221:9181/wkk-report/cszp/showpdf.pdf";
      const link = document.createElement("a");
      let fname = "report.pdf";
      link.href = url;
      link.target = "_blank";
      // link.setAttribute('download', fname);
      document.body.appendChild(link);
      link.click();
    }
  },
  watch: {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {}
};
</script>

<style scoped lang="less" >
.title {
  text-align: left;
  font-size: 28px;
}
.home3Container {
  height: 100%;
  .el-table {
    min-height: 100%;
    font-size: 20px;
    overflow: inherit;
  }
}

.marginLeft10 {
  padding: 10px;
}
.el-tag {
  margin-bottom: 10px;
}

.textAlign {
  text-align: center;
  font-size: 20px;
}

.tableHeader {
  border-bottom: 2px solid black;
  padding-bottom: 10px;
  color: black;
  span {
    display: inline-block;
    width: 20%;
    text-align: center;
  }
}

.scoreContent {
  width: 100%;
  display: flex;
}

// .tableHeader::before {
//   left: 5%;
//   bottom: 0;
//   width: 90%;
//   height: 1px;
//   content: "";
//   position: absolute;
//   background-color: #ebeef5;
//   z-index: 1;
// }

.rightBox {
  width: 100%;
  .rightContent {
    display: flex;
    p {
      width: 20%;
    }

    p:nth-child(1) {
      // text-align-last: justify;
      // text-justify:inter-ideograph;
      //  text-align: justify;
      //  text-align-last: justify;
      text-align: justify;
      text-justify: inter-ideograph;
      padding-left: 40px;
      box-sizing: border-box;
    }
  }
}

.textCenter {
  text-align: center;
}

.textLeft {
  display: inline-block;
  text-align: left;
}

.flexCenter {
  display: flex;
  justify-content: center;
}

.red {
  color: #67c23a;
  cursor: pointer;
}

.cur {
  cursor: pointer;
}

.deductMarks {
  color: red;
}

.deductMarksNumber {
  float: right;
  margin-right: 100px;
}

// 改版
.title {
  font-size: 24px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(55, 128, 248, 1);
  border-bottom: 1px solid rgba(90, 90, 90, 0.5);
  padding-bottom: 21px;
  margin-bottom: 14px;
}
.titleIcon {
  display: inline-block;
  width: 28px;
  height: 28px;
  background: url("../../assets/img/iconIndex.png") no-repeat;
  background-size: 100% 100%;
  margin-right: 16px;
}

.tableHeader {
  height: 50px;
  background: rgba(81, 155, 236, 0.15);
  // opacity:0.15;
  line-height: 50px;
  font-size: 20px;
  font-family: Microsoft YaHei;
  font-weight: 600;
  border-bottom: 1px dashed rgba(90, 90, 90, 1);
  color: rgba(55, 128, 248, 1);
}

.rightContent {
  margin-bottom: 0;
  border: 0;
  border-bottom: 1px dashed rgba(90, 90, 90, 0.53);
  padding: 23px 0px;
}
.backgroundBlue {
  background: rgba(81, 155, 236, 0.05);
}

.bakcgroundFFF {
  background: rgba(81, 155, 236, 0.15);
}

.margimBottom {
  margin-bottom: 20px;
}

.lastMarginBottom {
  margin-bottom: 0;
}
.blockFlex {
  display: flex;
}

.zpywc {
  display: inline-block;
  width: 31px;
  height: 31px;
  background: url("../../assets/img/zpywc.png") no-repeat;
  margin-right: 10px;
  background-size: 100% 100%;
}

.zpwwc {
  display: inline-block;
  width: 31px;
  height: 31px;
  background: url("../../assets/img/zpwwc.png") no-repeat;
  margin-right: 10px;
  background-size: 100% 100%;
}

.zpywcStyle {
  font-size: 20px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(108, 173, 238, 1);
}
.zpwwcStyle {
  font-size: 20px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(213, 130, 75, 1);
}

.fontStyle {
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(82, 82, 82, 1);
  font-size: 18px;
}

.fontywc {
  color: #22ac38;
}
</style>
