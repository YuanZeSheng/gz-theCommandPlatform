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
        <p class="title">{{item.index2}}</p>

        <!-- 表头 -->
        <div class="tableHeader">
          <span
            v-for="(tabelHeaderItem, index3) in item.tabelHeaderList"
            :key="index3"
          >{{tabelHeaderItem.name}}</span>
        </div>

        <!-- 表 -->
        <div class="tableContent">
          <div
            class="scoreContent"
            v-for="(scoreContentItem, scoreContentIndex) in item.tabelDetailList"
            :key="scoreContentIndex"
          >
            <!-- 评价内容 -->
            <div style="width: 20%" class="textCenter">
              <p class="textLeft">{{scoreContentItem.scoreContent}}</p>
            </div>
            <!-- 任务 -->
            <div class="rightBox" style="width: 80%">
              <div
                v-for="(items, index) in scoreContentItem.list"
                :key="index"
                class="rightContent"
              >
                <p class="" style="width: 25%; paddingLeft: 15px">{{items.task}}</p>
                <!-- 责任单位 -->
                <p class="textCenter" style="width: 25%">{{items.department}}</p>
                <!-- 提交材料 -->
                <div style="width:25%">
                  <div
                    v-for="(materialsListItem, materialsListIndex) in items.materialsList"
                    :key="materialsListIndex"
                  >{{materialsListItem.name}}</div>
                </div>
                <!-- 状态 -->
                <div class="textCenter flexCenter" style="width: 25%">
                  <el-tag
                    :type="items.status == 2 ? 'warning' : 'success'"
                    effect="dark"
                  >{{items.status == 1 ? '已完成' : '未完成'}}</el-tag>
                </div>
                <!-- <p>{{items.task}}</p> -->
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
    ...mapState(["evaluateList", "tabelDetailList"])
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
  text-align: center;
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
    width: 20%;
    text-align: center;
  }
}

.scoreContent {
  width: 100%;
  display: flex;
  border-bottom: 1px solid #f0f0f0;
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

.rightBox {
  width: 75%;
  .rightContent {
    display: flex;
    margin-bottom: 20px;
    p {
      width: 25%;
    }
  }
}

.textCenter {
  text-align: center;
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
  align-items: center;
}
</style>
