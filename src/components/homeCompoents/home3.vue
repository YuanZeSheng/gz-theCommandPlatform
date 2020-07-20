<template>
  <div class="home3Container" v-loading="loadingFlag"  element-loading-text="数据加载中">
    <!-- 模版 -->
    <el-tabs :tab-position="tabPosition" class="el-table">
      <el-tab-pane v-for="(item, index) in materialList" :key="index" style="font-size: 18px">
        <span slot="label">
          <span v-html="item.name"></span>
        </span>
        <div v-for="(it, ind) in item.content" :key="ind" style="marginBottom: 20px">
          <p class="title">
            <span class="titleIcon"></span>
            {{ind + 1}}. {{it.taskTitle}}
            <span>(总分：{{it.taskGrade}})</span>
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
              v-for="(items, scoreContentIndex) in it.taskDetailList"
              :key="scoreContentIndex"
              :class="['scoreContent']"
            >
              <!-- 评价内容 -->

              <!-- 任务 -->
              <div class="rightBox">
                <div
                  class="rightContent"
                  :class="['scoreContent', index % 2 ==0 ? 'backgroundBlue' : 'bakcgroundFFF']"
                >
                  <p class="textCenter textLeft padding fontStless" style="width: 33%; ">{{items.task}}</p>

                  <!-- 提交材料 -->
                  <div style="width:33%">
                    <div
                      v-for="(materialsListItem, materialsListIndex) in items.materialsList"
                      :key="materialsListIndex"
                      :class="[materialsListItem.status ? 'red': 'cur', 'textAlign']"
                      style="marginBottom: 20px"
                      @click="handleShowPdf(materialsListItem)"
                    >{{materialsListItem.name}}</div>
                  </div>

                  <!-- 操作 -->

                  <div style="width:33%">
                    <div
                      style="marginBottom: 20px"
                      class="flexCenter"
                      v-for="(materialsListItem, materialsListIndex) in items.materialsList"
                      :key="materialsListIndex"
                    >
                      <el-button
                        :type="materialsListItem.status ? 'primary': 'primary'  "
                        class="addItemBtn operationBtn"
                        :disabled="materialsListItem.status ? true : false "
                        @click="handleClickUploading(materialsListItem)"
                      >
                        <i class="addIcon operationBtnIcon updateBtns"></i>
                        <span>上传资料</span>
                      </el-button>
                      <el-button
                        type="danger"
                        class="addItemBtn operationBtn deleteBtnBox"
                        @click="handleClickDeleteFile(materialsListItem, items)"
                        :disabled="materialsListItem.status ? true: false "
                        :class="[materialsListItem.status? '': 'deleteBtn']"
                      >
                        <i class="addIcon operationBtnIcon rwDeleteBtn"></i>
                        <span>删除资料</span>
                      </el-button>
                    </div>
                  </div>

                  <!-- <p>{{items.task}}</p> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>

    <el-dialog title="上传材料" :visible.sync="editVisible" width="30%" :close-on-click-modal="false">
      <el-form ref="fileFrom" :model="fileFrom" label-width="8%">
        <el-form-item label>
          <el-upload
            class="upload-demo"
            action="#"
            :http-request="httpRequest"
            :show-file-list="true"
            :before-upload="beforeAvatarUpload"
          >
            <div class="pdfBox">
              <i class="pdfUpdate"></i>
              <div slot="tip" class="el-upload__tip">只能上传pdf文件</div>
            </div>

            <!-- <el-button size="small" type="primary">点击上传</el-button> -->
          </el-upload>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleClickCancle">取 消</el-button>
        <el-button type="primary" @click="handleUploadingFile">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

import axios from "axios";

