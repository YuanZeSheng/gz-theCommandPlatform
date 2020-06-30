<template>
  <div class="departmentContainer">

    <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in departmentList"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>

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
