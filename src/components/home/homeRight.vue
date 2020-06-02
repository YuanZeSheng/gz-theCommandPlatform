<template>
  <div class="homeRigtContainer marginLeft" :class="{'content-collapse':collapse}">
    <!-- 模版 -->
    <transition name="move" mode="out-in">
      <div class="rightContent" >
        <router-view />
      </div>
    </transition>
    <el-backtop target=".rightContent"></el-backtop>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {};
  },
  components: {},
  computed: {
    ...mapState(["collapse"])
  },
  methods: {
    // ...mapMutations(['']),
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
.homeRigtContainer {
  height: 100%;
  font-size: 30px;
  box-sizing: border-box;
  position: absolute;
  left: 200px;
  bottom: 0;
  right: 0;
  top: 70px;
  bottom: 0;
  background: #f0f0f0;
  padding: 10px;
  padding-bottom: 140px;
  -webkit-transition: left .3s ease-in-out;
    transition: left .3s ease-in-out;
}

.rightContent {
  background: #fff;
  height: 100%;
  border-radius: 10px;
  padding: 30px;
  overflow-y: scroll;
}

.content-collapse {
  left: 65px;
}
</style>
