<template>
  <div
    class="home3Container"
    v-loading="loadingFlag"
    element-loading-text="数据加载中"
  >
    <!-- 模版 -->
    <div style="overflow: hidden; margin-bottom: 20px">
      <el-button type="primary" @click="handleClickChangeListType('origin')"
        >组织机构</el-button
      >

      <el-button type="primary" @click="handleClickChangeListType('specialist')"
        >专家列表</el-button
      >

      <el-button type="primary" @click="handleClickChangeListType('lead')"
        >领导列表</el-button
      >

      <el-button
        type="primary"
        class="addItemBtn"
        @click="handleClickItemBtn()"
      >
        <i class="addIcon"></i>
        <span>新增</span>
      </el-button>
    </div>

    <!-- 表头 -->
    <div class="tableHeader" v-if="tableType == 'origin'">
      <span v-for="(tabelHeaderItem, index3) in tableHeader" :key="index3">{{
        tabelHeaderItem.name
      }}</span>
    </div>
    <div class="tableHeader" v-if="tableType == 'specialist'">
      <span
        v-for="(tabelHeaderItem, index3) in specialistHeader"
        :key="index3"
        >{{ tabelHeaderItem.name }}</span
      >
    </div>

    <div class="tableHeader" v-if="tableType == 'lead'">
      <span v-for="(tabelHeaderItem, index3) in leadHeader" :key="index3">{{
        tabelHeaderItem.name
      }}</span>
    </div>

    <!-- 表 -->
    <div class="tableContent" v-if="tableDeatil.length != 0">
      <div
        :data-id="tabelDetailListItem.id"
        v-for="(tabelDetailListItem, tabelDetailListIndex) in tableDeatil"
        :key="tabelDetailListIndex"
        :class="[
          'tabContent',
          'flexCenter',
          tabelDetailListIndex % 2 == 0 ? 'backgroundBlue' : 'bakcgroundFFF',
        ]"
      >
        <div class="task textCenter">{{ tabelDetailListIndex + 1 }}</div>

        <div class="department textCenter">
          {{ tabelDetailListItem.organizstionName }}
        </div>

        <div class="evaluationList">
          <p class="textCenter">{{ tabelDetailListItem.organizstionNumber }}</p>
        </div>
        <div class="evaluationList">
          <p class="textCenter">
            {{ tabelDetailListItem.organizstionLinkman }}
          </p>
        </div>
        <div class="evaluationList">
          <p class="textCenter">{{ tabelDetailListItem.organizstionTel }}</p>
        </div>

        <div class="userInfo textCenter">
          <p>{{ tabelDetailListItem.organizstionUsername }}</p>
        </div>
        <div class="userInfo textCenter">
          <p>{{ tabelDetailListItem.organizstionPassword }}</p>
        </div>
        <div class="textCenter flexCenter">
          <el-button
            type="primary"
            class="addItemBtn operationBtn"
            @click="handleClickEdit(tabelDetailListIndex)"
          >
            <i class="addIcon operationBtnIcon updateBtns"></i>
            <span>编辑</span>
          </el-button>
          <br />
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

    <el-dialog
      :title="handleChangeTitle('编辑')"
      
      :visible.sync="editVisible"
      width="30%"
      :close-on-click-modal="false"
    >
      <el-form
        ref="updateForm"
        :model="updateForm"
        label-width="100px"
        :label-position="lebelPosi"
      >
        <el-form-item
          :label="handleChangLabel('名称')"
          prop="organizstionName"
        >
          <el-input v-model="updateForm.organizstionName"></el-input>
        </el-form-item>
        <el-form-item
          :label="handleChangLabel('编号')"
          prop="organizstionNumber"
        >
          <el-input v-model="updateForm.organizstionNumber"></el-input>
        </el-form-item>
        <el-form-item
          :label="'负责人'"
          prop="organizstionLinkman"
        >
          <el-input v-model="updateForm.organizstionLinkman"></el-input>
        </el-form-item>
        <el-form-item label="联系电话" prop="organizstionTel">
          <el-input v-model="updateForm.organizstionTel"></el-input>
        </el-form-item>
        <el-form-item label="账号" prop="organizstionUsername">
          <el-input v-model="updateForm.organizstionUsername"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="organizstionPassword">
          <el-input v-model="updateForm.organizstionPassword"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleClickCancle">取 消</el-button>
        <el-button type="primary" @click="saveEdit">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 新增 -->
    <el-dialog
      :title="handleChangeTitle('新增')"
      
      :visible.sync="addEditVisible"
      width="30%"
      :close-on-click-modal="false"
    >
      <el-form
        ref="addForm"
        :model="addForm"
        label-width="100px"
        :label-position="lebelPosi"
      >
        <el-form-item :label="handleChangLabel('名称')" prop="organizstionName">
          <el-input v-model="addForm.organizstionName"></el-input>
        </el-form-item>
        <el-form-item
          :label="handleChangLabel('编号')"
          prop="organizstionNumber"
        >
          <el-input v-model="addForm.organizstionNumber"></el-input>
        </el-form-item>
        <el-form-item :label="'负责人'" prop="organizstionLinkman">
          <el-input v-model="addForm.organizstionLinkman"></el-input>
        </el-form-item>
        <el-form-item label="联系电话" prop="organizstionTel">
          <el-input v-model="addForm.organizstionTel"></el-input>
        </el-form-item>
        <el-form-item label="账号" prop="organizstionUsername">
          <el-input v-model="addForm.organizstionUsername"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="organizstionPassword">
          <el-input v-model="addForm.organizstionPassword"></el-input>
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
      tabPosition: "top",
      editVisible: false,
      addEditVisible: false,
      loadingFlag: true,
      organizstionFlag: true,
      tableType: "origin",
      tableHeader: [
        {
          name: "序号",
        },
        {
          name: "组织名称",
        },
        {
          name: "组织编号",
        },
        {
          name: "负责人",
        },
        {
          name: "联系电话",
        },
        {
          name: "账号",
        },
        {
          name: "密码",
        },
        {
          name: "操作",
        },
      ],
      specialistHeader: [
        {
          name: "序号",
        },
        {
          name: "专家姓名",
        },
        {
          name: "专家编号",
        },
        {
          name: "负责人",
        },
        {
          name: "联系电话",
        },
        {
          name: "账号",
        },
        {
          name: "密码",
        },
        {
          name: "操作",
        },
      ],
      leadHeader: [
        {
          name: "序号",
        },
        {
          name: "领导姓名",
        },
        {
          name: "领导编号",
        },
        {
          name: "负责人",
        },
        {
          name: "联系电话",
        },
        {
          name: "账号",
        },
        {
          name: "密码",
        },
        {
          name: "操作",
        },
      ],
      tableDeatil: [],
      updateIndex: "",
      updateForm: {
        organizstionName: "",
        organizstionNumber: "",
        organizstionUsername: "",
        organizstionPassword: "",
        organizstionLinkman: "",
        organizstionTel: "",
      },

      addForm: {
        organizstionName: "",
        organizstionNumber: "",
        organizstionUsername: "",
        organizstionPassword: "",
        organizstionLinkman: "",
        organizstionTel: "",
      },

      indexObj: {},

      addIndexObj: {},
    };
  },
  components: {},
  computed: {
    ...mapState([""]),
  },
  methods: {
    handleClickChangeListType(type) {
      this.tableType = type;
      // 专家
      if (type == "specialist") {
        this.organizstionFlag = false;
      }

      if (type == "origin") {
        this.organizstionFlag = true;
      }

      // 组织
    },
    // :title="organizstionFlag ? '编辑组织结构' : '编辑专家信息'"
    
    handleChangeTitle(type) {
      switch (this.tableType) {
          case "specialist":
            return type + "专家";
            break;
          case "origin":
            return type + "组织";
            break;
          case "lead":
            return type + "领导";
            break;
        }
    },

    handleChangLabel(type) {
        switch (this.tableType) {
          case "specialist":
            return "专家" + type;
            break;
          case "origin":
            return "组织" + type;
            break;
          case "lead":
            return "领导" + type;
            break;
        }
    },
    handleGetUserList() {
      this.loadingFlag = true;
      this.api
        .handleGetOrganization()
        .then(this.handleGetUserListSucc.bind(this));
    },
    handleGetUserListSucc(res) {
      setTimeout(() => {
        this.loadingFlag = false;
      }, 1000);
      if (res.code == 200) {
        // 专家
        let expertList = res.data.filter((item) => {
          return item.type == "expert";
        });
        // 组织结构
        let organizationList = res.data.filter((item) => {
          return item.type == "common";
        });

        // 领导列表
        let leaderList = res.data.filter((item) => {
          return item.type == "lead";
        });

        // 专家
        if (this.tableType == "origin") {
          this.tableDeatil = organizationList;
        }

        if (this.tableType == "specialist") {
          this.tableDeatil = expertList;
        }

        if (this.tableType == "lead") {
          this.tableDeatil = leaderList;
        }
      } else {
        this.$message.error(res.message);
      }
    },
    // 前端删除
    handleDelete(tabelDetailListItem) {
      // 二次确认删除
      this.$confirm("确定要删除吗？", "提示", {
        type: "warning",
      })
        .then(() => {
          this.handleDeleteOrganizationItem(tabelDetailListItem);
        })
        .catch(() => {});
    },

    handleDeleteOrganizationItem(tabelDetailListItem) {
      this.loadingFlag = true;
      let param = {};
      param.id = tabelDetailListItem.id;
      this.api
        .handleDeleteOrganization(param)
        .then(this.handleDeleteOrganizationSucc.bind(this));
    },

    handleDeleteOrganizationSucc(res) {
      setTimeout(() => {
        this.loadingFlag = false;
      }, 1000);
      if (res.code == 200) {
        this.$message.success("删除成功");
        this.handleGetUserList();
      } else {
        this.$message.error(res.message);
      }
    },

    handleClickEdit(tabelDetailListIndex) {
      var editObj = this.tableDeatil[tabelDetailListIndex];

      this.updateForm = {
        organizstionName: editObj.organizstionName,
        organizstionNumber: editObj.organizstionNumber,
        organizstionUsername: editObj.organizstionUsername,
        organizstionPassword: editObj.organizstionPassword,
        organizstionLinkman: editObj.organizstionLinkman,
        organizstionTel: editObj.organizstionTel,
        id: editObj.id,
      };
      this.editVisible = true;
    },
    saveEdit() {
      // 专家
      if (this.tableType == "origin") {
        this.updateForm.accessRole = 3;
      }

      if (this.tableType == "specialist") {
        this.updateForm.accessRole = 2;
      }

      if (this.tableType == "lead") {
        this.updateForm.accessRole = 4;
      }
      this.api
        .handleUpdateOrganization(this.updateForm)
        .then(this.handleUpdateOrganizationSucc.bind(this));
    },
    handleUpdateOrganizationSucc(res) {
      if (res.code == 200) {
        this.$message.success("修改成功");
        this.handleGetUserList();
        this.editVisible = false;
      } else {
        this.$message.error(res.message);
      }
    },
    handleClickCancle() {
      this.$nextTick(() => {
        if (this.$refs.updateForm !== undefined) {
          this.$refs.updateForm.resetFields();
        }
      });
      this.editVisible = false;
    },

    handleClickCancleAddItem() {
      this.$nextTick(() => {
        if (this.$refs.addForm !== undefined) {
          this.$refs.addForm.resetFields();
        }
      });
      this.addEditVisible = false;
    },
    saveAddItem() {
      if (this.tableType == "origin") {
        this.addForm.accessRole = 3;
      }

      if (this.tableType == "specialist") {
        this.addForm.accessRole = 2;
      }

      if (this.tableType == "lead") {
        this.addForm.accessRole = 4;
      }
      this.api
        .handleAddOrganization(this.addForm)
        .then(this.handleAddOrganizationSucc.bind(this));
    },
    handleAddOrganizationSucc(res) {
      if (res.code == 200) {
        this.$message.success(`新增成功`);
        this.addEditVisible = false;
        this.handleGetUserList();
      } else {
        this.$message.error(res.message);
      }
    },
    handleClickItemBtn() {
      this.$nextTick(() => {
        if (this.$refs.addForm !== undefined) {
          this.$refs.addForm.resetFields();
        }
      });
      this.addEditVisible = true;
    },
  },
  watch: {
    tableType() {
      this.handleGetUserList();
    },
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {
    this.handleGetUserList();
  },
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
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
    width: 13.6%;
    text-align: center;
  }

  span:nth-child(1) {
    width: 4%;
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

  padding: 14.8px 0;

  box-sizing: border-box;

  div {
    width: 14%;
  }

  div:nth-child(1) {
    width: 4%;
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
