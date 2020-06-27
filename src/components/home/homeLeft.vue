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
    >
      <el-menu-item :index="'/home/index1'" @click="handleToHomePage" v-if="userFlag">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>

      <el-submenu index="/home/index2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title" class="titleText">评价</span>
        </template>
        <el-menu-item-group>
          <!-- <span slot="title">分组一</span> -->
          <el-menu-item :index="'/home/index2'" v-if="userFlag">
            <router-link to="/home/index2" class="routeBtn" tag="li">城市自评</router-link>
          </el-menu-item>
          <el-menu-item :index="'/home/index3'" v-if="!userFlag">
            <router-link to="/home/index3" class="routeBtn" tag="li">材料上传</router-link>
          </el-menu-item>
          <el-menu-item :index="'/home/index4'" v-if="userFlag">
            <router-link to="/home/index4" class="routeBtn" tag="li">任务分派</router-link>
          </el-menu-item>
          <el-menu-item :index="'/home/index5'" v-if="userFlag">
            <router-link to="/home/index5" class="routeBtn" tag="li">组织结构</router-link>
          </el-menu-item>
          <el-menu-item :index="'/home/task'" v-if="userFlag">
            <router-link to="/home/task" class="routeBtn" tag="li">任务列表</router-link>
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
    };
  },
  components: {},
  computed: {
    ...mapState(["collapse", "userFlag"]),
    onRoutes() {
      return this.$route.path.replace("/", "");
    }
  },
  methods: {
    // ...mapMutations(['']),
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
    }
  },
  watch: {},
  mounted() {
  }
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
