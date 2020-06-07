<template>
  <div class="home3Container">
    <!-- 模版 -->
    <div style="overflow: hidden; margin-bottom: 20px;">
      <el-button type="primary" class="addItemBtn" @click="handleClickItemBtn()">
        <i class="addIcon"></i>
        <span>新增</span>
      </el-button>
    </div>

    <!-- 表头 -->
    <div class="tableHeader">
      <span
        v-for="(tabelHeaderItem, index3) in organization.tableHeader"
        :key="index3"
      >{{tabelHeaderItem.name}}</span>
    </div>

    <!-- 表 -->
    <div class="tableContent">
      <div
        v-for="(tabelDetailListItem, tabelDetailListIndex) in organization.tabelDetailList"
        :key="tabelDetailListIndex"
        :class="['tabContent', 'flexCenter', tabelDetailListIndex % 2 ==0 ? 'backgroundBlue' : 'bakcgroundFFF']"
      >
        <div class="task textCenter">{{tabelDetailListIndex + 1}}</div>

        <div class="department textCenter">{{tabelDetailListItem.organizationName}}</div>

        <div class="evaluationList">
          <p class="textCenter">{{tabelDetailListItem.organizationNumber}}</p>
        </div>

        <div class="userInfo textCenter">
          <p>{{tabelDetailListItem.organizationUsername}}</p>
        </div>
        <div class="userInfo textCenter">
          <p>{{tabelDetailListItem.organizationUsername}}</p>
        </div>
        <div class="textCenter flexCenter">
          <el-button type="primary" class="addItemBtn operationBtn" @click="handleClickEdit()">
            <i class="addIcon operationBtnIcon updateBtns"></i>
            <span>编辑</span>
          </el-button>
          <el-button
            type="primary"
            class="addItemBtn operationBtn deleteBtnBox"
            @click="handleDelete()"
          >
            <i class="addIcon operationBtnIcon rwDeleteBtn"></i>
            <span>删除</span>
          </el-button>
        </div>
      </div>
    </div>

    <el-dialog title="编辑" :visible.sync="editVisible" width="30%" :close-on-click-modal="false">
      <el-form ref="updateForm" :model="updateForm" label-width="100px" :label-position="lebelPosi">
        <el-form-item label="序号">
          <el-input v-model="updateForm.sort"></el-input>
        </el-form-item>
        <el-form-item label="组织名称">
          <!-- <el-select v-model="updateForm.name" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              :disabled="item.disabled"
            ></el-option>
          </el-select> -->

          <el-input v-model="updateForm.name"></el-input>
        </el-form-item>
        <el-form-item label="组织编号">
          <el-input v-model="updateForm.number"></el-input>
        </el-form-item>
        <el-form-item label="账号">
          <el-input v-model="updateForm.passname"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="updateForm.password"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleClickCancle">取 消</el-button>
        <el-button type="primary" @click="saveEdit">确 定</el-button>
      </span>
    </el-dialog>

<!-- 新增 -->

    <el-dialog title="新增" :visible.sync="addEditVisible" width="30%" :close-on-click-modal="false">
      <el-form ref="addForm" :model="addForm" label-width="100px" :label-position="lebelPosi">
        <el-form-item label="序号">
          <el-input v-model="addForm.sort"></el-input>
        </el-form-item>
        <el-form-item label="组织名称">
          <el-input v-model="updateForm.name"></el-input>
        </el-form-item>
        <el-form-item label="组织编号">
          <el-input v-model="addForm.number"></el-input>
        </el-form-item>
        <el-form-item label="账号">
          <el-input v-model="addForm.passname"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="addForm.password"></el-input>
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
      lebelPosi: "left",
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
        sort: "",
        name: "",
        number: "",
        passname: "",
        password: ""
      },

      addForm: {
        sort: "",
        name: "",
        number: "",
        passname: "",
        password: ""
      },

      indexObj: {},

      addIndexObj: {}
    };
  },
  components: {},
  computed: {
    ...mapState(["organization"])
  },
  methods: {
    ...mapMutations([
      "handleDeleteTaskListTabelDetailList",
      "handleChangeUpdateTaskList",
      "handleAddFromData"
    ]),

    handleDelete(index, ind, tabelDetailListIndex) {
      // let indexObj = {
      //   taskListIndex: index,
      //   contentIndex: ind,
      //   tabelDetailListIndex: tabelDetailListIndex
      // };

      // 二次确认删除
      this.$confirm("确定要删除吗？", "提示", {
        type: "warning"
      })
        .then(() => {
          this.$message.success("删除成功");
          // this.tableData.splice(index, 1);

          // this.handleDeleteTaskListTabelDetailList(indexObj);
        })
        .catch(() => {});
    },

    handleClickEdit() {
      this.editVisible = true;
      this.updateForm = {
        sort: "",
        name: "",
        number: "",
        passname: "",
        password: ""
      }

      return;

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
    },
    saveEdit() {
      this.$message.success(`修改成功`);
      this.editVisible = false;
      this.updateForm = {
        sort: "",
        name: "",
        number: "",
        passname: "",
        password: ""
      }

      return;
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
      // let evaluationList = [];

      // this.addForm.evaluationListValue.map((item, index) => {
      //   evaluationList.push({ name: item.nameValue });
      // });

      // let addFromData = {
      //   task: this.addForm.taskValue,
      //   department: this.addForm.departmentValue,
      //   evaluationList
      // };

      // let addData = {
      //   addIndexObj: this.addIndexObj,
      //   addFromData: addFromData
      // };

      // this.handleAddFromData(addData);

      this.addEditVisible = false;

      this.$message.success(`新增成功`);

      this.addForm = {
        sort: "",
        name: "",
        number: "",
        passname: "",
        password: ""
      };
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
  padding-bottom: 10px;
  color: black;
  span {
    display: inline-block;
    width: 16.6%;
    text-align: center;
  }
}

.scoreContent {
  width: 100%;
  display: flex;
  border-bottom: 1px solid #f0f0f0;
}

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

  border-bottom: 1px dashed rgba(90, 90, 90, 1);

  font-size: 18px;

  padding: 15px 0;

  box-sizing: border-box;

  div {
    width: 16.6%;
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
}

.deleteBtn {
  color: red;
  font-size: 25px;
  cursor: pointer;
}

.tableHeader {
  span {
    font-size: 18px;
  }
}

.userInfo {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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
.operationBtn {
  width: 98px;
}

.backgroundBlue {
  background: rgba(81, 155, 236, 0.05);
}

.bakcgroundFFF {
  background: rgba(81, 155, 236, 0.15);
}

.operationBtnIcon {
  margin-left: 20px;
  margin-top: 7px;
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

.operationBtn {
  width: 98px;
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
</style>
