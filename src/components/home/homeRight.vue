<template>
  <div class="homeRigtContainer marginLeft" :class="{'content-collapse':collapse}">
    <!-- 模版 -->
    <transition name="move" mode="out-in">
      <div :class="isHomePage ? 'homeRightHeight' : 'rightContent'"
            :style="{background: $route.path=='/home/general'? 'transparent':'#fff' }">
        <router-view />
      </div>
    </transition>
    <!-- <div v-if="!isHomePage">
      <el-backtop  target=".rightContent"></el-backtop>
    </div> -->
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      isHomePage: true
    };
  },
  components: {},
  computed: {
    ...mapState(["collapse"])
  },
  methods: {
    // ...mapMutations(['']),
  },
  watch: {
    $route() {
      if (this.$route.path == "/home/index1") {
        this.isHomePage = true;
      } else {
        this.isHomePage = false;
      }
    }
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {
    if (this.$route.path == "/home/index1") {
      this.isHomePage = true;
    } else {
      this.isHomePage = false;
    }
  },
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {}
};
</script>

<style scoped lang="less" >
.homeRigtContainer {
  min-width: 1049px;
  font-size: 30px;
  box-sizing: border-box;
  position: absolute;
  left: 200px;
  bottom: 0;
  right: 0;
  top: 70px;
  bottom: 0;
  background: url("../../assets/img/homeRightBackground.jpg") no-repeat;
  background-size: 100% 100%;
  padding: 15px;
  -webkit-transition: left 0.3s ease-in-out;
  transition: left 0.3s ease-in-out;
}

.rightContent {
  background: #fff;
  height: 100%;
  overflow-y: scroll;
  box-shadow: 6px 10px 8px 0px rgba(0, 0, 0, 0.16);
  border-radius: 10px;
  padding: 37px;
  padding-bottom: 0;
  box-sizing: border-box;
}

.content-collapse {
  left: 65px;
}

.homeRightHeight {
  height: 100%;
}
</style>
