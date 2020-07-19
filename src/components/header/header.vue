<template>
  <div class="headerContainer">
    <i v-if="!collapse" class="el-icon-s-fold leftIcon" @click="handleCollapseChage"></i>
    <i v-else class="el-icon-s-unfold leftIcon" @click="handleCollapseChage"></i>
    <span>大连市示范城市评价系统</span>
    
    <el-dropdown class="loginName" trigger="click">
      <span class="el-dropdown-link">
        {{userName}}
        <i class="el-icon-caret-bottom"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <!-- <el-dropdown-item>个人页面</el-dropdown-item> -->
        <el-dropdown-item divided command="loginout" @click.native="Logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <span class="log">
      <img
        src="http://img3.imgtn.bdimg.com/it/u=1052952306,3686393563&fm=26&gp=0.jpg"
        alt
      />

      
    </span>
    <!-- <span class="changeUserName" @click="handleChangeUser">切换账号</span> -->

  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      collapse: false,
      userName: window.localStorage.getItem('ms_username')
    };
  },
  components: {},
  computed: {
    ...mapState(['userFlag'])
  },
  methods: {
    ...mapMutations(["handleChangeCollapseFlag", 'handleChangeUsers']),
    handleCollapseChage() {
      this.collapse = !this.collapse;
      this.handleChangeCollapseFlag();
    },


    // 切换账号

    handleChangeUser() {

      // this.userName =  this.userFlag ? '市发改委' :  '管理员'
      
      // this.handleChangeUsers()


      if( this.userFlag ) {
        this.$router.push({path:'/'});
      } else {
        this.$router.push({path:'/home/index3'});
      }

    },
    // 退出登录
    Logout(){
      // console.log('退出登录')
      let parmas={}
      parmas.userId=localStorage.getItem('ms_usernameid')
      let that=this
      this.api
        .loginout(parmas)
        .then(function(res){
          if(res.code==200){
            that.$message.success("退出成功，即将跳回登陆页面");
            setTimeout(()=>{
               window.localStorage.removeItem('ms_usernameid')
               window.localStorage.removeItem('ms_username')
               that.$router.push({ path: '/Login'} );
            },1000)
          }else{

          }
          // console.log(res)
        });
    }
  },
  watch: {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {

  },
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
  // background:linear-gradient(-2deg,rgba(47,120,231,1) 0%,rgba(108,173,238,1) 100%);
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
