<template>
  <div class="home3Container">
    <!-- 模版 -->
    <el-tabs :tab-position="tabPosition" class="el-table">
      <el-tab-pane
        :label="item.name"
        v-for="(item, index) in dataEvaluateList"
        :key="index"
        style="font-size: 18px"
      >
        <div v-for="(it, ind) in item.content" :key="ind">
          <p class="title">{{ind + 1}}. {{it.title}}</p>

          <!-- 表头 -->
          <div class="tableHeader">
            <span
              v-for="(tabelHeaderItem, index3) in it.tabelHeaderList"
              :key="index3"
            >{{tabelHeaderItem.name}}</span>
          </div>

          <!-- 表 -->
          <div class="tableContent">
            <div
              class="scoreContent"
              v-for="(scoreContentItem, scoreContentIndex) in it.tabelDetailList"
              :key="scoreContentIndex"
            >
              <!-- 评价内容 -->

              <!-- 任务 -->
              <div class="rightBox">
                <div
                  v-for="(items, index) in scoreContentItem.list"
                  :key="index"
                  class="rightContent"
                >
                  <p class="textCenter textLeft padding" style="width: 33%; ">{{items.task}}</p>

                  <!-- 提交材料 -->
                  <div style="width:33%">
                    <div
                      v-for="(materialsListItem, materialsListIndex) in items.materialsList"
                      :key="materialsListIndex"
                      style="marginBottom: 20px"
                    >{{materialsListItem.name}}</div>
                  </div>

                  <!-- 操作 -->

                  <div style="width:33%">
                    <div
                      style="marginBottom: 20px"
                      class="flexCenter"
                      v-for="(materialsListItem, materialsListIndex) in items.materialsList"
                      :key="materialsListIndex"
                    >
                      <el-button type="primary" class="btnStyle" :disabled="materialsListIndex == 1 ? true: false ">上传材料</el-button>

                      <el-button type="primary" class="btnStyle">删除材料</el-button>
                    </div>
                  </div>

                  <!-- <p>{{items.task}}</p> -->
                </div>
              </div>
            </div>
          </div>
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
    ...mapState(["dataEvaluateList"])
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
.title {
  margin: 10px 0 20px;
  text-align: left;
  font-size: 28px;
}
.home3Container {
  height: 100%;
  .el-table {
    min-height: 100%;
    font-size: 20px;
    overflow: inherit;
  }
}

.marginLeft10 {
  padding: 10px;
}
.el-tag {
  margin-bottom: 10px;
}

.textAlign {
  text-align: center;
  font-size: 20px;
}

.tableHeader {
  border-bottom: 2px solid black;
  padding-bottom: 10px;
  color: black;
  span {
    display: inline-block;
    width: 33%;
    text-align: center;
  }
}

.scoreContent {
  width: 100%;
  display: flex;
}

// .tableHeader::before {
//   left: 5%;
//   bottom: 0;
//   width: 90%;
//   height: 1px;
//   content: "";
//   position: absolute;
//   background-color: #ebeef5;
//   z-index: 1;
// }
.editBtn {
  margin: 0 auto;
  display: block;
}
.rightBox {
  width: 100%;
  .rightContent {
    display: flex;
    margin-bottom: 20px;
    p {
      width: 20%;
    }
  }
}

.textCenter {
  text-align: center;
  box-sizing: border-box;
}

.padding {
  padding: 0 50px;
}

.textLeft {
  display: inline-block;
  text-align: left;
}

.scoreContent {
  margin-top: 20px;
}

.flexCenter {
  display: flex;
  justify-content: center;
}

.btnStyle {
  height: 40px;
}
</style>
