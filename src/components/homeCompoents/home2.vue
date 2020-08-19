<template>
  <div class="home3Container" v-loading="loadingFlag"  element-loading-text="数据加载中">
    <!-- 模版 -->
    <el-tabs :tab-position="tabPosition" class="el-table">
      <el-tab-pane v-for="(item, index) in ciTyList" :key="index" style="font-size: 18px">
        <span slot="label">
          <span>
            {{item.name}}<br>({{item.grade}}分) 
          </span>
        </span>
        <div v-for="(it, ind) in item.content" :key="ind" style="margin-bottom: 35px">
          <p class="title">
            <span class="titleIcon"></span>
            {{ind + 1}}. {{it.taskTitle}}
            <span>(总分：{{it.taskGrade}})</span>
            <span class="deductMarksNumber">得分：{{it.taskScore}}</span>
          </p>

          <!-- 表头 -->
          <div class="tableHeader">
            <span
              v-for="(tabelHeaderItem, index3) in tabelHeaderList"
              :key="index3"
            >{{tabelHeaderItem.name}}</span>
          </div>

          <!-- 表 -->
          <div class="tableContent">
            <div
              class="scoreContent"
            >
              <div class="rightBox">
                <div
                  v-for="(items, index) in it.taskDetailList"
                  :key="index"
                  :class="['rightContent', index % 2 ==0 ? 'backgroundBlue' : 'bakcgroundFFF']"
                >
                  <p class="fontStyle" style="width: 40%;">{{index + 1}}. {{items.task}}</p>
                  <!-- 责任单位 -->
                  <p class="textCenterss fontStyle" style="width: 15%">{{items.department}}</p>
                  <!-- 提交材料 -->

                  <div style="width: 45%; display: flex;">
                    <div style="width: 100%">
                      <div
                        v-for="(materialsListItem, materialsListIndex) in items.materialsList"
                        :class="['fontStyle', materialsListIndex == 1 ? 'red': 'cur', materialsListIndex == items.materialsList.length - 1 ? 'lastMarginBottom' : 'margimBottom']"
                        :key="materialsListIndex"
                      >
                        <div class="blockFlex">
                          <div
                            @click="handleShowPdf(materialsListItem)"
                            style="width: 33.3%;"
                            :class="[materialsListItem.status == 'true' ? 'fontywc' : 'fontwwc' , 'textCenter']"
                          >
                            {{materialsListItem.name}}
                          </div>
                          <div style="width: 33.3%" :class="['flexCenter']">
                            <span :class="[materialsListItem.status == 'true' ? 'zpywc': 'zpwwc']"></span>
                            <span
                              :class="[materialsListItem.status == 'true' ? 'zpywcStyle': 'zpwwcStyle']"
                            >{{materialsListItem.status == 'true' ?  '已完成' : '未完成'}}</span>
                          </div>

                          <div
                            class="textCenter flexCenter deductMarks"
                            style="width: 33.3%"
                            v-if="materialsListItem.status == 'true'"
                          >
                          <span style="lineHeight: 46px; marginRight: 20px">{{materialsListItem.materialsGrade}}</span>
                            <el-tooltip placement="top" v-if="pfFlag">
                              <div slot="content">{{materialsListItem.discussionReason}}</div>
                            
                            <!-- <el-button
                                class="deductMarksBtn"
                                
                              >评分</el-button> -->

                              <i class="el-icon-edit deductMarksBtn" @click="handleClickDeductMarks(materialsListItem, items, it)"></i>
                             
                            </el-tooltip>
                          </div>
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

    <!-- 加减分 -->
    <el-dialog
      title="评价材料"
      :visible.sync="deductMarksFlag"
      width="30%"
      :close-on-click-modal="false"
    >
      <el-form
        ref="deductMarksFrom"
        :model="deductMarksFrom"
        label-width="100px"
        :label-position="lebelPosi"
      >

        <el-form-item label="扣分标准：" prop="deductMarks">
          <p>
            {{discussionRule}}
          </p>
        </el-form-item>

        <el-form-item label="扣分情况：" prop="deductMarks">
          <el-input-number v-model="deductMarksFrom.deductMarksNumber" :precision="2" :step="deductMarksStep"></el-input-number>
        </el-form-item>

        <el-form-item label="減分原因：" prop="points">
          <el-input type="textarea" v-model="deductMarksFrom.points"></el-input>
        </el-form-item>

        <el-form-item label="历史材料：" prop="deductMarks">
          <div class="maxHeightStyle">
             <p v-for="(pdfItem, pdfIndex) in pdfList" :key="pdfIndex" @click="handleShowPdf(pdfItem)" class="curStyle">
              {{pdfItem.name}}
            </p>
          </div>
         
        </el-form-item>

        <el-form-item label="重新上传：" prop="points">
          <el-input  v-model="deductMarksFrom.fileName"></el-input>
        </el-form-item>

      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="deductMarksFlag = false">取 消</el-button>
        <el-button type="primary" @click="handleSaveDeductMarks">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      fileName: '', //重新上传的材料名称
      typeId: '',
      loadingFlag: true,
      tabPosition: "top",
      deductMarksFlag: false,
      pfFlag: localStorage.getItem('accessRole') == 2,
      discussionRule: '',
      // pdfList
      pdfList: [],
      lebelPosi: "left",
      deductMarksFrom: {
        deductMarksNumber: '',
        points: '',
        taskId : ''
      },
      deductMarksStep: '',
      tabelHeaderList: [],
      ciTyList: [],
      tabelHeaderList: [{
        name: '任务',
      }, {
        name: '责任单位',
      }, {
        name: '材料清单',
      }, {
        name: '材料状态',
      }, {
        name: '得分',
      }],
    };
  },
  components: {},
  computed: {
    // ...mapState(["evaluateList"])
  },
  methods: {
    // ...mapMutations(['']),


  handleGetCityAssessmentInfo() {
    this.loadingFlag = true
    this.api
      .handleGetCityAssessmentInfo()
      .then(this.handleGetCityAssessmentInfoSucc.bind(this));
  },

  handleGetCityAssessmentInfoSucc(res) {
    setTimeout(() => {
        this.loadingFlag = false;
      }, 1000);
    if( res.code == 200 ) {
      this.ciTyList = res.data
    } else {
      this.$message.error(res.message)
    }
  },




// 前端

    handleShowPdf(item) {
      console.log(item)

      if (item.status == 'false') {
        this.$message({
          message: "该委办局未提交材料",
          type: "error"
        });

        return false;
      }


      const url = item.pdfUrl ? item.pdfUrl : item.url;
      // const url = 'http://210.76.75.221:9181/wkk-report/cszp/showpdf.pdf'
      const link = document.createElement("a");
      let fname = "report.pdf";
      link.href = url;
      link.target = "_blank";
      // link.setAttribute('download', fname);
      document.body.appendChild(link);
      link.click();
    },

    handleClickDeductMarks(item, items, it) {

      console.log(item, 'yzs')


      this.$nextTick(() => {
        if (this.$refs.deductMarksFrom !== undefined) {
          this.$refs.deductMarksFrom.resetFields();
        }
      });


      this.pdfList = item.pdfList
      this.deductMarksFlag = true;
      this.deductMarksStep = item.gradeRule * 1;
      this.deductMarksFrom.deductMarksNumber = item.materialsGrade
      this.discussionRule = item.discussionRule ? item.discussionRule : '暂无'
      this.deductMarksFrom.taskId = item.materialsId
      this.deductMarksFrom.points = item.discussionReason
      this.detailId = items.detailId
      this.typeId = it.typeId


    },

    handleSaveDeductMarks() {

      let param = {}

      param.materialsId = this.deductMarksFrom.taskId
      param.grade = this.deductMarksFrom.deductMarksNumber
      param.discussionReason = this.deductMarksFrom.points
      param.detailId = this.detailId
      param.fileName = this.deductMarksFrom.fileName
      param.typeId = this.typeId


      console.log(param)

      

      this.api
        .handleUpdateMaterialsInfo(param)
        .then(this.handleUpdateMaterialsInfoSucc.bind(this));

      


      return




    },
    handleUpdateMaterialsInfoSucc(res) {
      if( res.code == 200 ) {
          this.$message({
          message: "评分成功",
          type: "success"
        });
      this.deductMarksFlag = false
      this.handleGetCityAssessmentInfo()
      } else {
        this.$message({
          message: res.message,
          type: "error"
        });
      }
    }
  },
  watch: {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {
    this.handleGetCityAssessmentInfo()
  },
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

  span:nth-child(1) {
    width: 40%;
  }
  span:nth-child(2) {
    width: 15%;
  }
  span:nth-child(3) {
    width: 15%;
  }
  span:nth-child(4) {
    width: 15%;
  }
  span:nth-child(5) {
    width: 15%;
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
      padding-left: 15px;
      box-sizing: border-box;
      width: 40%;
    }
  }
}

.textCenter {
  display: inline-block;
  text-align: left;
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

.deductMarksBtn {
  background: transparent;
  font-size: 20px;
  color: black;
  line-height: 45px;
  margin-left: 10px;
}

.maxHeightStyle {
  max-height: 100px;
  overflow: auto;
}

.curStyle {
  cursor: pointer;
}

.textCenterss {
  text-align: center;
}
</style>
