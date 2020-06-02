export default {
  // vuex
  vuexState: 'vuex',
  collapse: false,
  leftNavList: [{
    name: '综合治理平台',
    childrenList: [{
      name: ''
    }],
  }],
  // 评价管理
  evaluateList: [{
    name: '城市安全源头治理(18分)',

    content: [{
      title: '城市总体规划及防灾减灾等专项规划(2分)',

      tabelHeaderList: [{
        name: '评价内容',
      },{
        name: '任务',
      },{
        name: '责任单位',
      },{
        name: '提交材料',
      },{
        name: '材料状态',
      },{
        name: '评价状态',
      }],

      tabelDetailList: [{
        // 评分内容
        scoreContent: 'a：制定城市国土空间总体规划(城市总体规划)',
  
        // 任务 责任单位 提交材料
        list: [{
          task: 'a1：城市国民经济和社会发展规划',
          department: '市发展改革委',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',
            status: 1
          },{
            name: '2. 规划年度实施计划;',
            status: 2
          }],
          status: 1
        },{
          task: 'a2：城市国民经济和社会发展规划',
          department: '市自然资源局',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',status: 1
            
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },]
      },{
        // 评分内容
        scoreContent: 'b：制定综合防灾减灾规划、安全生产规划、防震减灾规划、地质灾害防治规划、防洪规划、职业病防治规划、消防规划、道路交通安全管理规划、排水防涝规划等专项规划和年度实施计划;',
  
        // 任务 责任单位 提交材料
        list: [{
          task: 'b1：综合防灾减灾规划和年度实施计划',
          department: '市应急局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 2
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 1
        },{
          task: 'b2：防震减灾规划和年度实施计划',
          department: '市应急管理服务中心',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b3：地质灾害防治规划和年度实施计划',
          department: '市自然资源局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 2
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b4：非城区内防洪规划和年度实施计划',
          department: '市水务局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b5：安全生产规划和年度实施计划',
          department: '市应急局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b6：职业病防治规划和年度实施计划',
          department: '市卫生健康委',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b7：消防规划和年度实施计划',
          department: '市消防救援支队',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b8：道路交通安全管理规划和年度实施计划',
          department: '市公安局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b9：城区内排水防涝规划和年度实施计划',
          department: '市城市管理局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        }]
      }],
    },{
      title: '建设项目安全评估论证(2分)',

      tabelHeaderList: [{
        name: '评价内容',
      },{
        name: '任务',
      },{
        name: '责任单位',
      },{
        name: '提交材料',
      },{
        name: '材料状态',
      },{
        name: '评价状态',
      }],

      tabelDetailList: [{
        // 评分内容
        scoreContent: 'a：制定城市国土空间总体规划(城市总体规划)',
  
        // 任务 责任单位 提交材料
        list: [{
          task: 'a1：城市国民经济和社会发展规划',
          department: '市发展改革委',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',
            status: 1
          },{
            name: '2. 规划年度实施计划;',
            status: 2
          }],
          status: 1
        },{
          task: 'a2：城市国民经济和社会发展规划',
          department: '市自然资源局',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',status: 1
            
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },]
      },{
        // 评分内容
        scoreContent: 'b：制定综合防灾减灾规划、安全生产规划、防震减灾规划、地质灾害防治规划、防洪规划、职业病防治规划、消防规划、道路交通安全管理规划、排水防涝规划等专项规划和年度实施计划;',
  
        // 任务 责任单位 提交材料
        list: [{
          task: 'b1：综合防灾减灾规划和年度实施计划',
          department: '市应急局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 2
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 1
        },{
          task: 'b2：防震减灾规划和年度实施计划',
          department: '市应急管理服务中心',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b3：地质灾害防治规划和年度实施计划',
          department: '市自然资源局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 2
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b4：非城区内防洪规划和年度实施计划',
          department: '市水务局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b5：安全生产规划和年度实施计划',
          department: '市应急局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b6：职业病防治规划和年度实施计划',
          department: '市卫生健康委',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b7：消防规划和年度实施计划',
          department: '市消防救援支队',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b8：道路交通安全管理规划和年度实施计划',
          department: '市公安局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b9：城区内排水防涝规划和年度实施计划',
          department: '市城市管理局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        }]
      }],
    }],
  }, {
    name: '城市安全风险防控(32分)',

    content: [{
      title: '城市总体规划(2分)',

      tabelHeaderList: [{
        name: '评价内容',
      },{
        name: '任务',
      },{
        name: '责任单位',
      },{
        name: '提交材料',
      },{
        name: '材料状态',
      },{
        name: '评价状态',
      }],

      tabelDetailList: [{
        // 评分内容
        scoreContent: 'a：制定城市国土空间总体规划(城市总体规划)',
  
        // 任务 责任单位 提交材料
        list: [{
          task: 'a1：城市国民经济和社会发展规划',
          department: '市发展改革委',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',
            status: 1
          },{
            name: '2. 规划年度实施计划;',
            status: 2
          }],
          status: 1
        },{
          task: 'a2：城市国民经济和社会发展规划',
          department: '市自然资源局',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',status: 1
            
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },]
      },{
        // 评分内容
        scoreContent: 'b：制定综合防灾减灾规划、安全生产规划、防震减灾规划、地质灾害防治规划、防洪规划、职业病防治规划、消防规划、道路交通安全管理规划、排水防涝规划等专项规划和年度实施计划;',
  
        // 任务 责任单位 提交材料
        list: [{
          task: 'b1：综合防灾减灾规划和年度实施计划',
          department: '市应急局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 2
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 1
        },{
          task: 'b2：防震减灾规划和年度实施计划',
          department: '市应急管理服务中心',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b3：地质灾害防治规划和年度实施计划',
          department: '市自然资源局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 2
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b4：非城区内防洪规划和年度实施计划',
          department: '市水务局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b5：安全生产规划和年度实施计划',
          department: '市应急局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b6：职业病防治规划和年度实施计划',
          department: '市卫生健康委',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b7：消防规划和年度实施计划',
          department: '市消防救援支队',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b8：道路交通安全管理规划和年度实施计划',
          department: '市公安局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b9：城区内排水防涝规划和年度实施计划',
          department: '市城市管理局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        }]
      }],
    },{
      title: '建设项目安全评估论证(2分)',

      tabelHeaderList: [{
        name: '评价内容',
      },{
        name: '任务',
      },{
        name: '责任单位',
      },{
        name: '提交材料',
      },{
        name: '材料状态',
      },{
        name: '评价状态',
      }],

      tabelDetailList: [{
        // 评分内容
        scoreContent: 'a：制定城市国土空间总体规划(城市总体规划)',
  
        // 任务 责任单位 提交材料
        list: [{
          task: 'a1：城市国民经济和社会发展规划',
          department: '市发展改革委',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',
            status: 1
          },{
            name: '2. 规划年度实施计划;',
            status: 2
          }],
          status: 1
        },{
          task: 'a2：城市国民经济和社会发展规划',
          department: '市自然资源局',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',status: 1
            
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },]
      },{
        // 评分内容
        scoreContent: 'b：制定综合防灾减灾规划、安全生产规划、防震减灾规划、地质灾害防治规划、防洪规划、职业病防治规划、消防规划、道路交通安全管理规划、排水防涝规划等专项规划和年度实施计划;',
  
        // 任务 责任单位 提交材料
        list: [{
          task: 'b1：综合防灾减灾规划和年度实施计划',
          department: '市应急局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 2
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 1
        },{
          task: 'b2：防震减灾规划和年度实施计划',
          department: '市应急管理服务中心',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b3：地质灾害防治规划和年度实施计划',
          department: '市自然资源局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 2
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b4：非城区内防洪规划和年度实施计划',
          department: '市水务局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b5：安全生产规划和年度实施计划',
          department: '市应急局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b6：职业病防治规划和年度实施计划',
          department: '市卫生健康委',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b7：消防规划和年度实施计划',
          department: '市消防救援支队',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b8：道路交通安全管理规划和年度实施计划',
          department: '市公安局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b9：城区内排水防涝规划和年度实施计划',
          department: '市城市管理局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        }]
      }],
    }],
  },{
    name: '城市安全监督管理(16分)',
    content: [{
      title: '城市工业企业(7分)',

      tabelHeaderList: [{
        name: '评价内容',
      },{
        name: '任务',
      },{
        name: '责任单位',
      },{
        name: '提交材料',
      },{
        name: '材料状态',
      },{
        name: '评价状态',
      }],

      tabelDetailList: [{
        // 评分内容
        scoreContent: 'a：制定城市国土空间总体规划(城市总体规划)',
  
        // 任务 责任单位 提交材料
        list: [{
          task: 'a1：城市国民经济和社会发展规划',
          department: '市发展改革委',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',
            status: 1
          },{
            name: '2. 规划年度实施计划;',
            status: 2
          }],
          status: 1
        },{
          task: 'a2：城市国民经济和社会发展规划',
          department: '市自然资源局',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',status: 1
            
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },]
      },{
        // 评分内容
        scoreContent: 'b：制定综合防灾减灾规划、安全生产规划、防震减灾规划、地质灾害防治规划、防洪规划、职业病防治规划、消防规划、道路交通安全管理规划、排水防涝规划等专项规划和年度实施计划;',
  
        // 任务 责任单位 提交材料
        list: [{
          task: 'b1：综合防灾减灾规划和年度实施计划',
          department: '市应急局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 2
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 1
        },{
          task: 'b2：防震减灾规划和年度实施计划',
          department: '市应急管理服务中心',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b3：地质灾害防治规划和年度实施计划',
          department: '市自然资源局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 2
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b4：非城区内防洪规划和年度实施计划',
          department: '市水务局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b5：安全生产规划和年度实施计划',
          department: '市应急局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b6：职业病防治规划和年度实施计划',
          department: '市卫生健康委',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b7：消防规划和年度实施计划',
          department: '市消防救援支队',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b8：道路交通安全管理规划和年度实施计划',
          department: '市公安局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b9：城区内排水防涝规划和年度实施计划',
          department: '市城市管理局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        }]
      }],
    },{
      title: '人员密集区域(9分)',

      tabelHeaderList: [{
        name: '评价内容',
      },{
        name: '任务',
      },{
        name: '责任单位',
      },{
        name: '提交材料',
      },{
        name: '材料状态',
      },{
        name: '评价状态',
      }],

      tabelDetailList: [{
        // 评分内容
        scoreContent: 'a：制定城市国土空间总体规划(城市总体规划)',
  
        // 任务 责任单位 提交材料
        list: [{
          task: 'a1：城市国民经济和社会发展规划',
          department: '市发展改革委',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',
            status: 1
          },{
            name: '2. 规划年度实施计划;',
            status: 2
          }],
          status: 1
        },{
          task: 'a2：城市国民经济和社会发展规划',
          department: '市自然资源局',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',status: 1
            
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },]
      },{
        // 评分内容
        scoreContent: 'b：制定综合防灾减灾规划、安全生产规划、防震减灾规划、地质灾害防治规划、防洪规划、职业病防治规划、消防规划、道路交通安全管理规划、排水防涝规划等专项规划和年度实施计划;',
  
        // 任务 责任单位 提交材料
        list: [{
          task: 'b1：综合防灾减灾规划和年度实施计划',
          department: '市应急局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 2
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 1
        },{
          task: 'b2：防震减灾规划和年度实施计划',
          department: '市应急管理服务中心',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b3：地质灾害防治规划和年度实施计划',
          department: '市自然资源局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 2
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b4：非城区内防洪规划和年度实施计划',
          department: '市水务局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b5：安全生产规划和年度实施计划',
          department: '市应急局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b6：职业病防治规划和年度实施计划',
          department: '市卫生健康委',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b7：消防规划和年度实施计划',
          department: '市消防救援支队',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b8：道路交通安全管理规划和年度实施计划',
          department: '市公安局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b9：城区内排水防涝规划和年度实施计划',
          department: '市城市管理局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        }]
      }],
    }],
  }, {
    name: '城市安全保障能力(16分)',
    content: [{
      title: '人员密集区域(9分)',

      tabelHeaderList: [{
        name: '评价内容',
      },{
        name: '任务',
      },{
        name: '责任单位',
      },{
        name: '提交材料',
      },{
        name: '材料状态',
      },{
        name: '评价状态',
      }],

      tabelDetailList: [{
        // 评分内容
        scoreContent: 'a：制定城市国土空间总体规划(城市总体规划)',
  
        // 任务 责任单位 提交材料
        list: [{
          task: 'a1：城市国民经济和社会发展规划',
          department: '市发展改革委',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',
            status: 1
          },{
            name: '2. 规划年度实施计划;',
            status: 2
          }],
          status: 1
        },{
          task: 'a2：城市国民经济和社会发展规划',
          department: '市自然资源局',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',status: 1
            
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },]
      },{
        // 评分内容
        scoreContent: 'b：制定综合防灾减灾规划、安全生产规划、防震减灾规划、地质灾害防治规划、防洪规划、职业病防治规划、消防规划、道路交通安全管理规划、排水防涝规划等专项规划和年度实施计划;',
  
        // 任务 责任单位 提交材料
        list: [{
          task: 'b1：综合防灾减灾规划和年度实施计划',
          department: '市应急局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 2
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 1
        },{
          task: 'b2：防震减灾规划和年度实施计划',
          department: '市应急管理服务中心',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b3：地质灾害防治规划和年度实施计划',
          department: '市自然资源局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 2
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b4：非城区内防洪规划和年度实施计划',
          department: '市水务局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b5：安全生产规划和年度实施计划',
          department: '市应急局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b6：职业病防治规划和年度实施计划',
          department: '市卫生健康委',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b7：消防规划和年度实施计划',
          department: '市消防救援支队',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b8：道路交通安全管理规划和年度实施计划',
          department: '市公安局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b9：城区内排水防涝规划和年度实施计划',
          department: '市城市管理局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        }]
      }],
    },{
      title: '建设项目安全评估论证(2分)',

      tabelHeaderList: [{
        name: '评价内容',
      },{
        name: '任务',
      },{
        name: '责任单位',
      },{
        name: '提交材料',
      },{
        name: '材料状态',
      },{
        name: '评价状态',
      }],

      tabelDetailList: [{
        // 评分内容
        scoreContent: 'a：制定城市国土空间总体规划(城市总体规划)',
  
        // 任务 责任单位 提交材料
        list: [{
          task: 'a1：城市国民经济和社会发展规划',
          department: '市发展改革委',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',
            status: 1
          },{
            name: '2. 规划年度实施计划;',
            status: 2
          }],
          status: 1
        },{
          task: 'a2：城市国民经济和社会发展规划',
          department: '市自然资源局',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',status: 1
            
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },]
      },{
        // 评分内容
        scoreContent: 'b：制定综合防灾减灾规划、安全生产规划、防震减灾规划、地质灾害防治规划、防洪规划、职业病防治规划、消防规划、道路交通安全管理规划、排水防涝规划等专项规划和年度实施计划;',
  
        // 任务 责任单位 提交材料
        list: [{
          task: 'b1：综合防灾减灾规划和年度实施计划',
          department: '市应急局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 2
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 1
        },{
          task: 'b2：防震减灾规划和年度实施计划',
          department: '市应急管理服务中心',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b3：地质灾害防治规划和年度实施计划',
          department: '市自然资源局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 2
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b4：非城区内防洪规划和年度实施计划',
          department: '市水务局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b5：安全生产规划和年度实施计划',
          department: '市应急局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b6：职业病防治规划和年度实施计划',
          department: '市卫生健康委',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b7：消防规划和年度实施计划',
          department: '市消防救援支队',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b8：道路交通安全管理规划和年度实施计划',
          department: '市公安局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b9：城区内排水防涝规划和年度实施计划',
          department: '市城市管理局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        }]
      }],
    }],
  }, {
    name: '城市安全应急救援(14分)',
    content: [{
      title: '建设项目安全评估论证(2分)',

      tabelHeaderList: [{
        name: '评价内容',
      },{
        name: '任务',
      },{
        name: '责任单位',
      },{
        name: '提交材料',
      },{
        name: '材料状态',
      },{
        name: '评价状态',
      }],

      tabelDetailList: [{
        // 评分内容
        scoreContent: 'a：制定城市国土空间总体规划(城市总体规划)',
  
        // 任务 责任单位 提交材料
        list: [{
          task: 'a1：城市国民经济和社会发展规划',
          department: '市发展改革委',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',
            status: 1
          },{
            name: '2. 规划年度实施计划;',
            status: 2
          }],
          status: 1
        },{
          task: 'a2：城市国民经济和社会发展规划',
          department: '市自然资源局',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',status: 1
            
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },]
      },{
        // 评分内容
        scoreContent: 'b：制定综合防灾减灾规划、安全生产规划、防震减灾规划、地质灾害防治规划、防洪规划、职业病防治规划、消防规划、道路交通安全管理规划、排水防涝规划等专项规划和年度实施计划;',
  
        // 任务 责任单位 提交材料
        list: [{
          task: 'b1：综合防灾减灾规划和年度实施计划',
          department: '市应急局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 2
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 1
        },{
          task: 'b2：防震减灾规划和年度实施计划',
          department: '市应急管理服务中心',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b3：地质灾害防治规划和年度实施计划',
          department: '市自然资源局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 2
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b4：非城区内防洪规划和年度实施计划',
          department: '市水务局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b5：安全生产规划和年度实施计划',
          department: '市应急局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b6：职业病防治规划和年度实施计划',
          department: '市卫生健康委',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b7：消防规划和年度实施计划',
          department: '市消防救援支队',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b8：道路交通安全管理规划和年度实施计划',
          department: '市公安局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b9：城区内排水防涝规划和年度实施计划',
          department: '市城市管理局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        }]
      }],
    },{
      title: '建设项目安全评估论证(2分)',

      tabelHeaderList: [{
        name: '评价内容',
      },{
        name: '任务',
      },{
        name: '责任单位',
      },{
        name: '提交材料',
      },{
        name: '材料状态',
      },{
        name: '评价状态',
      }],

      tabelDetailList: [{
        // 评分内容
        scoreContent: 'a：制定城市国土空间总体规划(城市总体规划)',
  
        // 任务 责任单位 提交材料
        list: [{
          task: 'a1：城市国民经济和社会发展规划',
          department: '市发展改革委',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',
            status: 1
          },{
            name: '2. 规划年度实施计划;',
            status: 2
          }],
          status: 1
        },{
          task: 'a2：城市国民经济和社会发展规划',
          department: '市自然资源局',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',status: 1
            
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },]
      },{
        // 评分内容
        scoreContent: 'b：制定综合防灾减灾规划、安全生产规划、防震减灾规划、地质灾害防治规划、防洪规划、职业病防治规划、消防规划、道路交通安全管理规划、排水防涝规划等专项规划和年度实施计划;',
  
        // 任务 责任单位 提交材料
        list: [{
          task: 'b1：综合防灾减灾规划和年度实施计划',
          department: '市应急局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 2
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 1
        },{
          task: 'b2：防震减灾规划和年度实施计划',
          department: '市应急管理服务中心',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b3：地质灾害防治规划和年度实施计划',
          department: '市自然资源局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 2
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b4：非城区内防洪规划和年度实施计划',
          department: '市水务局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b5：安全生产规划和年度实施计划',
          department: '市应急局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b6：职业病防治规划和年度实施计划',
          department: '市卫生健康委',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b7：消防规划和年度实施计划',
          department: '市消防救援支队',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b8：道路交通安全管理规划和年度实施计划',
          department: '市公安局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b9：城区内排水防涝规划和年度实施计划',
          department: '市城市管理局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        }]
      }],
    }],
  }, {
    name: '城市安全状况(4分)',
    content: [{
      title: '人员密集区域(9分)',

      tabelHeaderList: [{
        name: '评价内容',
      },{
        name: '任务',
      },{
        name: '责任单位',
      },{
        name: '提交材料',
      },{
        name: '材料状态',
      },{
        name: '评价状态',
      }],

      tabelDetailList: [{
        // 评分内容
        scoreContent: 'a：制定城市国土空间总体规划(城市总体规划)',
  
        // 任务 责任单位 提交材料
        list: [{
          task: 'a1：城市国民经济和社会发展规划',
          department: '市发展改革委',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',
            status: 1
          },{
            name: '2. 规划年度实施计划;',
            status: 2
          }],
          status: 1
        },{
          task: 'a2：城市国民经济和社会发展规划',
          department: '市自然资源局',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',status: 1
            
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },]
      },{
        // 评分内容
        scoreContent: 'b：制定综合防灾减灾规划、安全生产规划、防震减灾规划、地质灾害防治规划、防洪规划、职业病防治规划、消防规划、道路交通安全管理规划、排水防涝规划等专项规划和年度实施计划;',
  
        // 任务 责任单位 提交材料
        list: [{
          task: 'b1：综合防灾减灾规划和年度实施计划',
          department: '市应急局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 2
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 1
        },{
          task: 'b2：防震减灾规划和年度实施计划',
          department: '市应急管理服务中心',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b3：地质灾害防治规划和年度实施计划',
          department: '市自然资源局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 2
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b4：非城区内防洪规划和年度实施计划',
          department: '市水务局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b5：安全生产规划和年度实施计划',
          department: '市应急局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b6：职业病防治规划和年度实施计划',
          department: '市卫生健康委',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b7：消防规划和年度实施计划',
          department: '市消防救援支队',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b8：道路交通安全管理规划和年度实施计划',
          department: '市公安局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b9：城区内排水防涝规划和年度实施计划',
          department: '市城市管理局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        }]
      }],
    },{
      title: '建设项目安全评估论证(2分)',

      tabelHeaderList: [{
        name: '评价内容',
      },{
        name: '任务',
      },{
        name: '责任单位',
      },{
        name: '提交材料',
      },{
        name: '材料状态',
      },{
        name: '评价状态',
      }],

      tabelDetailList: [{
        // 评分内容
        scoreContent: 'a：制定城市国土空间总体规划(城市总体规划)',
  
        // 任务 责任单位 提交材料
        list: [{
          task: 'a1：城市国民经济和社会发展规划',
          department: '市发展改革委',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',
            status: 1
          },{
            name: '2. 规划年度实施计划;',
            status: 2
          }],
          status: 1
        },{
          task: 'a2：城市国民经济和社会发展规划',
          department: '市自然资源局',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',status: 1
            
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },]
      },{
        // 评分内容
        scoreContent: 'b：制定综合防灾减灾规划、安全生产规划、防震减灾规划、地质灾害防治规划、防洪规划、职业病防治规划、消防规划、道路交通安全管理规划、排水防涝规划等专项规划和年度实施计划;',
  
        // 任务 责任单位 提交材料
        list: [{
          task: 'b1：综合防灾减灾规划和年度实施计划',
          department: '市应急局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 2
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 1
        },{
          task: 'b2：防震减灾规划和年度实施计划',
          department: '市应急管理服务中心',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b3：地质灾害防治规划和年度实施计划',
          department: '市自然资源局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 2
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b4：非城区内防洪规划和年度实施计划',
          department: '市水务局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b5：安全生产规划和年度实施计划',
          department: '市应急局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b6：职业病防治规划和年度实施计划',
          department: '市卫生健康委',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b7：消防规划和年度实施计划',
          department: '市消防救援支队',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b8：道路交通安全管理规划和年度实施计划',
          department: '市公安局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b9：城区内排水防涝规划和年度实施计划',
          department: '市城市管理局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        }]
      }],
    }],
  }, {
    name: '鼓励项(5分)',
    content: [{
      title: '城市总体规划及防灾减灾等专项规划(2分)',

      tabelHeaderList: [{
        name: '评价内容',
      },{
        name: '任务',
      },{
        name: '责任单位',
      },{
        name: '提交材料',
      },{
        name: '材料状态',
      },{
        name: '评价状态',
      }],

      tabelDetailList: [{
        // 评分内容
        scoreContent: 'a：制定城市国土空间总体规划(城市总体规划)',
  
        // 任务 责任单位 提交材料
        list: [{
          task: 'a1：城市国民经济和社会发展规划',
          department: '市发展改革委',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',
            status: 1
          },{
            name: '2. 规划年度实施计划;',
            status: 2
          }],
          status: 1
        },{
          task: 'a2：城市国民经济和社会发展规划',
          department: '市自然资源局',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',status: 1
            
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },]
      },{
        // 评分内容
        scoreContent: 'b：制定综合防灾减灾规划、安全生产规划、防震减灾规划、地质灾害防治规划、防洪规划、职业病防治规划、消防规划、道路交通安全管理规划、排水防涝规划等专项规划和年度实施计划;',
  
        // 任务 责任单位 提交材料
        list: [{
          task: 'b1：综合防灾减灾规划和年度实施计划',
          department: '市应急局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 2
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 1
        },{
          task: 'b2：防震减灾规划和年度实施计划',
          department: '市应急管理服务中心',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b3：地质灾害防治规划和年度实施计划',
          department: '市自然资源局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 2
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b4：非城区内防洪规划和年度实施计划',
          department: '市水务局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b5：安全生产规划和年度实施计划',
          department: '市应急局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b6：职业病防治规划和年度实施计划',
          department: '市卫生健康委',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b7：消防规划和年度实施计划',
          department: '市消防救援支队',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b8：道路交通安全管理规划和年度实施计划',
          department: '市公安局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b9：城区内排水防涝规划和年度实施计划',
          department: '市城市管理局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        }]
      }],
    },{
      title: '建设项目安全评估论证(2分)',

      tabelHeaderList: [{
        name: '评价内容',
      },{
        name: '任务',
      },{
        name: '责任单位',
      },{
        name: '提交材料',
      },{
        name: '材料状态',
      },{
        name: '评价状态',
      }],

      tabelDetailList: [{
        // 评分内容
        scoreContent: 'a：制定城市国土空间总体规划(城市总体规划)',
  
        // 任务 责任单位 提交材料
        list: [{
          task: 'a1：城市国民经济和社会发展规划',
          department: '市发展改革委',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',
            status: 1
          },{
            name: '2. 规划年度实施计划;',
            status: 2
          }],
          status: 1
        },{
          task: 'a2：城市国民经济和社会发展规划',
          department: '市自然资源局',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',status: 1
            
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },]
      },{
        // 评分内容
        scoreContent: 'b：制定综合防灾减灾规划、安全生产规划、防震减灾规划、地质灾害防治规划、防洪规划、职业病防治规划、消防规划、道路交通安全管理规划、排水防涝规划等专项规划和年度实施计划;',
  
        // 任务 责任单位 提交材料
        list: [{
          task: 'b1：综合防灾减灾规划和年度实施计划',
          department: '市应急局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 2
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 1
        },{
          task: 'b2：防震减灾规划和年度实施计划',
          department: '市应急管理服务中心',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b3：地质灾害防治规划和年度实施计划',
          department: '市自然资源局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 2
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b4：非城区内防洪规划和年度实施计划',
          department: '市水务局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b5：安全生产规划和年度实施计划',
          department: '市应急局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b6：职业病防治规划和年度实施计划',
          department: '市卫生健康委',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b7：消防规划和年度实施计划',
          department: '市消防救援支队',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b8：道路交通安全管理规划和年度实施计划',
          department: '市公安局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b9：城区内排水防涝规划和年度实施计划',
          department: '市城市管理局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        }]
      }],
    }],
  },],

  




  // 资料上传
  dataEvaluateList: [{
    name: '城市安全源头治理(18分)',

    content: [{
      title: '城市总体规划及防灾减灾等专项规划(2分)',

      tabelHeaderList: [{
        name: '评价内容',
      },{
        name: '任务',
      },{
        name: '责任单位',
      },{
        name: '提交材料',
      },{
        name: '操作'
      }],

      tabelDetailList: [{
        // 评分内容
        scoreContent: 'a：制定城市国土空间总体规划(城市总体规划)',
  
        // 任务 责任单位 提交材料
        list: [{
          task: 'a1：城市国民经济和社会发展规划',
          department: '市发展改革委',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',
            status: 1
          },{
            name: '2. 规划年度实施计划;',
            status: 2
          }],
          status: 1
        },{
          task: 'a2：城市国民经济和社会发展规划',
          department: '市自然资源局',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',status: 1
            
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },]
      },{
        // 评分内容
        scoreContent: 'b：制定综合防灾减灾规划、安全生产规划、防震减灾规划、地质灾害防治规划、防洪规划、职业病防治规划、消防规划、道路交通安全管理规划、排水防涝规划等专项规划和年度实施计划;',
  
        // 任务 责任单位 提交材料
        list: [{
          task: 'b1：综合防灾减灾规划和年度实施计划',
          department: '市应急局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 2
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 1
        },{
          task: 'b2：防震减灾规划和年度实施计划',
          department: '市应急管理服务中心',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b3：地质灾害防治规划和年度实施计划',
          department: '市自然资源局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 2
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b4：非城区内防洪规划和年度实施计划',
          department: '市水务局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b5：安全生产规划和年度实施计划',
          department: '市应急局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b6：职业病防治规划和年度实施计划',
          department: '市卫生健康委',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b7：消防规划和年度实施计划',
          department: '市消防救援支队',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b8：道路交通安全管理规划和年度实施计划',
          department: '市公安局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b9：城区内排水防涝规划和年度实施计划',
          department: '市城市管理局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        }]
      }],
    },{
      title: '建设项目安全评估论证(2分)',

      tabelHeaderList: [{
        name: '评价内容',
      },{
        name: '任务',
      },{
        name: '责任单位',
      },{
        name: '提交材料',
      },{
        name: '操作',
      }],

      tabelDetailList: [{
        // 评分内容
        scoreContent: 'a：制定城市国土空间总体规划(城市总体规划)',
  
        // 任务 责任单位 提交材料
        list: [{
          task: 'a1：城市国民经济和社会发展规划',
          department: '市发展改革委',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',
            status: 1
          },{
            name: '2. 规划年度实施计划;',
            status: 2
          }],
          status: 1
        },{
          task: 'a2：城市国民经济和社会发展规划',
          department: '市自然资源局',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',status: 1
            
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },]
      },{
        // 评分内容
        scoreContent: 'b：制定综合防灾减灾规划、安全生产规划、防震减灾规划、地质灾害防治规划、防洪规划、职业病防治规划、消防规划、道路交通安全管理规划、排水防涝规划等专项规划和年度实施计划;',
  
        // 任务 责任单位 提交材料
        list: [{
          task: 'b1：综合防灾减灾规划和年度实施计划',
          department: '市应急局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 2
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 1
        },{
          task: 'b2：防震减灾规划和年度实施计划',
          department: '市应急管理服务中心',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b3：地质灾害防治规划和年度实施计划',
          department: '市自然资源局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 2
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b4：非城区内防洪规划和年度实施计划',
          department: '市水务局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b5：安全生产规划和年度实施计划',
          department: '市应急局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b6：职业病防治规划和年度实施计划',
          department: '市卫生健康委',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b7：消防规划和年度实施计划',
          department: '市消防救援支队',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b8：道路交通安全管理规划和年度实施计划',
          department: '市公安局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b9：城区内排水防涝规划和年度实施计划',
          department: '市城市管理局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        }]
      }],
    }],
  }, {
    name: '城市安全风险防控(32分)',

    content: [{
      title: '城市总体规划(2分)',

      tabelHeaderList: [{
        name: '评价内容',
      },{
        name: '任务',
      },{
        name: '责任单位',
      },{
        name: '提交材料',
      },{
        name: '材料状态',
      },{
        name: '评价状态',
      }],

      tabelDetailList: [{
        // 评分内容
        scoreContent: 'a：制定城市国土空间总体规划(城市总体规划)',
  
        // 任务 责任单位 提交材料
        list: [{
          task: 'a1：城市国民经济和社会发展规划',
          department: '市发展改革委',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',
            status: 1
          },{
            name: '2. 规划年度实施计划;',
            status: 2
          }],
          status: 1
        },{
          task: 'a2：城市国民经济和社会发展规划',
          department: '市自然资源局',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',status: 1
            
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },]
      },{
        // 评分内容
        scoreContent: 'b：制定综合防灾减灾规划、安全生产规划、防震减灾规划、地质灾害防治规划、防洪规划、职业病防治规划、消防规划、道路交通安全管理规划、排水防涝规划等专项规划和年度实施计划;',
  
        // 任务 责任单位 提交材料
        list: [{
          task: 'b1：综合防灾减灾规划和年度实施计划',
          department: '市应急局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 2
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 1
        },{
          task: 'b2：防震减灾规划和年度实施计划',
          department: '市应急管理服务中心',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b3：地质灾害防治规划和年度实施计划',
          department: '市自然资源局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 2
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b4：非城区内防洪规划和年度实施计划',
          department: '市水务局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b5：安全生产规划和年度实施计划',
          department: '市应急局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b6：职业病防治规划和年度实施计划',
          department: '市卫生健康委',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b7：消防规划和年度实施计划',
          department: '市消防救援支队',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b8：道路交通安全管理规划和年度实施计划',
          department: '市公安局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b9：城区内排水防涝规划和年度实施计划',
          department: '市城市管理局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        }]
      }],
    },{
      title: '建设项目安全评估论证(2分)',

      tabelHeaderList: [{
        name: '评价内容',
      },{
        name: '任务',
      },{
        name: '责任单位',
      },{
        name: '提交材料',
      },{
        name: '材料状态',
      },{
        name: '评价状态',
      }],

      tabelDetailList: [{
        // 评分内容
        scoreContent: 'a：制定城市国土空间总体规划(城市总体规划)',
  
        // 任务 责任单位 提交材料
        list: [{
          task: 'a1：城市国民经济和社会发展规划',
          department: '市发展改革委',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',
            status: 1
          },{
            name: '2. 规划年度实施计划;',
            status: 2
          }],
          status: 1
        },{
          task: 'a2：城市国民经济和社会发展规划',
          department: '市自然资源局',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',status: 1
            
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },]
      },{
        // 评分内容
        scoreContent: 'b：制定综合防灾减灾规划、安全生产规划、防震减灾规划、地质灾害防治规划、防洪规划、职业病防治规划、消防规划、道路交通安全管理规划、排水防涝规划等专项规划和年度实施计划;',
  
        // 任务 责任单位 提交材料
        list: [{
          task: 'b1：综合防灾减灾规划和年度实施计划',
          department: '市应急局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 2
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 1
        },{
          task: 'b2：防震减灾规划和年度实施计划',
          department: '市应急管理服务中心',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b3：地质灾害防治规划和年度实施计划',
          department: '市自然资源局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 2
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b4：非城区内防洪规划和年度实施计划',
          department: '市水务局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b5：安全生产规划和年度实施计划',
          department: '市应急局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b6：职业病防治规划和年度实施计划',
          department: '市卫生健康委',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b7：消防规划和年度实施计划',
          department: '市消防救援支队',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b8：道路交通安全管理规划和年度实施计划',
          department: '市公安局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b9：城区内排水防涝规划和年度实施计划',
          department: '市城市管理局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        }]
      }],
    }],
  },{
    name: '城市安全监督管理(16分)',
    content: [{
      title: '城市工业企业(7分)',

      tabelHeaderList: [{
        name: '评价内容',
      },{
        name: '任务',
      },{
        name: '责任单位',
      },{
        name: '提交材料',
      },{
        name: '材料状态',
      },{
        name: '评价状态',
      }],

      tabelDetailList: [{
        // 评分内容
        scoreContent: 'a：制定城市国土空间总体规划(城市总体规划)',
  
        // 任务 责任单位 提交材料
        list: [{
          task: 'a1：城市国民经济和社会发展规划',
          department: '市发展改革委',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',
            status: 1
          },{
            name: '2. 规划年度实施计划;',
            status: 2
          }],
          status: 1
        },{
          task: 'a2：城市国民经济和社会发展规划',
          department: '市自然资源局',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',status: 1
            
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },]
      },{
        // 评分内容
        scoreContent: 'b：制定综合防灾减灾规划、安全生产规划、防震减灾规划、地质灾害防治规划、防洪规划、职业病防治规划、消防规划、道路交通安全管理规划、排水防涝规划等专项规划和年度实施计划;',
  
        // 任务 责任单位 提交材料
        list: [{
          task: 'b1：综合防灾减灾规划和年度实施计划',
          department: '市应急局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 2
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 1
        },{
          task: 'b2：防震减灾规划和年度实施计划',
          department: '市应急管理服务中心',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b3：地质灾害防治规划和年度实施计划',
          department: '市自然资源局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 2
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b4：非城区内防洪规划和年度实施计划',
          department: '市水务局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b5：安全生产规划和年度实施计划',
          department: '市应急局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b6：职业病防治规划和年度实施计划',
          department: '市卫生健康委',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b7：消防规划和年度实施计划',
          department: '市消防救援支队',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b8：道路交通安全管理规划和年度实施计划',
          department: '市公安局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b9：城区内排水防涝规划和年度实施计划',
          department: '市城市管理局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        }]
      }],
    },{
      title: '人员密集区域(9分)',

      tabelHeaderList: [{
        name: '评价内容',
      },{
        name: '任务',
      },{
        name: '责任单位',
      },{
        name: '提交材料',
      },{
        name: '材料状态',
      },{
        name: '评价状态',
      }],

      tabelDetailList: [{
        // 评分内容
        scoreContent: 'a：制定城市国土空间总体规划(城市总体规划)',
  
        // 任务 责任单位 提交材料
        list: [{
          task: 'a1：城市国民经济和社会发展规划',
          department: '市发展改革委',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',
            status: 1
          },{
            name: '2. 规划年度实施计划;',
            status: 2
          }],
          status: 1
        },{
          task: 'a2：城市国民经济和社会发展规划',
          department: '市自然资源局',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',status: 1
            
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },]
      },{
        // 评分内容
        scoreContent: 'b：制定综合防灾减灾规划、安全生产规划、防震减灾规划、地质灾害防治规划、防洪规划、职业病防治规划、消防规划、道路交通安全管理规划、排水防涝规划等专项规划和年度实施计划;',
  
        // 任务 责任单位 提交材料
        list: [{
          task: 'b1：综合防灾减灾规划和年度实施计划',
          department: '市应急局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 2
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 1
        },{
          task: 'b2：防震减灾规划和年度实施计划',
          department: '市应急管理服务中心',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b3：地质灾害防治规划和年度实施计划',
          department: '市自然资源局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 2
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b4：非城区内防洪规划和年度实施计划',
          department: '市水务局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b5：安全生产规划和年度实施计划',
          department: '市应急局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b6：职业病防治规划和年度实施计划',
          department: '市卫生健康委',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b7：消防规划和年度实施计划',
          department: '市消防救援支队',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b8：道路交通安全管理规划和年度实施计划',
          department: '市公安局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b9：城区内排水防涝规划和年度实施计划',
          department: '市城市管理局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        }]
      }],
    }],
  }, {
    name: '城市安全保障能力(16分)',
    content: [{
      title: '人员密集区域(9分)',

      tabelHeaderList: [{
        name: '评价内容',
      },{
        name: '任务',
      },{
        name: '责任单位',
      },{
        name: '提交材料',
      },{
        name: '材料状态',
      },{
        name: '评价状态',
      }],

      tabelDetailList: [{
        // 评分内容
        scoreContent: 'a：制定城市国土空间总体规划(城市总体规划)',
  
        // 任务 责任单位 提交材料
        list: [{
          task: 'a1：城市国民经济和社会发展规划',
          department: '市发展改革委',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',
            status: 1
          },{
            name: '2. 规划年度实施计划;',
            status: 2
          }],
          status: 1
        },{
          task: 'a2：城市国民经济和社会发展规划',
          department: '市自然资源局',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',status: 1
            
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },]
      },{
        // 评分内容
        scoreContent: 'b：制定综合防灾减灾规划、安全生产规划、防震减灾规划、地质灾害防治规划、防洪规划、职业病防治规划、消防规划、道路交通安全管理规划、排水防涝规划等专项规划和年度实施计划;',
  
        // 任务 责任单位 提交材料
        list: [{
          task: 'b1：综合防灾减灾规划和年度实施计划',
          department: '市应急局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 2
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 1
        },{
          task: 'b2：防震减灾规划和年度实施计划',
          department: '市应急管理服务中心',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b3：地质灾害防治规划和年度实施计划',
          department: '市自然资源局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 2
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b4：非城区内防洪规划和年度实施计划',
          department: '市水务局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b5：安全生产规划和年度实施计划',
          department: '市应急局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b6：职业病防治规划和年度实施计划',
          department: '市卫生健康委',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b7：消防规划和年度实施计划',
          department: '市消防救援支队',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b8：道路交通安全管理规划和年度实施计划',
          department: '市公安局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b9：城区内排水防涝规划和年度实施计划',
          department: '市城市管理局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        }]
      }],
    },{
      title: '建设项目安全评估论证(2分)',

      tabelHeaderList: [{
        name: '评价内容',
      },{
        name: '任务',
      },{
        name: '责任单位',
      },{
        name: '提交材料',
      },{
        name: '材料状态',
      },{
        name: '评价状态',
      }],

      tabelDetailList: [{
        // 评分内容
        scoreContent: 'a：制定城市国土空间总体规划(城市总体规划)',
  
        // 任务 责任单位 提交材料
        list: [{
          task: 'a1：城市国民经济和社会发展规划',
          department: '市发展改革委',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',
            status: 1
          },{
            name: '2. 规划年度实施计划;',
            status: 2
          }],
          status: 1
        },{
          task: 'a2：城市国民经济和社会发展规划',
          department: '市自然资源局',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',status: 1
            
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },]
      },{
        // 评分内容
        scoreContent: 'b：制定综合防灾减灾规划、安全生产规划、防震减灾规划、地质灾害防治规划、防洪规划、职业病防治规划、消防规划、道路交通安全管理规划、排水防涝规划等专项规划和年度实施计划;',
  
        // 任务 责任单位 提交材料
        list: [{
          task: 'b1：综合防灾减灾规划和年度实施计划',
          department: '市应急局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 2
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 1
        },{
          task: 'b2：防震减灾规划和年度实施计划',
          department: '市应急管理服务中心',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b3：地质灾害防治规划和年度实施计划',
          department: '市自然资源局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 2
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b4：非城区内防洪规划和年度实施计划',
          department: '市水务局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b5：安全生产规划和年度实施计划',
          department: '市应急局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b6：职业病防治规划和年度实施计划',
          department: '市卫生健康委',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b7：消防规划和年度实施计划',
          department: '市消防救援支队',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b8：道路交通安全管理规划和年度实施计划',
          department: '市公安局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b9：城区内排水防涝规划和年度实施计划',
          department: '市城市管理局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        }]
      }],
    }],
  }, {
    name: '城市安全应急救援(14分)',
    content: [{
      title: '建设项目安全评估论证(2分)',

      tabelHeaderList: [{
        name: '评价内容',
      },{
        name: '任务',
      },{
        name: '责任单位',
      },{
        name: '提交材料',
      },{
        name: '材料状态',
      },{
        name: '评价状态',
      }],

      tabelDetailList: [{
        // 评分内容
        scoreContent: 'a：制定城市国土空间总体规划(城市总体规划)',
  
        // 任务 责任单位 提交材料
        list: [{
          task: 'a1：城市国民经济和社会发展规划',
          department: '市发展改革委',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',
            status: 1
          },{
            name: '2. 规划年度实施计划;',
            status: 2
          }],
          status: 1
        },{
          task: 'a2：城市国民经济和社会发展规划',
          department: '市自然资源局',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',status: 1
            
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },]
      },{
        // 评分内容
        scoreContent: 'b：制定综合防灾减灾规划、安全生产规划、防震减灾规划、地质灾害防治规划、防洪规划、职业病防治规划、消防规划、道路交通安全管理规划、排水防涝规划等专项规划和年度实施计划;',
  
        // 任务 责任单位 提交材料
        list: [{
          task: 'b1：综合防灾减灾规划和年度实施计划',
          department: '市应急局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 2
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 1
        },{
          task: 'b2：防震减灾规划和年度实施计划',
          department: '市应急管理服务中心',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b3：地质灾害防治规划和年度实施计划',
          department: '市自然资源局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 2
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b4：非城区内防洪规划和年度实施计划',
          department: '市水务局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b5：安全生产规划和年度实施计划',
          department: '市应急局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b6：职业病防治规划和年度实施计划',
          department: '市卫生健康委',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b7：消防规划和年度实施计划',
          department: '市消防救援支队',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b8：道路交通安全管理规划和年度实施计划',
          department: '市公安局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b9：城区内排水防涝规划和年度实施计划',
          department: '市城市管理局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        }]
      }],
    },{
      title: '建设项目安全评估论证(2分)',

      tabelHeaderList: [{
        name: '评价内容',
      },{
        name: '任务',
      },{
        name: '责任单位',
      },{
        name: '提交材料',
      },{
        name: '材料状态',
      },{
        name: '评价状态',
      }],

      tabelDetailList: [{
        // 评分内容
        scoreContent: 'a：制定城市国土空间总体规划(城市总体规划)',
  
        // 任务 责任单位 提交材料
        list: [{
          task: 'a1：城市国民经济和社会发展规划',
          department: '市发展改革委',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',
            status: 1
          },{
            name: '2. 规划年度实施计划;',
            status: 2
          }],
          status: 1
        },{
          task: 'a2：城市国民经济和社会发展规划',
          department: '市自然资源局',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',status: 1
            
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },]
      },{
        // 评分内容
        scoreContent: 'b：制定综合防灾减灾规划、安全生产规划、防震减灾规划、地质灾害防治规划、防洪规划、职业病防治规划、消防规划、道路交通安全管理规划、排水防涝规划等专项规划和年度实施计划;',
  
        // 任务 责任单位 提交材料
        list: [{
          task: 'b1：综合防灾减灾规划和年度实施计划',
          department: '市应急局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 2
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 1
        },{
          task: 'b2：防震减灾规划和年度实施计划',
          department: '市应急管理服务中心',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b3：地质灾害防治规划和年度实施计划',
          department: '市自然资源局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 2
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b4：非城区内防洪规划和年度实施计划',
          department: '市水务局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b5：安全生产规划和年度实施计划',
          department: '市应急局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b6：职业病防治规划和年度实施计划',
          department: '市卫生健康委',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b7：消防规划和年度实施计划',
          department: '市消防救援支队',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b8：道路交通安全管理规划和年度实施计划',
          department: '市公安局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b9：城区内排水防涝规划和年度实施计划',
          department: '市城市管理局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        }]
      }],
    }],
  }, {
    name: '城市安全状况(4分)',
    content: [{
      title: '人员密集区域(9分)',

      tabelHeaderList: [{
        name: '评价内容',
      },{
        name: '任务',
      },{
        name: '责任单位',
      },{
        name: '提交材料',
      },{
        name: '材料状态',
      },{
        name: '评价状态',
      }],

      tabelDetailList: [{
        // 评分内容
        scoreContent: 'a：制定城市国土空间总体规划(城市总体规划)',
  
        // 任务 责任单位 提交材料
        list: [{
          task: 'a1：城市国民经济和社会发展规划',
          department: '市发展改革委',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',
            status: 1
          },{
            name: '2. 规划年度实施计划;',
            status: 2
          }],
          status: 1
        },{
          task: 'a2：城市国民经济和社会发展规划',
          department: '市自然资源局',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',status: 1
            
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },]
      },{
        // 评分内容
        scoreContent: 'b：制定综合防灾减灾规划、安全生产规划、防震减灾规划、地质灾害防治规划、防洪规划、职业病防治规划、消防规划、道路交通安全管理规划、排水防涝规划等专项规划和年度实施计划;',
  
        // 任务 责任单位 提交材料
        list: [{
          task: 'b1：综合防灾减灾规划和年度实施计划',
          department: '市应急局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 2
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 1
        },{
          task: 'b2：防震减灾规划和年度实施计划',
          department: '市应急管理服务中心',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b3：地质灾害防治规划和年度实施计划',
          department: '市自然资源局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 2
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b4：非城区内防洪规划和年度实施计划',
          department: '市水务局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b5：安全生产规划和年度实施计划',
          department: '市应急局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b6：职业病防治规划和年度实施计划',
          department: '市卫生健康委',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b7：消防规划和年度实施计划',
          department: '市消防救援支队',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b8：道路交通安全管理规划和年度实施计划',
          department: '市公安局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b9：城区内排水防涝规划和年度实施计划',
          department: '市城市管理局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        }]
      }],
    },{
      title: '建设项目安全评估论证(2分)',

      tabelHeaderList: [{
        name: '评价内容',
      },{
        name: '任务',
      },{
        name: '责任单位',
      },{
        name: '提交材料',
      },{
        name: '材料状态',
      },{
        name: '评价状态',
      }],

      tabelDetailList: [{
        // 评分内容
        scoreContent: 'a：制定城市国土空间总体规划(城市总体规划)',
  
        // 任务 责任单位 提交材料
        list: [{
          task: 'a1：城市国民经济和社会发展规划',
          department: '市发展改革委',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',
            status: 1
          },{
            name: '2. 规划年度实施计划;',
            status: 2
          }],
          status: 1
        },{
          task: 'a2：城市国民经济和社会发展规划',
          department: '市自然资源局',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',status: 1
            
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },]
      },{
        // 评分内容
        scoreContent: 'b：制定综合防灾减灾规划、安全生产规划、防震减灾规划、地质灾害防治规划、防洪规划、职业病防治规划、消防规划、道路交通安全管理规划、排水防涝规划等专项规划和年度实施计划;',
  
        // 任务 责任单位 提交材料
        list: [{
          task: 'b1：综合防灾减灾规划和年度实施计划',
          department: '市应急局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 2
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 1
        },{
          task: 'b2：防震减灾规划和年度实施计划',
          department: '市应急管理服务中心',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b3：地质灾害防治规划和年度实施计划',
          department: '市自然资源局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 2
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b4：非城区内防洪规划和年度实施计划',
          department: '市水务局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b5：安全生产规划和年度实施计划',
          department: '市应急局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b6：职业病防治规划和年度实施计划',
          department: '市卫生健康委',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b7：消防规划和年度实施计划',
          department: '市消防救援支队',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b8：道路交通安全管理规划和年度实施计划',
          department: '市公安局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b9：城区内排水防涝规划和年度实施计划',
          department: '市城市管理局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        }]
      }],
    }],
  }, {
    name: '鼓励项(5分)',
    content: [{
      title: '城市总体规划及防灾减灾等专项规划(2分)',

      tabelHeaderList: [{
        name: '评价内容',
      },{
        name: '任务',
      },{
        name: '责任单位',
      },{
        name: '提交材料',
      },{
        name: '材料状态',
      },{
        name: '评价状态',
      }],

      tabelDetailList: [{
        // 评分内容
        scoreContent: 'a：制定城市国土空间总体规划(城市总体规划)',
  
        // 任务 责任单位 提交材料
        list: [{
          task: 'a1：城市国民经济和社会发展规划',
          department: '市发展改革委',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',
            status: 1
          },{
            name: '2. 规划年度实施计划;',
            status: 2
          }],
          status: 1
        },{
          task: 'a2：城市国民经济和社会发展规划',
          department: '市自然资源局',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',status: 1
            
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },]
      },{
        // 评分内容
        scoreContent: 'b：制定综合防灾减灾规划、安全生产规划、防震减灾规划、地质灾害防治规划、防洪规划、职业病防治规划、消防规划、道路交通安全管理规划、排水防涝规划等专项规划和年度实施计划;',
  
        // 任务 责任单位 提交材料
        list: [{
          task: 'b1：综合防灾减灾规划和年度实施计划',
          department: '市应急局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 2
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 1
        },{
          task: 'b2：防震减灾规划和年度实施计划',
          department: '市应急管理服务中心',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b3：地质灾害防治规划和年度实施计划',
          department: '市自然资源局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 2
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b4：非城区内防洪规划和年度实施计划',
          department: '市水务局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b5：安全生产规划和年度实施计划',
          department: '市应急局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b6：职业病防治规划和年度实施计划',
          department: '市卫生健康委',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b7：消防规划和年度实施计划',
          department: '市消防救援支队',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b8：道路交通安全管理规划和年度实施计划',
          department: '市公安局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b9：城区内排水防涝规划和年度实施计划',
          department: '市城市管理局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        }]
      }],
    },{
      title: '建设项目安全评估论证(2分)',

      tabelHeaderList: [{
        name: '评价内容',
      },{
        name: '任务',
      },{
        name: '责任单位',
      },{
        name: '提交材料',
      },{
        name: '材料状态',
      },{
        name: '评价状态',
      }],

      tabelDetailList: [{
        // 评分内容
        scoreContent: 'a：制定城市国土空间总体规划(城市总体规划)',
  
        // 任务 责任单位 提交材料
        list: [{
          task: 'a1：城市国民经济和社会发展规划',
          department: '市发展改革委',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',
            status: 1
          },{
            name: '2. 规划年度实施计划;',
            status: 2
          }],
          status: 1
        },{
          task: 'a2：城市国民经济和社会发展规划',
          department: '市自然资源局',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',status: 1
            
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },]
      },{
        // 评分内容
        scoreContent: 'b：制定综合防灾减灾规划、安全生产规划、防震减灾规划、地质灾害防治规划、防洪规划、职业病防治规划、消防规划、道路交通安全管理规划、排水防涝规划等专项规划和年度实施计划;',
  
        // 任务 责任单位 提交材料
        list: [{
          task: 'b1：综合防灾减灾规划和年度实施计划',
          department: '市应急局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 2
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 1
        },{
          task: 'b2：防震减灾规划和年度实施计划',
          department: '市应急管理服务中心',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b3：地质灾害防治规划和年度实施计划',
          department: '市自然资源局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 2
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b4：非城区内防洪规划和年度实施计划',
          department: '市水务局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b5：安全生产规划和年度实施计划',
          department: '市应急局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b6：职业病防治规划和年度实施计划',
          department: '市卫生健康委',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b7：消防规划和年度实施计划',
          department: '市消防救援支队',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b8：道路交通安全管理规划和年度实施计划',
          department: '市公安局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        },{
          task: 'b9：城区内排水防涝规划和年度实施计划',
          department: '市城市管理局',
          materialsList: [{
            name: '1. 专项规划文本;',status: 1
          },{
            name: '2. 规划年度实施计划;',status: 1
          }],
          status: 2
        }]
      }],
    }],
  },]
}