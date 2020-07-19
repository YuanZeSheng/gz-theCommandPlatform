<template>
  <div
    class="home1Container"
    v-loading="loadingFlag"
    element-loading-text="数据加载中"
  >
    <!-- 业务平台 -->
    <div
      class="businessPlatform homeItemBox"
      v-for="(homeItem, homeIndex) in homeList"
      :key="homeIndex"
      element-loading-background="rgba(0, 0, 0, 0.8)"
    >
      <!-- itemHeader -->
      <div class="itemHeader">
        <p class="title">
          <span class="homeIcon"></span>
          <span>{{homeItem.name}}</span>
        </p>
      </div>
      <!-- itemContent -->
      <div class="itemContent">
        <!-- 业务平台 -->
        <businessPlatformContainer v-if="homeItem.type == 'businessPlatform'"></businessPlatformContainer>
        <!-- 评价日志 -->
        <evaluationContainer v-if="homeItem.type == 'evaluation'" 
                             @handleChangeLoading="handleChangeLoading"></evaluationContainer>
        <!-- 系统得分 -->
        <scoringSystemContainer v-if="homeItem.type == 'score'"></scoringSystemContainer>
        <!-- 单位丢分 -->
        <dropPointsContainer v-if="homeItem.type == 'dropPoints'"></dropPointsContainer>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

// 业务平台
import businessPlatformContainer from "../homeChildren/businessPlatformContainer";
// 评价日志
import evaluationContainer from "../homeChildren/evaluationContainer";
// 系统得分
import scoringSystemContainer from "../homeChildren/scoringSystemContainer";
// 单位丢分
import dropPointsContainer from "../homeChildren/dropPointsContainer";

export default {
  data() {
    return {
      loadingFlag: true
    };
  },
  components: {
    businessPlatformContainer,
    evaluationContainer,
    scoringSystemContainer,
    dropPointsContainer
  },
  computed: {
    ...mapState(["homeList"])
  },
  watch: {},

  created() {},

  mounted() {},
  methods: {
    handleChangeLoading(type) {
      if( type == 'change' ) {
        this.loadingFlag = false
      }
    }
  }
};
</script>

<style scoped lang="less" >
.home1Container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  // flex-direction: column;
  align-items: center;
  height: 100%;
  .homeItemBox {
    width: 45%;
    height: 45%;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.15),
      rgba(255, 255, 255, 0.05)
    );
    box-shadow: 6px 10px 8px 0px rgba(0, 0, 0, 0.16);
    opacity: 0.8;
    border-radius: 10px;
    background: #ffffff;
    box-sizing: border-box;
    padding: 0 22px 0;
  }
}

.title {
  display: flex;
  align-items: center;
  .homeIcon {
    display: inline-block;
    width: 28px;
    height: 28px;
    background: url("../../assets/img/homeIcon.png");
    margin-bottom: 5px;
    margin-right: 13px;
  }
}

.itemHeader {
  height: 70px;
  line-height: 70px;
  font-size: 24px;
  color: #3780f8;
  border-bottom: 1px solid rgba(90, 90, 90, 0.5);
}

.itemContent {
  height: calc(100% - 100px);
}
</style>
