<template>
  <div class="home3Container">
    <!-- 模版 -->
    <el-tabs :tab-position="tabPosition" class="el-table">
      <el-tab-pane
        :label="item.name"
        v-for="(item, index) in dataEvaluateList"
        :key="index"
        style="font-size: 18px"
      >
        <div v-for="(it, ind) in item.content" :key="ind">
          <p class="title">{{ind + 1}}. {{it.title}}</p>

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
              <!-- 评价内容 -->

              <!-- 任务 -->
              <div class="rightBox">
                <div
                  v-for="(items, index) in scoreContentItem.list"
                  :key="index"
                  class="rightContent"
                >
                  <p class="textCenter textLeft padding" style="width: 33%; ">{{items.task}}</p>

                  <!-- 提交材料 -->
                  <div style="width:33%">
                    <div
                      v-for="(materialsListItem, materialsListIndex) in items.materialsList"
                      :key="materialsListIndex"
                      :class="[materialsListIndex == 1 ? 'red': 'cur']"
                      style="marginBottom: 20px"
                      @click="handleShowPdf(materialsListIndex)"
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
                        :type="materialsListIndex == 0 ? 'primary': 'primary'  "
                        class="btnStyle"
                        :disabled="materialsListIndex == 1 ? true: false "
                        @click="handleClickUploading"
                      >上传材料</el-button>

                      <el-button
                        type="danger"
                        class="btnStyle"
                        @click="handleClickDeleteFile"
                        :disabled="materialsListIndex !== 1 ? true: false "
                      >删除材料</el-button>
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
      <el-form ref="fileFrom" :model="fileFrom" label-width="70px">
        <el-form-item label="材料：">
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            multiple
            :on-exceed="handleExceed"
            :before-upload="handleBeforeUpload"
            :file-list="fileList"
          >
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传pdf文件</div>
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

import axios from 'axios'


export default {
  data() {
    return {
      tabPosition: "top",
      fileFrom: {
        fileName: ""
      },

      fileList: [],

      editVisible: false,
      pdfFlag: false
    };
  },
  components: {},
  computed: {
    ...mapState(["dataEvaluateList"])
  },
  methods: {
    // ...mapMutations(['']),

    handleClickUploading() {
      this.editVisible = true;


      this.fileList = []
    },

    // 确定上传
    handleUploadingFile() {

     
      this.$message({
        message: "上传成功!",
        type: "success"
      });

      this.editVisible = false
    },
    // 删除文件
    handleClickDeleteFile() {
       this.$confirm("确定要删除吗？", "提示", {
        type: "warning"
      }).then(() => {
          this.$message.success("删除成功");
        })
        .catch(() => {});
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

    handleShowPdf(index) {

      if( index == 0 ) {
        this.$message({
          message: "请先上传材料",
          type: "error"
        });

        return false
      }

          const url = '/showpdf.pdf'
          const link = document.createElement('a');
          let fname = 'report.pdf';
          link.href = url;
          link.target='_blank'
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
  margin: 10px 0 20px;
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
    margin-bottom: 20px;
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
  margin-top: 20px;
}

.flexCenter {
  display: flex;
  justify-content: center;
}

.btnStyle {
  height: 40px;
}

.red {
  color: #67C23A;
  cursor: pointer;
}

.cur {
  cursor: pointer;
}
</style>
