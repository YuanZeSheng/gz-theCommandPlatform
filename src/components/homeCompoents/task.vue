<template>
  <div class="home3Container" v-loading="loadingFlag"  element-loading-text="数据加载中">
    <el-button type="primary" class="addItemBtn" @click="handleClickAddTask()">
      <i class="addIcon"></i>
      <span>新增</span>
    </el-button>
    <!-- 模版 -->
    <el-tabs :tab-position="tabPosition" class="el-table" v-model="tabValue">
      <el-tab-pane v-for="(item, index) in taskPageList" :key="index" style="font-size: 18px">
        <span slot="label">
          <span v-html="item.name"></span>
        </span>

        <div v-for="(it, ind) in item.content" :key="ind" style="margin-bottom: 35px">
          <p class="title">
            <span class="titleIcon"></span>
            {{ind+1}}.
            {{it.taskTitle}}
            <span>( {{it.taskGrade}} 分 )</span>
            <el-button
              type="primary"
              class="addItemBtn deleteBtnBox"
              @click="handleClickDelelteChildrenTask(it)"
            >
              <i class="addIcon operationBtnIcon rwDeleteBtn"></i>
              <span>删除</span>
            </el-button>

            <el-button
              type="primary"
              class="addItemBtn addTskRight"
              @click="handleClickAddTask(it)"
            >
              <i class="addIcon"></i>
              <span>新增</span>
            </el-button>
          </p>


          <!-- <div class="tableHeader" v-if="index == 1">
            <span
              v-for="(tabelHeaderItem, tabelHeaderIndex) in tabelHeaderList"
              :key="tabelHeaderIndex"
            >{{tabelHeaderItem.name}}</span>
          </div> -->

          <div class="tableContent">
            <div
              class="scoreContent"
              v-for="(tabelDetailListItem, tabelDetailListIndex) in it.taskDetailList"
              :key="tabelDetailListIndex"
            >
              <template v-if="tabelDetailListItem.task">
                <p class="tabelDetailListItem">
                  <span style="width: 70%" class="spanSyle">{{tabelDetailListItem.task}}</span>
                  <span :style="[it.type == 'grouping' ? '20%' : 'width: 8%']" class="flex">
                    <el-button
                      type="primary"
                      class="addItemBtn deleteBtnBox"
                      @click="handleClickDelelteChildrenTask(tabelDetailListItem)"
                    >
                      <i class="addIcon operationBtnIcon rwDeleteBtn"></i>
                      <span>删除</span>
                    </el-button>
                  </span>
                </p>
              </template>
            </div>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
    <!-- 新增任务 -->

    <el-dialog
      :title="addTitle"
      :visible.sync="addTaskFlag"
      width="30%"
      :close-on-click-modal="false"
    >
      <el-form
        ref="addTaskForm"
        :model="addTaskForm"
        label-width="100px"
        :label-position="lebelPosi"
      >
        <template v-if="addTitle == '新增二级项'">
          <el-form-item label="任务名称" prop="title">
            <el-input v-model="addTaskForm.title"></el-input>
          </el-form-item>
          <el-form-item label="任务分值" prop="allNumber">
            <el-input v-model="addTaskForm.allNumber"></el-input>
          </el-form-item>
        </template>

        <template v-if="addTitle == '新增一级项'">
          <el-form-item label="一级名称" prop="oneTitle">
            <el-input v-model="addTaskForm.oneTitle"></el-input>
          </el-form-item>
          <el-form-item label="任务总分值" prop="taskGrade">
            <el-input v-model="addTaskForm.taskGrade"></el-input>
            
          </el-form-item>
         
        </template>

        <template v-if="addTitle == '新增二级项任务'">
          <el-form-item label="任务内容" prop="taskContent">
            <el-input type="textarea" v-model="addTaskForm.taskContent"></el-input>
          </el-form-item>
          <el-form-item label="扣分机制" prop="step">
            <el-input v-model="addTaskForm.step"></el-input>
          </el-form-item>
          <el-form-item label="扣分界值" prop="scoreStop">
            <el-input v-model="addTaskForm.scoreStop"></el-input>
          </el-form-item>
          <el-form-item label="扣分标准" prop="marksStandard">
            <el-input v-model="addTaskForm.marksStandard"></el-input>
          </el-form-item>
        </template>

      <template v-if="addTitle == '新增一级项任务'">
          <el-form-item label="子任务合集" prop="taskContent">
            <el-select v-model="addTaskForm.taskCard" multiple placeholder="请选择任务">
              <el-option
                v-for="item in taskOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
        </template>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addTaskFlag = false">取 消</el-button>
        <el-button type="primary" @click="handleSaveTask">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      loadingFlag: true,
      addTaskDetailId: '',
      addGroupId: "",
      tabPosition: "top",
      addTaskFlag: false,
      lebelPosi: "left",
      tabValue: "",
      addTaskForm: {
        
        title: "",
        allNumber: "",

        // 新增任务
        taskContent: "",
        step: "",  //扣分机制
        scoreStop: "",  //扣分界值

        // 任务组
        oneTitle: "",
        taskCard: [],
        taskValue: "",
        taskGrade: "",
        marksStandard: ''
      },
      addTitle: "新增子任务",
      taskOptions: [
      ],


      taskPageList: [],
      tabelHeaderList: [{
          name: '任务',
        }, {
          name: '操作',
        }],
    };
  },
  components: {},
  computed: {
    ...mapState([""])
  },
  methods: {
    ...mapMutations([
      "handleDelelteChildrenTask",
      "handleDelelteGroupTask"
    ]),


  handleGetTaskList() {
    this.loadingFlag = true
    this.api
        .handleGetTaskList()
        .then(this.handleGetTaskListSucc.bind(this));
  },
  handleGetTaskListSucc(res) { 
     setTimeout(() => {
        this.loadingFlag = false;
      }, 1000);
    if( res.code == 200 ) {
      this.taskPageList = res.data
    } else {
      this.$message.error(res.message);
    }
   },



// 前端逻辑

    // 添加子任务
    handleClickAddTask(item) {

      this.$nextTick(() => {
        if (this.$refs.addTaskForm !== undefined) {
          this.$refs.addTaskForm.resetFields();
          this.addTaskForm.taskCard = [];
        }
      });

      this.addTaskDetailId = item ? item.typeId : ''

      switch (this.tabValue) {
        case '0':
          this.addTitle = item ? '新增二级项任务' : '新增二级项'
        break;

        case '1':
          this.handleGetCompletedTaskList()
          this.addGroupId = item ? item.typeId : ''
          this.addTitle = item ? '新增一级项任务' : '新增一级项'
        break;

        
      }
      


      this.addTaskFlag = true;

    },
    handleGetCompletedTaskList() {
      this.taskOptions = []
      this.api
        .handleGetCompletedTaskList()
        .then(this.handleGetCompletedTaskListSucc.bind(this));
    },
    handleGetCompletedTaskListSucc(res) {
      
      if( res.code == 200 ) {
        res.data.map( item => {
          let obj = {}
          obj.label = item.typeName
          obj.value = item.typeId
          this.taskOptions.push(obj)
        } )

      } else {
        // this.$message.error(res.message)
      }
    },

    // 添加保存
    handleSaveTask() {
      switch (this.addTitle) {
        case "新增二级项":
          this.handleSaveChildrenTask();
        break;
        case "新增二级项任务":
          this.handleSaveTaskDetail()
        break;
        case "新增一级项":
          this.handleSaveGroupTask();
        break;
        case "新增一级项任务":
          this.handleSaveGroupTaskDetail();
        break;
      }
    },
    handleSaveGroupTaskDetail() {

      let param = {}
      param.typeId = this.addGroupId
      param.arrayId = this.addTaskForm.taskCard

      this.api
        .handleAddGroupTaskDetail(param)
        .then(this.handleAddGroupTaskDetailSucc.bind(this));

    },

    handleAddGroupTaskDetailSucc(res) {
      if( res.code == 200 ) {
        this.addTaskFlag = false;
        this.$message.success( '新增成功' )
        this.handleGetTaskList()
      } else {
        this.$message.error(res.message)
      }
    },

    handleSaveTaskDetail() {
      let param = {}
      param.typeId = this.addTaskDetailId
      param.taskTitle = this.addTaskForm.taskContent
      param.minusScore = this.addTaskForm.step
      param.scoreStop = this.addTaskForm.scoreStop
      param.marksStandard = this.addTaskForm.marksStandard

      this.api
        .handleAddTaskDetail(param)
        .then(this.handleAddTaskDetailSucc.bind(this));
    },

    handleAddTaskDetailSucc(res) {
      if( res.code == 200 ) {
        this.addTaskFlag = false;
        this.$message.success("新增子任务详情成功"); 
        this.handleGetTaskList()
      } else {
        this.$message.error(res.message); 
      }
    },

    // 保存子任务
    handleSaveChildrenTask() {
      let addChildrenTask = {
        taskTitle: this.addTaskForm.title,
        taskGrade: this.addTaskForm.allNumber,
      };

      this.api
        .handleAddTaskType(addChildrenTask)
        .then(this.handleAddTaskTypeSucc.bind(this));
        
    },

    handleAddTaskTypeSucc(res) {
      if( res.code == 200 ) {
        this.addTaskFlag = false;
        this.$message.success("新增二级项成功"); 
        this.handleGetTaskList()
      } else {
        this.$message.error(res.message); 
      }
    },
    // 保存任务组
    handleSaveGroupTask() {

       let param = {
        taskTitle: this.addTaskForm.oneTitle,
        taskGrade: this.addTaskForm.taskGrade,
      };

      this.api
        .handleAddTaskGroupType(param)
        .then(this.handleAddTaskGroupTypeSucc.bind(this));

    },

    handleAddTaskGroupTypeSucc( res ) {
      if( res.code == 200 ) {
        this.addTaskFlag = false;
        this.$message.success("新增一级项成功"); 
        this.handleGetTaskList()
      } else {
        this.$message.error(res.message); 
      }
    },
    handleClickDelelteChildrenTask( item ) {

      this.$confirm("确定删除吗？", "提示", {
        type: "warning"
      })
        .then(() => {
          let param = {}
          param.id = item.typeId ? item.typeId : item.taskId
          param.type = item.type
          this.handleDeleteTaskDetail(param)
          return
        })
        .catch(() => {});
    },

    handleDeleteTaskDetail(param) {
      this.api
        .handleDeleteTaskDetail(param)
        .then(this.handleDeleteTaskDetailSucc.bind(this));
    },

    handleDeleteTaskDetailSucc(res) {
      if( res.code == 200 ) {
        this.$message.success("删除成功"); 
        this.handleGetTaskList()
      } else {
        this.$message.error(res.message); 
      }
    }

  },
  watch: {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {
    this.handleGetTaskList()
  },
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {}
};
</script>

