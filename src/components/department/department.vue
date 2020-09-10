<template>
  <div class="departmentContainer"
       v-loading="loadingFlag">
    <div class="header flex" style="fontSize: 25px">
      <div class="flex">
        <span>部门名称：</span>
        <el-select v-model="departmentValue" @change="handleChangeDepartment" placeholder="请选择">
          <el-option
            v-for="item in departmentList"
            :key="item.id"
            :label="item.organizstionName"
            :value="item.id">
          </el-option>
        </el-select>
      </div>

      <div class="flex">
        <span>评价状态：</span>
        {{departmentDetail.state | filterNull}}
      </div>

      <div class="flex">
        <span>负责人：</span>
        {{departmentDetail.principal | filterNull}}
      </div>
      <div class="flex">
        <span>联系电话：</span>
        {{departmentDetail.tel | filterNull}}
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
             v-for="(item, index) in departmentDetail.tabelDetail">
             <p class="itemtask textCenter" @click="handleClickToTaskDetail(item)">{{item.taskName}}</p>
             <div class="contentRight">
               <div class="itemMaterialsList" v-for="(materialsListItem, index) in item.materialsList" :key="index">
                <p>
                  {{materialsListItem.name}}
                </p>
                <p>
                  {{materialsListItem.updateTime | toDate}}
                </p>
                <p>
                  {{materialsListItem.grade}}
                </p>
                <p>
                  {{materialsListItem.cause}}
                </p>
              </div>
             </div>
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


    handleClickToTaskDetail(item) {
      
       this.$router.push({
        path: `/home/taskDetail/${item.detaId}`
      });
    },

    handleGetDepartmentDetail(id) {
      this.departmentValue = id
      console.log(this.departmentValue, id)
      let param = {
        id
      }
    this.api.handleGetDepartmentDetail(param).then(this.handleGetDepartmentDetailSucc.bind(this));
    },

    handleGetDepartmentDetailSucc( res ) {
      this.loadingFlag = false
      if( res.code == 200 ) {
        this.departmentDetail = res.data
      } else {
        this.departmentDetail = []
        this.$message.error(res.message)
      }
    },

    // 获取部门列表
    handleGetUserList() {
      this.api.handleGetOrganization().then(this.handleGetUserListSucc.bind(this));
    },
    handleGetUserListSucc(res) {
      if(res.code == 200) {
        this.departmentList = res.data.filter( item => {
          return item.type == 'common'
        })
      } else {
        this.$message.error(res.message);
      }
    },
    handleChangeDepartment(value) {
      
      this.$router.push({
        path: `/home/department/${value}`
      });

      this.handleGetDepartmentDetail(value)
    }

  },
  watch: {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {
    this.handleGetUserList()

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

.tebleItem {
  font-size: 18px;
  background: rgba(81, 155, 236, 0.05);
      border-bottom: 1px dashed rgba(90, 90, 90, 0.53);
  padding: 23px 0px;
  display: flex;
  .itemtask {
    cursor: pointer;
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
