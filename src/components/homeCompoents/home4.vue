<template>
  <div class="home3Container" v-loading="loadingFlag"  element-loading-text="数据加载中">
    <!-- 模版 -->
    <el-tabs :tab-position="tabPosition" class="el-table">
      <el-tab-pane v-for="(item, index) in dataList" :key="index" style="font-size: 18px">
        <span slot="label">
          <span>
            {{item.name}}<br>({{item.grade}}分) 
          </span>
        </span>
        <div v-for="(it, ind) in item.content" :key="ind" style="marginBottom: 35px">
          <p class="title">
            <span class="titleIcon"></span>
            {{ind + 1}}. {{it.taskTitle}}
            <span>(总分：{{it.taskGrade}})</span>
            <el-button type="primary" class="addItemBtn" @click="handleClickItemBtn(index, ind,it)">
              <i class="addIcon"></i>
              <span>新增</span>
            </el-button>
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
              v-for="(tabelDetailListItem, tabelDetailListIndex) in it.taskDetailList"
              :key="tabelDetailListIndex"
              :class="['tabContent', tabelDetailListIndex % 2 ==0 ? 'backgroundBlue' : 'bakcgroundFFF']"
            >
              <!-- 任务 -->
              <div class="task fontStyle">{{tabelDetailListIndex + 1}}. {{tabelDetailListItem.task}}</div>

              <div class="department textCenter">{{tabelDetailListItem.department}}</div>

              <div class="evaluationList textCenter">
                <p
                  v-for="(tabelDetailListItems, tabelDetailListIndex) in tabelDetailListItem.materialsList"
                  :key="tabelDetailListIndex"
                  :class="tabelDetailListIndex == tabelDetailListItem.materialsList.length - 1 ? 'lastMarginBottom' : 'margimBottom'"
                >{{tabelDetailListIndex + 1}}. {{tabelDetailListItems.name}}</p>
              </div>

              <div class="textCenter flexCenter">
                <el-button
                  type="primary"
                  class="addItemBtn operationBtn"
                  @click="handleClickEdit(tabelDetailListItem, it)"
                >
                  <i class="addIcon operationBtnIcon updateBtns"></i>
                  <span>编辑</span>
                </el-button>
                <el-button
                  type="primary"
                  class="addItemBtn operationBtn deleteBtnBox"
                  @click="handleDelete(tabelDetailListItem)"
                >
                  <i class="addIcon operationBtnIcon rwDeleteBtn"></i>
                  <span>删除</span>
                </el-button>

                
              </div>
            </div>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>

    <!-- 编辑弹出框 -->
    <el-dialog title="编辑" :visible.sync="editVisible" width="30%" :close-on-click-modal="false">
      <el-form ref="updateForm" :model="updateForm" label-width="100px" :label-position="lebelPosi">
        <el-form-item label="任务">
          <!-- <el-select v-model="updateForm.taskValue"  placeholder="请选择任务">
              <el-option
                v-for="item in taskOptions"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              ></el-option>
            </el-select> -->
            <p>{{updateData.value}}</p>
        </el-form-item>
        <!-- <el-form-item label="考核分值">
          <el-input v-model="updateForm.taskNumValue"></el-input>
        </el-form-item>-->
        <el-form-item label="责任单位">
          <!-- <el-input v-model="updateForm.departmentValue"></el-input> -->

          <el-select v-model="updateForm.departmentValue" placeholder="请选择">
            <el-option
              v-for="item in organizationSelectList"
              :key="item.value"
              :label="item.organizstionName"
              :value="item.id"
              :disabled="item.disabled"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="提交材料">
          <p v-for="(item, index) in updateForm.evaluationListValue" :key="index" style="overflow: hidden;">
            <el-input v-model="item.nameValue" style="width: 80%; margin-top: 10px"></el-input>
             <i class="daddIcon operationBtnIcon delBtns"
              @click="handleClickDeleteBtnEditItem(index)"
            ></i>
          </p>
          <i class="addBtn addClIcon" @click="handleClickAddBtn"></i>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleClickCancle">取 消</el-button>
        <el-button type="primary" @click="saveEdit">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 新增弹出框 -->

    <el-dialog title="分派任务" :visible.sync="addEditVisible" width="30%" :close-on-click-modal="false">
      <el-form ref="addForm" :model="addForm" label-width="100px" :label-position="lebelPosi">
        <el-form-item label="任务">
          <!-- <el-input v-model="addForm.taskValue"></el-input> -->
          <el-select v-model="addForm.taskValue"  placeholder="请选择任务">
              <el-option
                v-for="item in taskOptions"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              ></el-option>
            </el-select>
        </el-form-item>
        
        <!-- <el-form-item label="考核分值">
          <el-input v-model="addForm.taskNumValue"></el-input>
        </el-form-item>-->
        <el-form-item label="责任单位">
          <!-- <el-input v-model="updateForm.departmentValue"></el-input> -->

          <el-select v-model="addForm.departmentValue" placeholder="请选择部门">
            <el-option
              v-for="item in organizationSelectList"
              :key="item.value"
              :label="item.organizstionName"
              :value="item.id"
              :disabled="item.disabled"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="提交材料">
          <p
            v-for="(item, index) in addForm.evaluationListValue"
            :key="index"
            style="overflow: hidden"
          >
            <el-input v-model="item.nameValue" style="width: 80%; margin-top: 10px"></el-input>
            <i class="addIcon operationBtnIcon delBtns" @click="handleClickDeleteBtnAddItem(index)"></i>
          </p>

          <i class="addBtn addClIcon" @click="handleClickAddItemBtn"></i>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleClickCancleAddItem">取 消</el-button>
        <el-button type="primary" @click="saveAddItem">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      updateData: {
        value: '',
        id: ''
      },
      addChildrenTaskId: '',
      loadingFlag: true,
      tabelHeaderList: [{
        name: '任务',
      }, {
        name: '责任单位',
      }, {
        name: '提交材料',
      }, {
        name: '操作',
      }],
      lebelPosi: "left",
      dataList: [],
      taskOptions: [],
      tabPosition: "top",
      editVisible: false,
      addEditVisible: false,
      updateForm: {
        taskValue: "",
        departmentValue: "",
        evaluationListValue: [],
        taskNumValue: ""
      },

      addForm: {
        taskValue: "",
        departmentValue: "",
        evaluationListValue: [],
      },

      indexObj: {},

      addIndexObj: {},
      // 责任单位的下拉列表
      organizationSelectList:[]
    };
  },
  components: {},
  computed: {},
  methods: {
    handleGetTaskAssignmentInfo() {
      this.loadingFlag = true
      this.api
        .handleGetTaskAssignmentInfo()
        .then(this.handleGetTaskAssignmentInfoSucc.bind(this));
    },

    handleGetTaskAssignmentInfoSucc(res) {
       setTimeout(() => {
        this.loadingFlag = false;
      }, 1000);

      if( res.code == 200 ) {
        this.dataList = res.data
      } else {
        this.$message.error(res.message);
      }

    },



// 前端

    handleDelete(item) {


      // 二次确认删除
      this.$confirm("确定要删除吗？", "提示", {
        type: "warning"
      })
        .then(() => {
          // this.api.handleDeleteSubtask()
          // .then(this.handleDeleteSubtaskSucc.bind(this));
          // this.handleDeleteTaskListTabelDetailList(indexObj);
          let param = {}
          param.taskId = item.id
          
           this.api
          .handleDeleteSubtask(param)
          .then(this.handleDeleteSubtaskSucc.bind(this));
        })
        .catch(() => {});
    },
    handleDeleteSubtaskSucc(res) {
      if( res.code == 200 ) {
          this.$message.success("删除成功");

      } else {
          this.$message.error("删除失败");

      }
    },

    handleClickEdit(item, it) {


      this.updateData.value = item.task
      this.updateData.id = item.taskId

      this.editVisible = true;

      this.updateForm.departmentValue = item.departmentId

      item.materialsList.map((item, index) => {
        this.updateForm.evaluationListValue.push({ nameValue: item.name });
      });

    },
    saveEdit() {
      let evaluationList = [];

      this.updateForm.evaluationListValue.map((item, index) => {
        evaluationList.push({ name: item.nameValue });
      });

      let editFromData = {
        detailsId: this.updateData.taskId,
        departmentId: this.updateForm.departmentValue,
        evaluationList
      };

      console.log(editFromData)

      this.api
        .handleUpdateTask(editFromData)
        .then(this.handleUpdateTaskSucc.bind(this));

     
    },

    handleUpdateTaskSucc(res) {
      if( res.code == 200 ) {
         this.editVisible = false;


        this.handleGetTaskAssignmentInfo()




      this.$message.success(`修改成功`);

      this.updateForm = {
        taskValue: "",
        departmentValue: "",
        evaluationListValue: []
      };
      } else {
        this.$message.error(res.message);
      }
    },
    handleClickCancle() {
      this.updateForm = {
        taskValue: "",
        departmentValue: "",
        evaluationListValue: []
      };
      this.editVisible = false;
    },

    handleClickCancleAddItem() {
      this.addForm = {
        taskValue: "",
        departmentValue: "",
        evaluationListValue: []
      };
      this.addEditVisible = false;
    },

    saveAddItem() {
      let evaluationList = [];

      this.addForm.evaluationListValue.map((item, index) => {
        evaluationList.push({ name: item.nameValue });
      });
      let addFromData = {
        detailsId: this.addForm.taskValue,
        departmentId: this.addForm.departmentValue,
        evaluationList
      };

      this.api
      .handleSubmitTask(addFromData)
      .then(this.handleSubmitTaskSucc.bind(this));
    },
    handleSubmitTaskSucc(res) {

      if( res.code == 200 ) {
        this.addEditVisible = false;
        this.handleGetTaskAssignmentInfo()
        this.$message.success(`新增成功`);
      } else {
        this.$message.error(res.message);
      }
    },

    handleClickAddBtn() {
      this.updateForm.evaluationListValue.push({ nameValue: "" });
    },

    handleClickDeleteBtnEditItem(index) {
      this.updateForm.evaluationListValue.splice(index, 1);
    },

    handleClickDeleteBtnAddItem(index) {
      this.addForm.evaluationListValue.splice(index, 1);
    },

    handleClickAddItemBtn() {
      this.addForm.evaluationListValue.push({ nameValue: "" });
    },

    handleClickItemBtn(index, ind,it) {
      this.handAddTask(it.typeId)
      
      this.addEditVisible = true;
    },
    // 新增-------任务的下拉列表
    handAddTask(id){
      let param = {}
      param.id = id
      this.addChildrenTaskId = id
      this.api
        .handleGetFindNotAllocation(param)
        .then(this.handAddTaskrender.bind(this));
    },
    handAddTaskrender(res){
      if( res.code == 200 ) {
        res.data.map( item => {
         this.taskOptions=res.data
        } )
      } else {
        this.$message.error(res.message);
      }
    },
    // 新增---------责任单位的下拉列表
    handunit(){
       this.api
        .handleGetOrganization()
        .then(this.handunitrender.bind(this));
    },
    handunitrender(res){
      this.organizationSelectList=res.data
    }
  },
  watch: {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {
    this.handleGetTaskAssignmentInfo()
    this.handunit()
  },
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
    width: 25%;
    text-align: center;
  }

  span:nth-child(1) {
    width: 25%;
  }
  span:nth-child(2) {
    width: 25%;
  }
  span:nth-child(3) {
    width: 30%;
  }
  span:nth-child(4) {
    width: 20%;
  }
}