<style scoped lang="less" >
.addItemBtn {
  position: absolute;
  z-index: 2;
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
  span {
    float: left;
  }
  right: 0;
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

.deleteBtn {
  background: url("../../assets/img/deleteBtn.png") no-repeat;
  background-size: 100% 100%;
}
.title {
  text-align: left;
  font-size: 28px;
}
.home3Container {
  position: relative;
  height: 100%;
  .addTaskBtn {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
  }
  .el-table {
    min-height: 100%;
    font-size: 20px;
    overflow: inherit;
    position: relative;
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
  display: flex;
  justify-content: space-between;
  span {
    display: inline-block;
    width: 20%;
    text-align: center;
  }
}

.scoreContent {
  width: 100%;
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

.deductMarksBtn {
  border: none;
  background: transparent;
  color: red;
  font-size: 20px;
}

.tabelDetailListItem {
  background: rgba(81, 155, 236, 0.05);
  border-bottom: 1px dashed rgba(90, 90, 90, 0.53);
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
}

.rwDeleteBtn {
  background: url("../../assets/img/rwDeleteBtn.png") no-repeat;
  margin-top: 7px;
}
.deleteBtnBox {
  background: linear-gradient(-8deg, #e7792f 0%, #eea66c 100%);
  border: none;
  position: inherit;
  display: block;
  margin: 0 auto;
}

.flex {
  display: flex;
}

.spanSyle {
  padding: 0 20px;
  box-sizing: border-box;
}

.addTskRight {
  right: 133px;
}
.el-select{
  width: 300px;
}
</style>
