<template>
  <div class="departmentContainer">
    <!-- 模版 -->
    部门详情页
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
    ...mapState(["evaluationList"])
  },
  methods: {
    // ...mapMutations(['']),
    handleGetDepartmentDetail() {
      let departmentId = this.$route.params.id
    }
  },
  watch: {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {
    this.handleGetDepartmentDetail()
  },
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {}
};
</script>

<style scoped lang="less" >
</style>
