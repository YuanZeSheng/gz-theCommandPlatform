<template>
  <div
    class="generalContainer"
    v-loading="loadingFlag"
    element-loading-text="数据加载中"
  >
    <!-- <div></div> -->
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <span class="titleIcon"></span>
        <span @click="handleToDetail(item)" class="curStyle">{{
          item.name
        }}</span>
        <el-divider></el-divider>
        <div class="task">
          <span>任务项: </span>
          <el-progress
            class="taskProgress"
            :text-inside="false"
            :stroke-width="13"
            :percentage="
              parseFloat(((item.accomplish / item.taskSum) * 100).toFixed(2))
            "
          ></el-progress>
        </div>
        <span class="fontStyle" style="marginright: 20px"
          >已完成数：{{ item.accomplish }}</span
        >
        <span class="fontStyle">总任务数：{{ item.taskSum }}</span>

        <div class="task" style="margintop: 10px">
          <span>得失分: </span>
          <el-progress
            class="taskProgress"
            :text-inside="false"
            :stroke-width="13"
            :percentage="
              parseFloat(((item.score / item.total) * 100).toFixed(2))
            "
          ></el-progress>
        </div>
        <span class="fontStyle" style="marginright: 30px"
          >得分：{{ item.score }}</span
        >
        <span class="fontStyle">总分：{{ item.total }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      loadingFlag: true,
      list: [
        {
          name: "城市安全源头治理",
          taskSum: 20, //总任务数
          accomplish: 8, //完成任务数
          total: 18, //总分
          score: 0, //得分
          lose: 18, //失分
        },
      ],
    };
  },
  components: {},
  computed: {
    // ...mapState([''])
  },
  methods: {
    // ...mapMutations(['']),

    handleGetData() {
      let param = {};

      if (this.$route.query.id) {
        param.userId = this.$route.query.id;
      }

      this.api
        .handleGetGeneral(param)
        .then(this.handleGetGeneralSucc.bind(this));
    },

    handleGetGeneralSucc(res) {
      setTimeout(() => {
        this.loadingFlag = false;
      }, 1000);
      this.list = res.data.filter((item) => {
        return item.name != "鼓励项";
      });
    },

    handleToDetail(item) {
      this.$router.push({
        path:
          `/home/index2?type=` + item.name + "&userid=" + this.$route.query.id,
      });
    },
  },
  watch: {
    $route() {
      this.handleGetData();
    },
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {
    this.handleGetData();
  },
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
};
</script>

<style scoped lang="less" >
.generalContainer {
  width: 100%;
  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    overflow: auto;
    li {
      border-top: 1px solid #eee;
      border-left: 1px solid #eee;
      background: #fefefe;
      padding: 20px;
      margin-right: 1%;
      box-sizing: border-box;
      border-radius: 10px;
      box-shadow: 4px 6.9px 8px 4px rgba(0, 0, 0, 0.16);
      width: 32%;
      height: 300px;
      //   background: pink;
      //   border-right: 1px solid #666;
      float: left;
      margin-bottom: 20px;
      .titleIcon {
        display: inline-block;
        width: 28px;
        height: 28px;
        background: url("../../assets/img/iconIndex.png") no-repeat;
        background-size: 100% 100%;
        margin-right: 16px;
        float: left;
        margin-top: 8px;
      }

      .task {
        box-sizing: border-box;
        display: flex;
        span {
          font-size: 20px;
          margin-right: 20px;
        }
        .taskProgress {
          width: 80%;
        }
      }

      .fontStyle {
        font-size: 20px;
      }
    }
  }
}

/deep/.el-progress-bar {
  width: 95%;
}

.curStyle {
  cursor: pointer;
}
</style>
