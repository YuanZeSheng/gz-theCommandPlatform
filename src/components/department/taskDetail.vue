<template>
  <div class="departmentContainer"
       v-loading="loadingFlag">
    <div class="header flex" style="fontSize: 25px">
  
     <div class="header flex" style="fontSize: 25px">
      <div class="flex">
        <span>任务详情页：</span>
       
      </div>

    </div>

     
    </div>

    <div class="tableDetail">
      <!-- table Header -->
      <div class="tableHeader">
        <span v-for="(tabelHeaderItem, index3) in tableHeader" :key="index3">{{tabelHeaderItem.name}}</span>
      </div>

      <!-- table content -->
      <div class="tableContent">
        <div class="tebleItem" 
             :key="index"
             v-for="(item, index) in departmentDetail">
             <p class="itemtask textCenter">{{item.detaName}}</p>
             <!-- <div class="contentRight"> -->
               <!-- <div class="itemMaterialsList" v-for="(materialsListItem, index) in item.materialsList" :key="index"> -->
            <p class="textAlign">
                {{item.hisName}}
            </p>
            <p class="textAlign">
                {{item.createTime | toDate}}
            </p>
            <p class="textAlign">
                {{item.score}}
            </p>
            <p class="textAlign">
                {{item.cause}}
            </p>
              <!-- </div> -->
             <!-- </div> -->
        </div>
      </div>
      
    </div>
    

    

  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      departmentList: [],  //部门列表
      departmentValue: '',
      departmentDetail: [],
      loadingFlag: true,
      tableHeader: [{
        name: '任务名称'
      },{
        name: '材料'
      },{
        name: '上传时间'
      },{
        name: '评分值'
      },{
        name: '扣分原因'
      }]
    };
  },
  components: {},
  computed: {
    ...mapState([""])
  },
  methods: {
    // ...mapMutations(['']),
    handleGetDepartmentDetail(id) {
      this.departmentValue = id
      console.log(this.departmentValue, id)
      let param = {
        id
      }
    this.api.handleGetTaskDetail(param).then(this.handleGetTaskDetailSucc.bind(this));
    },

    handleGetTaskDetailSucc( res ) {
      this.loadingFlag = false
      if( res.code == 200 ) {
          console.log(this.departmentDetail , 'sthis.departmentDetail')
        this.departmentDetail = res.data
      } else {
        this.departmentDetail = []
        this.$message.error(res.message)
      }
    },

  },
  watch: {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {

    this.handleGetDepartmentDetail(this.$route.params.id)

  },
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {}
};
</script>

<style scoped lang="less" >
.flex {
  display: flex;
}
.header{
  justify-content: space-between;
}

.tableHeader {
  color: black;
  padding-bottom: 10px;
  span {
    display: inline-block;
    width: 20%;
    text-align: center;
  }
  height: 50px;
    background: rgba(81, 155, 236, 0.15);
    line-height: 50px;
    font-size: 20px;
    font-family: Microsoft YaHei;
    font-weight: 600;
    border-bottom: 1px dashed #5a5a5a;
    color: #3780f8;
}

.tableDetail {
  margin-top: 30px;
}

.textAlign {
    text-align: center;
}

.tebleItem {
  font-size: 18px;
  background: rgba(81, 155, 236, 0.05);
      border-bottom: 1px dashed rgba(90, 90, 90, 0.53);
  padding: 23px 0px;
  display: flex;
   p {
        width: 20%;
    }
  .itemtask {
    width: 20%;
    padding-left: 40px;
    box-sizing: border-box;
   
  }
  .itemMaterialsList {
    display: flex;
    margin-bottom: 20px;
    p {
      width: 25%;
      text-align: center;
    }
  }
  .contentRight {
    width: 80%;
  }

}

</style>
