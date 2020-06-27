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
    }
}

 