.scoreContent {
  width: 100%;
  display: flex;
  border-bottom: 1px solid #f0f0f0;
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
      width: 33%;
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

.scoreContent {
  margin-top: 20px;
}

.flexCenter {
  display: flex;
  justify-content: center;
  align-items: center;
}

.paddiStyle {
  padding-left: 130px;
  box-sizing: border-box;
}

.tabContent {
  display: flex;
  padding: 23px 0;
  border-bottom: 1px dashed rgba(90, 90, 90, 0.53);

  div {
    width: 25%;
  }

  div:nth-child(1) {
    width: 25%;
  }
  div:nth-child(2) {
    width: 25%;
  }
  div:nth-child(3) {
    width: 30%;
  }
  div:nth-child(4) {
    width: 20%;
  }
}

.red {
  color: #ff0000;
}

.addBtn {
  font-size: 25px;
  color: #409eff;
  cursor: pointer;
  margin-top: 10px;
}

.deleteBtn {
  color: red;
  font-size: 25px;
  cursor: pointer;
}

.title {
  font-size: 24px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(55, 128, 248, 1);
  border-bottom: 1px solid rgba(90, 90, 90, 0.5);
  padding-bottom: 21px;
  margin-bottom: 14px;
  margin-top: 0;
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
  // background: rgba(81, 155, 236, 0.05);
  margin-bottom: 0;
  border: 0;
  border-bottom: 1px dashed rgba(90, 90, 90, 0.53);
  padding: 23px 0px;
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

.task {
  padding-left: 40px;
  box-sizing: border-box;
}

.addItemBtn {
  float: right;
  width: 118px;
  height: 32px;
  background: linear-gradient(
    -8deg,
    rgba(47, 120, 231, 1) 0%,
    rgba(108, 173, 238, 1) 100%
  );
  border-radius: 10px 8px 10px 10px;
  line-height: 32px;
  padding: 0 !important;
  position: relative;
  span {
    float: left;
  }
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

.operationBtn {
  width: 98px;
}

.operationBtnIcon {
  margin-left: 20px;
}

.updateBtns {
  background: url("../../assets/img/rwUpdateBtn.png") no-repeat;
}

.rwDeleteBtn {
  background: url("../../assets/img/deleteBtn.png") no-repeat;
}
.deleteBtnBox {
  background: linear-gradient(
    -8deg,
    rgba(231, 121, 47, 1) 0%,
    rgba(238, 166, 108, 1) 100%
  );
  border: none;
}

.addClIcon {
  background: url("../../assets/img/addBtn.png") no-repeat;
  background-size: 100% 100%;
  display: inline-block;
  width: 42px;
  height: 42px;
}

.el-input {
  float: left;
  margin-top: 0 !important;
  margin-bottom: 10px;
}

.el-select {
  width: 100%;
}

.deleteClIcon {
  background: url("../../assets/img/rwDeleteBtn.png") no-repeat;
  background-size: 100% 100%;
  display: inline-block;
  width: 42px;
  height: 42px;
  float: left;
  margin-left: 10px;
  margin-top: 0;
}

.rwDeleteBtn {
  background: url("../../assets/img/rwDeleteBtn.png") no-repeat;
  margin-top: 7px;
}

.delBtns {
  display: inline-block;
  width: 42px;
  height: 42px;
  background: url("../../assets/img/deleteBtn.png") no-repeat;
}

// 弹出窗
</style>
