<template>
  <div
    class="generalContainer"
    v-loading="loadingFlag"
    element-loading-text="数据加载中"
  >
  <span class="titleStyle" v-if="$route.query.userName">{{$route.query.userName}}</span>
   

    <!-- <div></div> -->
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <p :class="item.type == 'no' ? 'noDataStyle' : ''">
          <i class="el-icon-document" style="marginright: 10px"></i>
          <span @click="handleToDetail(item)" class="curStyle">{{
            item.name
          }}</span>
        </p>

        <el-divider></el-divider>
        <div class="task">
          <span>任务项: </span>
          <el-progress
            class="taskProgress"
            :text-inside="false"
            :stroke-width="13"
            :percentage="
              item.taskSum == 0 ? 0 : parseFloat(((item.accomplish / item.taskSum) * 100).toFixed(2))
            "
          ></el-progress>
        </div>
        <span class="fontStyle" style="marginright: 20px; padding: 0 20px"
          >总任务数：{{ item.taskSum }}</span
        >
        <span class="fontStyle">已完成数：{{ item.accomplish }}</span>

        <div class="task" style="margintop: 20px">
          <span>得失分: </span>
          <el-progress
            class="taskProgress"
            :text-inside="false"
            :stroke-width="13"
            :percentage=" item.total == 0 ? 0 :  parseFloat(((item.score / item.total) * 100).toFixed(2))
             
            "
          ></el-progress>
        </div>
        <span class="fontStyle" style="marginright: 20px; padding: 0 20px"
          >总分：{{ item.total }}</span
        >
        <span class="fontStyle">得分：{{ item.score }}</span>
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
      this.loadingFlag = true;
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

      res.data.no.map((item) => {
        item.type = "no";
      });

      res.data.yes.map((item) => {
        item.type = "yes";
      });

      let allList = res.data.yes.concat(res.data.no);
      this.list = allList.filter((item) => {
        return item.name != "鼓励项";
      });
    },

    handleToDetail(item) {
      if (item.type == "no") {
        this.$message.error("该委办局暂无此任务");
        return;
      }

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
      p {
        background: #409eff;
        color: #fff;
        height: 60px;
        display: flex;
        align-items: center;
        border-radius: 10px 10px 0 0;
        padding: 0 20px;
      }
      border-top: 1px solid #eee;
      border-left: 1px solid #eee;
      background: #fefefe;
      // padding: 20px;
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
      }

      .task {
        box-sizing: border-box;
        display: flex;
        padding: 0 20px;
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

/deep/ .el-divider--horizontal {
  margin-bottom: 30px;
}

.noDataStyle {
  background: #eee !important;
  color: black !important;
}

.titleStyle {
  margin-bottom: 20px;
  display: block;
}

/deep/ .el-divider--horizontal {
  margin-top: 0;
}
</style>
