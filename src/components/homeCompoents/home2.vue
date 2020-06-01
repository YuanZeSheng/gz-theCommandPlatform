<template>
  <div class="home3Container">
    <!-- 模版 -->
    <el-tabs :tab-position="tabPosition" class="el-table">
      <el-tab-pane
        :label="item.name"
        v-for="(item, index) in evaluateList"
        :key="index"
        style="font-size: 18px"
      >
        <div class="index3Content" v-for="(item3, index3) in item.index3List" :key="index3">
          
          
          <p>
            <el-tag effect="dark" type="success">三级项：</el-tag>
            <br />
            <span class="marginLeft10">{{item3.index2}}</span>
          </p>


          <!-- 任务 -->
          <p class="item3Left">
            <el-tag effect="dark" type="success">评价内容：</el-tag>
            <br />
            <span class="marginLeft10">{{item3.index3Name}}</span>
          </p>

          <p class="item3Middle">
            <el-tag effect="dark" type="success">任务：</el-tag>
              <br />
            <span v-for="(item3Detail, index3Detail) in item3.index3DetailList" :key="index3Detail">
              <span class="marginLeft10">{{item3Detail.name}}- {{item3Detail.num}}</span>
              <br />
            </span>
          </p>

          <p>
            <el-tag effect="dark" type="success">责任单位：</el-tag>
            <br />
            <span class="marginLeft10">{{item3.department}}</span>
          </p>

          <p class="item3Right">
            <el-tag effect="dark" type="success">提交材料：</el-tag>
            <br />
            <span
              v-for="(item4index3Materials, index3MaterialsIndex) in item3.index3Materials"
              :key="index3MaterialsIndex"
              class="marginLeft10"
            >
              {{item4index3Materials}}
              <br />
            </span>
          </p>

        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      tabPosition: "top"
    };
  },
  components: {},
  computed: {
    ...mapState(["evaluateList"])
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
.home3Container {
  height: 100%;
  .el-table {
    min-height: 100%;
    font-size: 20px;
    overflow: inherit;
  }
  .index3Content {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ebeef5;
    padding-bottom: 10px;
    p  {
      width: 18%;
      margin-bottom: 30px;
    }
    p:nth-child(1) {
      width: 15%;
    }
    p:nth-child(2) {
      width: 15%;
    }
    p:nth-child(3) {
      width: 24%;
    }

    p:nth-child(4) {
      width: 10%;
    }

    p:nth-child(5) {
      width: 30%;
    }
  }
}

.marginLeft10 {
  padding: 10px;
}
.el-tag {
  margin-bottom: 10px;
}
</style>
