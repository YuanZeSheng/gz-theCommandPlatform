<template>
  <div class="headerContainer">
    <i v-if="!collapse" class="el-icon-s-fold" @click="handleCollapseChage"></i>
    <i v-else class="el-icon-s-unfold" @click="handleCollapseChage"></i>
    <span>示范城市评价系统</span>
    <!-- <span>admin 退出</span> -->
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      collapse: false
    };
  },
  components: {},
  computed: {
    // ...mapState([''])
  },
  methods: {
    ...mapMutations(['handleChangeCollapseFlag']),
    handleCollapseChage() {
      this.collapse = !this.collapse;
      this.handleChangeCollapseFlag()
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

i {
  cursor: pointer;
  padding: 0 21px;
}
</style>
