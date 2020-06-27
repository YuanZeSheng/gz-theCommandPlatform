<template>
  <div class="evaluationContainer">
    <!-- table -->
    <div class="tableContent">
      <!-- header -->
      <div class="tableHeaderList">
        <span
          v-for="(headerItem, headerIndex) in evaluationLists.tableHeaderList"
          :key="headerIndex"
        >{{headerItem.name}}</span>
      </div>

      <!-- content -->
      <div class="tableDetailList">
        <p
          v-for="(tabelDetailListItem,  tabelDetailListIndex) in evaluationList"
          :key="tabelDetailListIndex"
          :class="['flexDom', tabelDetailListIndex % 2 == 0 ? 'blue' : 'fffblue']"
        >
          <span
            @click="handleJumpDepartmentPage(tabelDetailListItem.departmentId)"
            class="department"
          >{{tabelDetailListItem.departmentName}}</span>
          <span>{{tabelDetailListItem.date | toDate}}</span>
          <span class="textOverflow">{{tabelDetailListItem.materials}}</span>
          <span>{{tabelDetailListItem.state}}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      evaluationList: []
    };
  },
  components: {},
  computed: {
    ...mapState(["evaluationLists"])
  },
  methods: {
    // ...mapMutations(['']),

    handleGetEvaluationList() {
      this.api
        .handleGetEvaluationList()
        .then(this.handleGetEvaluationListSucc.bind(this));
    },
    handleGetEvaluationListSucc(res) {
      setTimeout(() => {
        this.$emit("handleChangeLoading", "change");
      }, 2000);
      if (res.code == 200) {
        this.evaluationList = res.data;
      }
    },

    handleJumpDepartmentPage(id) {
      console.log(id);
      this.$router.push({
        path: `/home/department/${id}`
      });
    }
  },
  watch: {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {
    this.handleGetEvaluationList();
  },
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {}
};
</script>

<style scoped lang="less" >
.flexDom {
  display: flex;
}
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
  height: 225px;
  overflow-y: auto;
  
  p {
    font-size: 18px;
    padding: 12px 0;
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
  background: rgba(81, 155, 236, 0.05);
}

.fffblue {
  background: rgba(81, 155, 236, 0.15);
}

.department {
  cursor: pointer;
}


.textOverflow{
    overflow: hidden;    
    text-overflow:ellipsis;    
    white-space: nowrap;
}
</style>