export default {
  data() {
    return {
      loadingFlag: true,
      tabPosition: "top",
      fileFrom: {
        fileName: ""
      },
      file: undefined,
      fileData: {
        taskId: ''
      },
      materialsId: '',

      fileList: [],

      editVisible: false,
      pdfFlag: false,

      materialList:[],
      tabelHeaderList: [{
        name: '任务',
      }, {
        name: '提交材料',
      }, {
        name: '操作'
      }],
    };
  },
  components: {},
  computed: {
    ...mapState(["dataEvaluateList"])
  },
  methods: {
    // ...mapMutations(['']),

     beforeAvatarUpload (file) {
       console.log(file.type)
      const isJPG = file.type === 'application/pdf'
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    httpRequest (data) {
      // let _this = this
      // let rd = new FileReader() // 创建文件读取对象

      let file = data.file

      this.file = data.file

      // rd.readAsDataURL(file) // 文件读取装换为base64类型
      // rd.onloadend = function (e) {
      //   _this.data.imageUrl = this.result // this指向当前方法onloadend的作用域
      // }
    },

    handleGetMaterialUploadInfo() {

      let param = {}
      // param.userId = localStorage.getItem('ms_usernameid')
      param.userId = '104'
      this.loadingFlag = true
      this.api
        .handleGetMaterialUploadInfo(param)
        .then(this.handleGetMaterialUploadInfoSucc.bind(this));
    },

    handleGetMaterialUploadInfoSucc(res) {
      setTimeout(() => {
        this.loadingFlag = false;
      }, 1000);
      if( res.code == 200 ) {
        this.materialList = res.data
      } else {
        this.$message.error(res.message);
      }
    },


// 前端

    handleClickUploading(item) {
      console.log(item, 'item')
      this.file = undefined
      this.materialsId = item.materialsId
      this.editVisible = true;

      this.fileList = [];
    },

    // 确定上传
    handleUploadingFile() {
      console.log(this.file)

      let formData = new FormData();
          formData.append('file', this.file);
          formData.append('materialsId',this.materialsId);

      this.api
      .handleUploadingMateriaList(formData)
      .then(this.handleUploadingMateriaListSucc.bind(this));
      
    },

    handleUploadingMateriaListSucc(res) {
      if( res.code == 200 ) {
        this.handleGetMaterialUploadInfo()
        this.$message({
          message: "上传成功!",
          type: "success"
        });
      this.editVisible = false;
      } else {
        this.$message({
          message: res.message,
          type: "error"
        });
      }

    }, 
    // 删除文件
    handleClickDeleteFile(materialsListItem, items) {
      
      console.log(materialsListItem)

      this.$confirm("确定要删除吗？", "提示", {
        type: "warning"
      })
        .then(() => {
          this.materialsId = materialsListItem.materialsId
      let param = {}
      param.materialsId = this.materialsId
      this.api
      .handleDeleteMaterial(param)
      .then(this.handleDeleteMaterialSucc.bind(this));
        })
        .catch(() => {});
    },
    handleDeleteMaterialSucc(res) {
      if( res.code == 200 ) {
          this.$message.success("删除成功");
          this.handleGetMaterialUploadInfo()
      } else {
        this.$message({
          message: res.message,
          type: "error"
        });
      }
    },
    // 取消上传
    handleClickCancle() {
      this.editVisible = false;
      this.fileFrom = {
        fileName: ""
      };

      this.fileList = [];
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },

    handleBeforeUpload(file) {
      var testmsg = file.name.substring(file.name.lastIndexOf(".") + 1);

      console.log(testmsg);

      const extension = testmsg === "pptx";

      const extension2 = testmsg === "pdf";

      if (!extension && !extension2) {
        this.$message({
          message: "上传文件真的只能是 pdf格式!",
          type: "warning"
        });
      }
      return extension || extension2;
    },

    handleShowPdf(materialsListItem) {
      if (!materialsListItem.status) {
        this.$message({
          message: "请先上传材料",
          type: "error"
        });

        return false;
      }

      const url = materialsListItem.pdfUrl;
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
  mounted() {
    this.handleGetMaterialUploadInfo()
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
    width: 33%;
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
.editBtn {
  margin: 0 auto;
  display: block;
}
.rightBox {
  width: 100%;
  .rightContent {
    display: flex;
    p {
      width: 20%;
    }
  }
}

.textCenter {
  text-align: center;
  box-sizing: border-box;
}

.padding {
  padding: 0 50px;
}

.textLeft {
  display: inline-block;
  text-align: left;
}

.scoreContent {
}

.flexCenter {
  display: flex;
  justify-content: center;
}

.btnStyle {
  height: 40px;
}

.red {
  color: #67c23a;
  cursor: pointer;
}

.cur {
  cursor: pointer;
}

.titleIcon {
  display: inline-block;
  width: 28px;
  height: 28px;
  background: url("../../assets/img/iconIndex.png") no-repeat;
  background-size: 100% 100%;
  margin-right: 16px;
}

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
  padding: 20px 0;
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
.backgroundBlue {
  background: rgba(81, 155, 236, 0.05);
}

.bakcgroundFFF {
  background: rgba(81, 155, 236, 0.15);
}

.el-form {
  position: relative;
}

.pdfUpdate {
  display: inline-block;
  width: 120px;
  height: 120px;
  background: url("../../assets/img/updatePdfBtn.png") no-repeat;
  background-size: 100% 100%;
}

.pdfBox {
  width: 200px;
  // position: absolute;
  //   left: 50%;
  margin-left: 50%;
  margin-top: 50px;
}

.el-upload__tip {
  font-size: 24px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(82, 82, 82, 1);
}

.operationBtnIcon {
  margin-left: 20px;
  margin-top: 7px;
}

.addIcon {
  background: url("../../assets/img/rwaddbtn.png") no-repeat;
  background-size: 100% 100%;
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  float: left;
  margin-left: 30px;
  margin-top: 5px;
}

.updateBtns {
  background: url("../../assets/img/rwUpdateBtn.png") no-repeat;
}

.rwDeleteBtn {
  background: url("../../assets/img/rwUpdateBtn.png") no-repeat;
}
.deleteBtnBox {
  background: linear-gradient(
    -8deg,
    rgba(231, 121, 47, 1) 0%,
    rgba(238, 166, 108, 1) 100%
  );
  border: none;
}

.addItemBtn {
  float: right;
  width: 118px;
  height: 32px;

  border-radius: 10px 8px 10px 10px;
  line-height: 32px;
  padding: 0 !important;
  position: relative;
  span {
    float: left;
  }
}

.operationBtn {
  width: 128px;
}

.deleteBtnBox {
  background: linear-gradient(
    -8deg,
    rgba(231, 121, 47, 1) 0%,
    rgba(238, 166, 108, 1) 100%
  );
  border: none;
}

.operationBtnIcon {
  margin-left: 20px;
}

.updateBtns {
  background: url("../../assets/img/rwUpdateBtn.png") no-repeat;
}

.rwDeleteBtn {
  background: url("../../assets/img/rwDeleteBtn.png") no-repeat;
}

.fontStless {
  text-align: justify;
  text-justify: inter-ideograph;
}

.deleteBtn {
  background: #fab6b6;
}
</style>
