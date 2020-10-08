<template>
  <div class="homeLeftContainer">
    <!-- 模版 -->
    <el-menu
      class="el-menu-vertical-demo"
      :default-active="$route.path"
      :collapse="collapse"
      background-color="#324157"
      text-color="#bfcbd9"
      active-text-color="#20a0ff"
      unique-opened
      :default-openeds="openeds"
    >
      <el-menu-item
        :index="'/home/general'"
        @click="handleToGeneral"
        v-if="accessRole == 'guanliyuan'"
      >
        <i class="el-icon-s-platform"></i>
        <span slot="title">概览</span>
      </el-menu-item>

      <el-menu-item
        :index="'/home/index1'"
        @click="handleToHomePage"
        v-if="accessRole == 'admin' || accessRole == 'specialist'"
      >
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>

      <el-submenu index="/home/index2" v-if="accessRole != 'guanliyuan'">
        <template slot="title">
          <i class="el-icon-edit-outline"></i>
          <span slot="title" class="titleText">评价</span>
        </template>
        <el-menu-item-group>
          <!-- <span slot="title">分组一</span> -->
          <el-menu-item
            :index="'/home/index2'"
            v-if="accessRole == 'admin' || accessRole == 'specialist'"
          >
            <router-link to="/home/index2" class="routeBtn" tag="li"
              >材料审核</router-link
            >
          </el-menu-item>
          <el-menu-item :index="'/home/index3'" v-if="accessRole == 'general'">
            <router-link to="/home/index3" class="routeBtn" tag="li"
              >材料上传</router-link
            >
          </el-menu-item>
          <el-menu-item :index="'/home/index4'" v-if="accessRole == 'admin'">
            <router-link to="/home/index4" class="routeBtn" tag="li"
              >任务分派</router-link
            >
          </el-menu-item>
          <el-menu-item :index="'/home/index5'" v-if="accessRole == 'admin'">
            <router-link to="/home/index5" class="routeBtn" tag="li"
              >组织结构</router-link
            >
          </el-menu-item>
          <el-menu-item :index="'/home/task'" v-if="accessRole == 'admin'">
            <router-link to="/home/task" class="routeBtn" tag="li"
              >任务列表</router-link
            >
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="/home/department" v-if="accessRole == 'guanliyuan'">
        <template slot="title">
          <i class="el-icon-s-custom"></i>
          <span slot="title" class="titleText">委办局</span>
        </template>
        <el-menu-item-group>
          <el-menu-item
            :index="'/home/general' + item.id"
            v-for="(item, index) in departmentList"
            :key="index"
          >
            <li
              class="routeBtn"
              tag="li"
              @click="handleClickToGeneralDetai(item)"
            >
              {{ item.organizstionName }}
            </li>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      // isCollapse: false,
      openeds: ["/home/index2", "/home/department"],
      accessRole: "admin",
      departmentList: [],
    };
  },
  components: {},
  computed: {
    ...mapState(["collapse"]),
    onRoutes() {
      return this.$route.path.replace("/", "");
    },
  },
  methods: {
    // ...mapMutations(['']),

    handleGetUserList() {
      this.api
        .handleGetOrganization()
        .then(this.handleGetUserListSucc.bind(this));
    },

    handleGetUserListSucc(res) {
      if (res.code == 200) {
        this.departmentList = res.data.filter((item) => {
          return item.type == "common";
        });

        console.log(this.departmentList);
      } else {
        this.$message.error(res.message);
      }
    },

    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath, 2);
    },
    handleClickOpenCloseNav() {
      this.isCollapse = this.isCollapse ? false : true;
    },
    handleToHomePage() {
      this.$router.push({ path: "/home/index1" });
    },
    handleClickToGeneralDetai(item) {
      if (this.$route.query.type) {
        this.$router.push({
          path:
            `/home/index2?type=` +
            this.$route.query.type +
            "&userid=" +
            item.id,
        });
        this.$route.query.id = item.id;
      } else {
        this.$router.push({ path: "/home/general?id=" + item.id + '&userName=' + item.organizstionName});
      }
    },
    handleToGeneral() {
      this.$router.push({ path: "/home/general" });
    },
  },
  watch: {},
  mounted() {
    this.handleGetUserList();
  },
  created() {
    // if( !this.userFlag ) {
    //   this.$router.push({ path: "/home/index3" });
    // }
    let accessRole = localStorage.getItem("accessRole");

    switch (accessRole) {
      case "1":
        this.accessRole = "admin";
        break;

      case "2":
        this.accessRole = "specialist"; // 专家
        break;

      case "3":
        this.accessRole = "general"; // 普通
        this.$router.push({ path: "/home/index3" });
        break;

      case "4":
        this.accessRole = "guanliyuan";
        this.$router.push({ path: "/home/general" });
    }
  },
};
</script>

<style scoped lang="less" >
.homeLeftContainer {
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 100%;
}

ul {
  height: 100%;
  li {
    font-size: 20px;
  }
  .titleText {
    font-size: 20px;
  }
}

.el-menu-item-group {
  .el-menu-item {
    padding-left: 0 !important;
  }
}

.routeBtn {
  // text-align: center;
  padding-left: 40px;
}
.menuitem {
  padding: 0;
}
.el-submenu .el-menu-item {
  padding: 0;
}
</style>
