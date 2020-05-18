<template>
  <div>
    <!-- 模版 -->
    <p @click="handleClick">调接口</p>
    {{vuexState}}
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      testData: undefined,
    };
  },
  computed: {
    ...mapState(['vuexState'])
  },
  methods: {
    // ...mapMutations(['']),
    handleClick() {
      this.api.handleGetApiTest().then(this.handleGetApiTestSucc.bind(this))
    },
    handleGetApiTestSucc(res) {
      this.testData = res
    }
   },
  watch: {

   },
  mounted() {
    
  }

};
</script>

<style scoped>
</style>
