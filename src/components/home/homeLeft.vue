<template>
  <div class="homeLeftContainer">
    <!-- 模版 -->
    <!-- <el-radio-group v-model="isCollapse" >
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group> -->
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
    >
      <a href="javascript:;" :class="['openCloseBtn', isCollapse ? 'el-icon-arrow-right' : 'el-icon-arrow-left']" @click="handleClickOpenCloseNav"></a>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
          <span slot="title">分组一</span>
          <el-menu-item index="1-1">
            <router-link to="/home/index1">
              路由1
            </router-link>
          </el-menu-item>
          <el-menu-item index="1-2">
             <router-link to="/home/index2">
              路由2
            </router-link>
          </el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">
             <router-link to="/home/index3">
              路由3
            </router-link>
          </el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>

  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      isCollapse: false
    };
  },
  components: {},
  computed: {
    ...mapState(["navList"])
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
      this.isCollapse = this.isCollapse ? false : true
    }
  },
  watch: {},
  mounted() {}
};
</script>

<style scoped lang="less" >
.homeLeftContainer {
  height: 100%;
  background: #fff;
  .openCloseBtn {
    position: absolute;
    font-size: 30px;
    top: 50%;
    right: -20px;
    z-index: 2;
  }
}
.homeLeftContainer .el-menu-vertical-demo, el-menu {
  position: relative;
  height: 100%;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }


</style>
