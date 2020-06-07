export default {
  // vuex
  vuexState: 'vuex',
  collapse: false,
  userFlag: true,
  leftNavList: [{
    name: '综合治理平台',
    childrenList: [{
      name: ''
    }],
  }],
  // 首页

  homeList: [{
    name: '业务平台',
    type: 'businessPlatform'
  }, {
    name: '评价日志',
    type: 'evaluation'
  }, {
    name: '系统得分情况',
    type: 'score'
  }, {
    name: '单位丢分情况',
    type: 'dropPoints'
  }],

  // 首页 - 评价日志
  evaluationList: {
    tableHeaderList: [{
      name: '所属部门'
    }, {
      name: '评价时间'
    }, {
      name: '上传材料'
    }, {
      name: '评价得分'
    }],

    tabelDetailList: [{
      name: '市发展改革委',
      data: '2020-05-25 12:05:03',
      materials: '规划年度实施计划',
      number: '1' 
    },{
      name: '市资源局',
      data: '2020-05-26 13:23:33',
      materials: '规划年度实施计划',
      number: '3' 
    },{
      name: '市应急局',
      data: '2020-05-28 08:25:03',
      materials: '规划年度实施计划',
      number: '2' 
    },{
      name: '市应急资源管理中心',
      data: '2020-05-25 12:05:03',
      materials: '规划年度实施计划',
      number: '1' 
    }]
},




  // 城市自评
  evaluateList: [{
    name: '城市安全源头治理<br/>(18分)',
    content: [{
      title: '城市总体规划及防灾减灾等专项规划 ',
      deductMarksNumber: '0.5分',
      allNumber: '2分',

      tabelHeaderList: [{
        name: '任务',
      }, {
        name: '责任单位',
      }, {
        name: '提交材料',
      }, {
        name: '材料状态',
      }, {
        name: '评分',
      }],

      tabelDetailList: [{
        // 评分内容

        // 任务 责任单位 提交材料
        list: [{
          task: '1. 城市国土空间总体规划(城市总体规划)未体现综合防灾、公共安全要求的;',

          department: '市发展改革委',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',
            status: 2
          }, {
            name: '2. 规划年度实施计划;',
            status: 1
          }],
          deductMarks: '扣 0.5分',
          status: 2,
        }, {
          task: '2. 未制定综合防灾减灾规划、安全生产规划、防震减灾规划、地质灾害防治规划、防洪规划、职业病防治规划、消防规划、道路交通安全管理规划、排水防涝规划等专项规划和年度实施计划的',
          department: '市自然资源局',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',
            status: 2

          }, {
            name: '2. 规划年度实施计划;',
            status: 1
          }],
          status: 2,
          deductMarks: '扣 1分',
        },]
      },],
    }, {
      title: '建设项目安全评估论证 ',
      deductMarksNumber: '1.5分',
      allNumber: '3分',

      tabelHeaderList: [{
        name: '任务',
      }, {
        name: '责任单位',
      }, {
        name: '提交材料',
      }, {
        name: '材料状态',
      }, {
        name: '评价状态',
      }],

      tabelDetailList: [{
        // 评分内容

        // 任务 责任单位 提交材料
        list: [{
          task: '1. 建设项目未按照《建设项目安全设施“三同时”监督管理办法》(2010年12月14日原国家安全监管总局令第36号公布,根据2015年11月2日原国家安全监管总局令第77号修正)要求开展安全预评价的,未按照《地震安全性评价管理条例》(2001年11月15日国务院令第323号公布,根据2019年3月2日国务院令第709号修正)要求开展地震安全性评价的,未按照《地址灾害防治条例》(国务院令第394号)要求开展地址灾害危险性评估的,未采纳评价(评估)报告建议且无合理说明的',
          department: '市发展改革委',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',
            status: 2
          }, {
            name: '2. 规划年度实施计划;',
            status: 1
          }],
          status: 2,
          deductMarks: '扣 1.5分',
        },]
      },],
    },],
  }, {
    name: '城市安全风险防控<br/>(32分)',

  }, {
    name: '城市安全监督管理<br/>(16分)',

  }, {
    name: '城市安全保障能力<br/>(16分)',

  }, {
    name: '城市安全应急救援<br/>(14分)',

  }, {
    name: '城市安全状况<br/>(4分)',

  }, {
    name: '鼓励项<br/>(5分)',

  },],






  // 材料上传
  dataEvaluateList: [{
    name: '城市安全源头治理<br/>(18分)',

    content: [{
      title: '城市总体规划及防灾减灾等专项规划',
      allNumber: '2分',
      tabelHeaderList: [{
        name: '任务',
      }, {
        name: '提交材料',
      }, {
        name: '操作'
      }],

      tabelDetailList: [{
        // 评分内容
        scoreContent: 'a：制定城市国土空间总体规划(城市总体规划)',

        // 任务 责任单位 提交材料
        list: [{
          task: '1. 城市国土空间总体规划(城市总体规划)未体现综合防灾、公共安全要求的;',
          department: '市发展改革委',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',
            status: 1
          }, {
            name: '2. 规划年度实施计划;',
            status: 2
          }],
          status: 1
        }, {
          task: '2. 未制定综合防灾减灾规划、安全生产规划、防震减灾规划、地质灾害防治规划、防洪规划、职业病防治规划、消防规划、道路交通安全管理规划、排水防涝规划等专项规划和年度实施计划的',
          department: '市自然资源局',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',
            status: 1

          }, {
            name: '2. 规划年度实施计划;',
            status: 1
          }],
          status: 2
        },]
      },],
    }, {
      title: '建设项目安全评估论证',
      allNumber: '2分',
      tabelHeaderList: [{
        name: '任务',
      }, {
        name: '提交材料',
      }, {
        name: '操作'
      }],

      tabelDetailList: [{
        // 评分内容
        scoreContent: 'a：制定城市国土空间总体规划(城市总体规划)',

        // 任务 责任单位 提交材料
        list: [{
          task: '1. 建设项目未按照《建设项目安全设施“三同时”监督管理办法》(2010年12月14日原国家安全监管总局令第36号公布,根据2015年11月2日原国家安全监管总局令第77号修正)要求开展安全预评价的,未按照《地震安全性评价管理条例》(2001年11月15日国务院令第323号公布,根据2019年3月2日国务院令第709号修正)要求开展地震安全性评价的,未按照《地址灾害防治条例》(国务院令第394号)要求开展地址灾害危险性评估的,未采纳评价(评估)报告建议且无合理说明的',
          department: '市发展改革委',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',
            status: 1
          }, {
            name: '2. 规划年度实施计划;',
            status: 2
          }],
          status: 1
        },]
      },],
    }],
  }, {
    name: '城市安全风险防控<br/>(32分)',

  }, {
    name: '城市安全监督管理<br/>(16分)',

  }, {
    name: '城市安全保障能力<br/>(16分)',
  }, {
    name: '城市安全应急救援<br/>(14分)',
  }, {
    name: '城市安全状况<br/>(4分)',
  }, {
    name: '鼓励项<br/>(5分)',
  },],







  // 任务分派
  taskList: [{
    name: '城市安全源头治理<br>(18分)',
    content: [{
      title: '城市总体规划及防灾减灾等专项规划',
      allNumber: '2分',
      tabelHeaderList: [{
        name: '任务',
      }, {
        name: '责任单位',
      }, {
        name: '提交材料',
      }, {
        name: '操作',
      }],


      tabelDetailList: [{
        task: '城市国民经济和社会发展规划',
        department: '市发展改革委',
        evaluationList: [{
          name: '专项规划文本，并体现综合防灾、公共安全要求;',
        }, {
          name: '规划年度实施计划;',
        }]
      }, {
        task: '国土空间总体规划（城市总体规划）',
        department: '市委编办',
        evaluationList: [{
          name: '专项规划文本，并体现综合防灾、公共安全要求;',
        }, {
          name: '规划年度实施计划;',
        }]
      }, {
        task: '综合防灾减灾规划和年度实施计划',
        department: '市人防办',
        evaluationList: [{
          name: '专项规划文本，并体现综合防灾、公共安全要求;',
        }, {
          name: '规划年度实施计划;',
        }]
      }, {
        task: '防震减灾规划和年度实施计划',
        department: '市委宣传部',
        evaluationList: [{
          name: '专项规划文本，并体现综合防灾、公共安全要求;',
        }, {
          name: '规划年度实施计划;',
        }]
      }]


    }, {
      title: '建设项目安全评估论证',
      allNumber: '2分',
      tabelHeaderList: [{
        name: '任务',
      }, {
        name: '责任单位',
      }, {
        name: '提交材料',
      }, {
        name: '操作',
      }],


      tabelDetailList: [{
        task: '建设项目按规定开展安全预评价（设立安全评价）',
        department: '市民政局',
        evaluationList: [{
          name: '专项规划文本，并体现综合防灾、公共安全要求;',
        }, {
          name: '规划年度实施计划;',
        }]
      }, {
        task: '国土空间总体规划（城市总体规划）',
        department: '市公安局',
        evaluationList: [{
          name: '专项规划文本，并体现综合防灾、公共安全要求;',
        }, {
          name: '规划年度实施计划;',
        }]
      }, {
        task: '综合防灾减灾规划和年度实施计划',
        department: '市财政局',
        evaluationList: [{
          name: '专项规划文本，并体现综合防灾、公共安全要求;',
        }, {
          name: '规划年度实施计划;',
        }]
      }, {
        task: '防震减灾规划和年度实施计划',
        department: '市国资委',
        evaluationList: [{
          name: '专项规划文本，并体现综合防灾、公共安全要求;',
        }, {
          name: '规划年度实施计划;',
        }]
      }]


    },],
  }, {
    name: '城市安全风险防控<br>(32分)',
  }, {
    name: '城市安全监督管理<br>(16分)',

  }, {
    name: '城市安全保障能力<br>(16分)',

  }, {
    name: '城市安全应急救援<br>(14分)',

  }, {
    name: '城市安全状况<br>(4分)',
  }, {
    name: '鼓励项<br>(5分)',
  },],



  // 组织机构
  organization: {
    tableHeader: [{
      name: '序号'
    }, {
      name: '组织名称'
    }, {
      name: '组织编号'
    }, {
      name: '账号'
    }, {
      name: '密码'
    }, {
      name: '操作'
    }],


    tabelDetailList: [{
      organizationName: '市发展改革委',
      organizationNumber: '001',
      organizationUsername: 'sfzggw',
      organizationPassword: 'sfzggw123'
    }, {
      organizationName: '市委组织部',
      organizationNumber: '002',
      organizationUsername: 'swzzb',
      organizationPassword: 'swzzb123'
    }, {
      organizationName: '市委政法委',
      organizationNumber: '003',
      organizationUsername: 'swzfw',
      organizationPassword: 'swzfw123'
    }, {
      organizationName: '市发展改革委',
      organizationNumber: '004',
      organizationUsername: 'sfzggw',
      organizationPassword: 'sfzggw123'
    }, {
      organizationName: '市教育局',
      organizationNumber: '005',
      organizationUsername: 'sjyj',
      organizationPassword: 'sjyj123'
    }]
  }


}