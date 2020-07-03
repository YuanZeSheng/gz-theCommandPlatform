import axios from 'axios'

// axios 配置
axios.defaults.baseURL = process.env.NODE_ENV == 'development' ? '/api/resafety-app-pingjiaxitong/' : '/resafety-app-pingjiaxitong/'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
axios.defaults.withCredentials = true; //让ajax携带cookie
console.log(process.env.NODE_ENV)


// uni axios
export function Post(url, param, config) {
    return new Promise((resolve, reject) => {
        axios.post(url, param, config)
            .then(
                res => {
                    resolve(res.data);
                },
                err => {
                    reject(err);
                })
            .catch((error) => {
                reject(error)
            })
    })
}
export function Get(url, param) {
    return new Promise((resolve, reject) => {
        axios.get( url, {
            params: param
        })
            .then(
                res => {
                    resolve(res.data);
                },
                err => {
                    reject(err);
                })
            .catch((error) => {
                reject(error)
            })
    })
}

// default
export default {
// 示例
    handleGetApiTest(param) {
      return Get('/api/******', param)
    },

// 首页

    // 首页-业务平台
    handleGetHomeBusinessPlatformInfo(param) {
        return Get('homepage/findBusinessPlatformInfo', param)
    },

    // 首页-评价日志
    handleGetEvaluationList(param) {
        return Post('homepage/findEvaluationLogInfo', param)
    },

    // 首页-系统得分
    handleGetSystemScoreInfo(param) {
        return Post('homepage/findSystemScoreInfo', param)
    },

    // 首页-单位丢分
    handleGetLosePointsOfCompanys(param) {
        return Post('homepage/findLosePointsOfCompanys', param)
    },

// 组织机构

    // 获取组织机构列表
    handleGetOrganization(param) {
        return Post('taskUser/findTaskUser', param)
    },
    // 新增组织结构
    handleAddOrganization(param) {
        return Post('taskUser/addTaskUser', param)
    },
    // 删除组织机构
    handleDeleteOrganization(param) {
        return Post('taskUser/delTaskUser', param)
    },
    // 编辑组织机构
    handleUpdateOrganization(param) {
        return Post('taskUser/updTaskUser', param)
    },

// 任务列表

    // 获取任务列表
    handleGetTaskList(param) {
        return Get('taskMessage/findTaskList', param)
    },
    // 新增子任务库分类
    handleAddTaskType(param) {
        return Post('taskMessage/addType', param)
    },
    // 新增子任务库详情
     handleAddTaskDetail(param) {
        return Post('taskMessage/addDetails', param)
     },
    //  删除子任务详情
    handleDeleteTaskDetail(param) {
        return Post('taskMessage/findDelId', param)
    },

    // 新增任务分组分类
    handleAddTaskGroupType(param) {
        return Post('taskMessage/addTaskMessage', param)
    },
    // 获取未被分配的任务列表
    handleGetCompletedTaskList(param) {
        return Get('taskMessage/findType', param)
    },
    // 新增任务分组的子项
    handleAddGroupTaskDetail(param) {
        return Post('taskMessage/updTypeTask', param)
    },

// 城市自评

    // 获取城市自评列表
    handleGetCityAssessmentInfo(param) {
        return Post('cityassessment/findCityAssessmentInfo', param)
    },

// 任务分派
    
    // 获取任务分派列表
    handleGetTaskAssignmentInfo(param) {
        return Post('taskallocation/findTaskAssignmentInfo', param)
    },

// 材料上传

    // 获取材料上传列表
    handleGetMaterialUploadInfo(param) {
        return Post('materialupload/findMaterialUploadInfo', param)
    },


// 部门详情页

    // 获取部门详情页
    handleGetDepartmentDetail(param) {
        return Post('organization/findOrganizationDetail', param)
    }

    


}

 