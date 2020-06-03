<template>
  <div class="home3Container">
    <!-- 模版 -->
    <el-tabs :tab-position="tabPosition" class="el-table">
      <el-tab-pane
        :label="item.name"
        v-for="(item, index) in taskList"
        :key="index"
        style="font-size: 18px"
      >
        <div v-for="(it, ind) in item.content" :key="ind">
          <p class="title">
            {{ind + 1}}. {{it.title}}
            <el-button type="primary" class="addItemBtn" @click="handleClickItemBtn(index, ind)">
              新增
              <i class="el-icon-circle-plus-outline el-icon--right"></i>
            </el-button>
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
              class="tabContent"
              v-for="(tabelDetailListItem, tabelDetailListIndex) in it.tabelDetailList"
              :key="tabelDetailListIndex"
            >
              <!-- 任务 -->
              <div class="task">{{tabelDetailListIndex + 1}}. {{tabelDetailListItem.task}}</div>

              <div class="department textCenter">{{tabelDetailListItem.department}}</div>

              <div class="evaluationList">
                <p
                  v-for="(tabelDetailListItem, tabelDetailListIndex) in tabelDetailListItem.evaluationList"
                  :key="tabelDetailListIndex"
                >{{tabelDetailListIndex + 1}}. {{tabelDetailListItem.name}}</p>
              </div>

              <div class="textCenter">
                <el-button
                  type="text"
                  icon="el-icon-edit"
                  @click="handleClickEdit(index, ind, tabelDetailListIndex)"
                >编辑</el-button>
                <el-button
                  type="text"
                  icon="el-icon-delete"
                  class="red"
                  @click="handleDelete(index, ind, tabelDetailListIndex)"
                >删除</el-button>
              </div>
            </div>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>

    <!-- 编辑弹出框 -->
    <el-dialog title="编辑" :visible.sync="editVisible" width="30%" :close-on-click-modal="false">
      <el-form ref="updateForm" :model="updateForm" label-width="70px">
        <el-form-item label="任务">
          <el-input v-model="updateForm.taskValue"></el-input>
        </el-form-item>
        <el-form-item label="考核分值">
          <el-input v-model="updateForm.taskNumValue"></el-input>
        </el-form-item>
        <el-form-item label="责任单位">
          <!-- <el-input v-model="updateForm.departmentValue"></el-input> -->

          <el-select v-model="updateForm.departmentValue" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              :disabled="item.disabled"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="提交材料">
          <p v-for="(item, index) in updateForm.evaluationListValue" :key="index">
            <el-input
              v-model="item.nameValue"
              style="width: 80%; margin-top: 10px"
            >
            </el-input>
            <i class="el-icon-remove-outline deleteBtn" @click="handleClickDeleteBtnEditItem(index)"></i>
          </p>
          <i class="el-icon-circle-plus-outline addBtn" @click="handleClickAddBtn"></i>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleClickCancle">取 消</el-button>
        <el-button type="primary" @click="saveEdit">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 新增弹出框 -->

    <el-dialog title="新增" :visible.sync="addEditVisible" width="30%" :close-on-click-modal="false">
      <el-form ref="addForm" :model="addForm" label-width="70px">
        <el-form-item label="任务">
          <el-input v-model="addForm.taskValue"></el-input>
        </el-form-item>
        <el-form-item label="考核分值">
          <el-input v-model="addForm.taskNumValue"></el-input>
        </el-form-item>
        <el-form-item label="责任单位">
          <!-- <el-input v-model="updateForm.departmentValue"></el-input> -->

          <el-select v-model="addForm.departmentValue" placeholder="请选择部门">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              :disabled="item.disabled"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="提交材料">

          <p v-for="(item, index) in addForm.evaluationListValue" :key="index">
            <el-input
              v-model="item.nameValue"
              style="width: 80%; margin-top: 10px"
            >
            </el-input>
            <i class="el-icon-remove-outline deleteBtn" @click="handleClickDeleteBtnAddItem(index)"></i>
          </p>

          <i class="el-icon-circle-plus-outline addBtn" @click="handleClickAddItemBtn"></i>
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
      options: [
        {
          value: "市公安交警局",
          label: "市公安交警局"
        },
        {
          value: "市消防救援支队",
          label: "市消防救援支队"
        },
        {
          value: "市委宣传部",
          label: "市委宣传部"
        },
        {
          value: "市委政法委",
          label: "市委政法委"
        },
        {
          value: "市教育局",
          label: "市教育局"
        }
      ],
      tabPosition: "top",
      editVisible: false,
      addEditVisible: false,
      updateForm: {
        taskValue: "",
        departmentValue: "",
        evaluationListValue: [],
        taskNumValue: ''
      },

      addForm: {
        taskValue: "",
        departmentValue: "",
        evaluationListValue: [],
        taskNumValue: ''
      },

      indexObj: {},

      addIndexObj: {}
    };
  },
  components: {},
  computed: {
    ...mapState(["taskList"])
  },
  methods: {
    ...mapMutations([
      "handleDeleteTaskListTabelDetailList",
      "handleChangeUpdateTaskList",
      "handleAddFromData"
    ]),

    handleDelete(index, ind, tabelDetailListIndex) {
      let indexObj = {
        taskListIndex: index,
        contentIndex: ind,
        tabelDetailListIndex: tabelDetailListIndex
      };

      // 二次确认删除
      this.$confirm("确定要删除吗？", "提示", {
        type: "warning"
      })
        .then(() => {
          this.$message.success("删除成功");
          // this.tableData.splice(index, 1);

          this.handleDeleteTaskListTabelDetailList(indexObj);
        })
        .catch(() => {});
    },

    handleClickEdit(index, ind, tabelDetailListIndex) {
      this.indexObj = {
        taskListIndex: index,
        contentIndex: ind,
        tabelDetailListIndex: tabelDetailListIndex
      };

      console.log(this.indexObj);

      let indexObj = {
        taskListIndex: index,
        contentIndex: ind,
        tabelDetailListIndex: tabelDetailListIndex
      };

      let editObj = this.taskList[indexObj.taskListIndex].content[
        indexObj.contentIndex
      ].tabelDetailList[tabelDetailListIndex];

      this.updateForm.taskValue = editObj.task;

      this.updateForm.departmentValue = editObj.department;

      let that = this;

      editObj.evaluationList.map((item, index) => {
        that.updateForm.evaluationListValue.push({ nameValue: item.name });
      });

      this.editVisible = true;
    },
    saveEdit() {
      let evaluationList = [];

      this.updateForm.evaluationListValue.map((item, index) => {
        evaluationList.push({ name: item.nameValue });
      });

      let editFromData = {
        task: this.updateForm.taskValue,
        department: this.updateForm.departmentValue,
        evaluationList
      };

      this.editVisible = false;

      let updateData = {
        indexObj: this.indexObj,
        updateObj: editFromData
      };

      this.handleChangeUpdateTaskList(updateData);

      this.$message.success(`修改成功`);

      this.updateForm = {
        taskValue: "",
        departmentValue: "",
        evaluationListValue: []
      };
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
        task: this.addForm.taskValue,
        department: this.addForm.departmentValue,
        evaluationList
      };

      let addData = {
        addIndexObj: this.addIndexObj,
        addFromData: addFromData
      };

      this.handleAddFromData(addData);

      this.addEditVisible = false;

      this.$message.success(`新增成功`);

      this.addForm = {
        taskValue: "",
        departmentValue: "",
        evaluationListValue: []
      };
    },

    handleClickAddBtn() {
      this.updateForm.evaluationListValue.push({ nameValue: "" });
    },

    handleClickDeleteBtnEditItem(index) {
      this.updateForm.evaluationListValue.splice(index,1)
    },

    handleClickDeleteBtnAddItem(index) {
      this.addForm.evaluationListValue.splice(index,1)
    },

    handleClickAddItemBtn() {
      this.addForm.evaluationListValue.push({ nameValue: "" });
    },

    handleClickItemBtn(index, ind) {
      this.addIndexObj = {
        taskListIndex: index,
        contentIndex: ind
      };

      this.addEditVisible = true;
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
    width: 25%;
    text-align: center;
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

  margin: 20px 0;

  div {
    width: 25%;
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

.addItemBtn {
  float: right;
  margin-right: 160px;
}

.deleteBtn {
  color: red;
  font-size: 25px;
  cursor: pointer;
}
</style>
