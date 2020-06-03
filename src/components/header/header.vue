<template>
  <div class="headerContainer">
    <i v-if="!collapse" class="el-icon-s-fold leftIcon" @click="handleCollapseChage"></i>
    <i v-else class="el-icon-s-unfold leftIcon" @click="handleCollapseChage"></i>
    <span>杭州示范城市评价系统</span>
    
    <el-dropdown class="loginName" trigger="click">
      <span class="el-dropdown-link">
        {{userName}}
        <i class="el-icon-caret-bottom"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>个人页面</el-dropdown-item>
        <el-dropdown-item divided command="loginout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <span class="log">
      <img
        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591040221730&di=6c9b20cea1ecfd01cfa5423e024b4193&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20180508%2F11%2F1525751854-AiZaDNfSOp.jpg"
        alt
      />

      
    </span>
    <span class="changeUserName" @click="handleChangeUsers">切换账号</span>

  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      collapse: false,
      userName: '管理员'
    };
  },
  components: {},
  computed: {
    ...mapState(['userFlag'])
  },
  methods: {
    ...mapMutations(["handleChangeCollapseFlag", 'handleChangeUser']),
    handleCollapseChage() {
      this.collapse = !this.collapse;
      this.handleChangeCollapseFlag();
    },


    // 切换账号

    handleChangeUsers() {

      this.userName =  this.userFlag ? '市发改委' :  '管理员'
      
      this.handleChangeUser()


      if( this.userFlag ) {
        this.$router.push({path:'/'});
      } else {
        this.$router.push({path:'/home/index3'});
      }

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

.changeUserName {
  font-size: 14px;
  float: right;
  margin-right: 30px;
  cursor: pointer;
}
.headerContainer {
  width: 100%;
  height: 70px;
  line-height: 70px;
  background: #242f42;
  font-size: 22px;
  color: #fff;
  position: relative;
  z-index: 2;
}

.leftIcon {
  cursor: pointer;
  padding: 0 21px;
}

.loginName {
  float: right;
  margin-right: 50px;
  font-size: 14px;
  color: #fff !important;
  cursor: pointer;
}

.log {
  float: right;
  margin-right: 20px;
}

.log img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
</style>
