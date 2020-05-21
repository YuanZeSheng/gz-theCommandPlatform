<template>
  <div class="homeLeftContainer">
    <!-- 模版 -->
     <router-view/>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {

    };
  },
  components: {},
  computed: {
    ...mapState([''])
  },
  methods: {
    // ...mapMutations(['']),
   },
  watch: {
    
   },
  beforeCreate() {

  },
  created() {
    
  },
  beforeMount() {
    
  },
  mounted() {
    
  },
  beforeUpdate() {

  },
  updated() {
    
  },
  beforeDestroy() {
    
  },
  destroyed() {

  },

};
</script>

<style scoped lang="less" >
.homeLeftContainer {
  width: 200px;
  height: 100%;
  flex: 1;
  font-size: 30px;
}
</style>
