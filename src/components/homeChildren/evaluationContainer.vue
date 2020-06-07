<template>
  <div class="evaluationContainer">
    <!-- table -->
    <div class="tableContent">
      <!-- header -->
      <div class="tableHeaderList">
        <span
          v-for="(headerItem, headerIndex) in evaluationList.tableHeaderList"
          :key="headerIndex"
        >{{headerItem.name}}</span>
      </div>

      <!-- content -->
      <div class="tableDetailList">
        <p
          v-for="(tabelDetailListItem,  tabelDetailListIndex) in evaluationList.tabelDetailList"
          :key="tabelDetailListIndex"
          :class="[tabelDetailListIndex % 2 == 0 ? 'blue' : 'fffblue']"
        >
          <span>{{tabelDetailListItem.name}}</span>
          <span>{{tabelDetailListItem.data}}</span>
          <span>{{tabelDetailListItem.materials}}</span>
          <span>{{tabelDetailListItem.number}}</span>
        </p>
      </div>
    </div>
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
.tableHeaderList {
  height: 60px;
  background: rgba(81, 155, 236, 0.15);
  font-size: 20px;
  line-height: 60px;
  margin-top: 26px;
  border-bottom: 1px dashed rgba(90, 90, 90, 1);
  span {
    display: inline-block;
    text-align: center;
    color: #3c7ad9;
    font-weight: 600;
  }
  span:nth-child(1) {
    width: 30%;
  }
  span:nth-child(2) {
    width: 30%;
  }
  span:nth-child(3) {
    width: 20%;
  }
  span:nth-child(4) {
    width: 20%;
  }
}

.tableDetailList {
  p {
    font-size: 18px;
    padding: 12px 0 ;
    box-sizing: border-box;
    border-bottom: 1px dashed rgba(90, 90, 90, 1);
    span {
      display: inline-block;
      text-align: center;
    }
    span:nth-child(1) {
      width: 30%;
    }
    span:nth-child(2) {
      width: 30%;
    }
    span:nth-child(3) {
      width: 20%;
    }
    span:nth-child(4) {
      width: 20%;
    }
  }
}
.blue {
    background:rgba(81,155,236, .05);
}

.fffblue {
    background:rgba(81,155,236,.15);
}
</style>
