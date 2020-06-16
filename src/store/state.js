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
    }, {
      name: '市资源局',
      data: '2020-05-26 13:23:33',
      materials: '规划年度实施计划',
      number: '3'
    }, {
      name: '市应急局',
      data: '2020-05-28 08:25:03',
      materials: '规划年度实施计划',
      number: '2'
    }, {
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
      deductMarksNumber: '1分',
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
        name: '评分状态',
      }],

      tabelDetailList: [{
        // 评分内容

        // 任务 责任单位 提交材料
        list: [{
          task: '1. 城市国土空间总体规划(城市总体规划)未体现综合防灾、公共安全要求的;',

          department: '市发展改革委',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',
            status: 2,
          }, {
            name: '2. 规划年度实施计划;',
            status: 1,
          }],
          status: 2,
          deductMarks: '-0.5',
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
          deductMarks: '-0.5',
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
          task: '1. 建设项目未按照《建设项目安全设施“三同时”监督管理办法》(2010年12月14日原国家安全监管总局令第36号公布,根据2015年11月2日原国家安全监管总局令第77号修正)要求开展安全预评价的',
          department: '市发展改革委',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',
            status: 2
          }, {
            name: '2. 规划年度实施计划;',
            status: 1
          }],
          status: 2,
          deductMarks: '-0.5',
        },]
      }, {
        // 评分内容

        // 任务 责任单位 提交材料
        list: [{
          task: '2. 未按照《地震安全性评价管理条例》(2001年11月15日国务院令第323号公布,根据2019年3月2日国务院令第709号修正)要求开展地震安全性评价的',
          department: '市发展改革委',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',
            status: 2
          }, {
            name: '2. 规划年度实施计划;',
            status: 1
          }],
          status: 2,
          deductMarks: '-0.5',
        },]
      }, {
        // 评分内容

        // 任务 责任单位 提交材料
        list: [{
          task: '3. 未按照《地址灾害防治条例》(国务院令第394号)要求开展地址灾害危险性评估的,未采纳评价(评估)报告建议且无合理说明的',
          department: '市发展改革委',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',
            status: 2
          }, {
            name: '2. 规划年度实施计划;',
            status: 1
          }],
          status: 2,
          deductMarks: '-0.5',
        },]
      },],
    },],
  }, {
    name: '城市安全风险防控<br/>(32分)',
    content: [{
      title: '城市各类设施安全管理办法 ',
      deductMarksNumber: '3.5分',
      allNumber: '4分',

      tabelHeaderList: [{
        name: '任务',
      }, {
        name: '责任单位',
      }, {
        name: '提交材料',
      }, {
        name: '材料状态',
      }, {
        name: '评分状态',
      }],

      tabelDetailList: [{
        // 评分内容

        // 任务 责任单位 提交材料
        list: [{
          task: '1. 未制修订城市高层建筑、大型商业综合体、综合交通枢纽、管线管廊、轨道交通、燃气工程、垃圾填埋场(渣土受纳场)、电梯、游乐设施等城市设施安全管理办法（含行政规范性文件）的;',

          department: '市发展改革委',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',
            status: 2,
          }, {
            name: '2. 规划年度实施计划;',
            status: 1,
          }],
          status: 2,
          deductMarks: '-0.5',
        }]
      },],
    }, {
      title: '市政安全设施 ',
      deductMarksNumber: '2分',
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
          task: '1. 市政消火栓（消防水鹤）未保持完好的，每发现一处扣0.2 分，1 分扣完为止',
          department: '市发改委',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',
            status: 2
          }, {
            name: '2. 规划年度实施计划;',
            status: 1
          }],
          status: 2,
          deductMarks: '-0.5',
        },]
      }, {
        // 评分内容

        // 任务 责任单位 提交材料
        list: [{
          task: '2. 市政供水、供热和燃气老旧管网改造率≤80 的，扣 1 分。注：供水、供热老旧管网指一次、二次网中运行年限 30 年以上或材质落后、管道老化腐蚀脆化严重、存在泄漏、接口渗漏等隐患的老旧管网。燃气老旧管网指使用年限超过 30 年的灰口铸铁管、镀锌钢管（经评估可以继续使用的除外），或公共管网中泄漏或机械接口渗漏、腐蚀脆化严重等问题的老旧管网。改造率在 2017 年排查出的老旧管网基础上计算',
          department: '市燃气局',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',
            status: 2
          }, {
            name: '2. 规划年度实施计划;',
            status: 1
          }],
          status: 2,
          deductMarks: '-0.5',
        },]
      }, {
      },],
    },],
  }, {
    name: '城市安全监督管理<br/>(16分)',
    content: [{
      title: '道路交通安全设施 ',
      deductMarksNumber: '3.5分',
      allNumber: '4分',

      tabelHeaderList: [{
        name: '任务',
      }, {
        name: '责任单位',
      }, {
        name: '提交材料',
      }, {
        name: '材料状态',
      }, {
        name: '评分状态',
      }],

      tabelDetailList: [{
        // 评分内容

        // 任务 责任单位 提交材料
        list: [{
          task: '1. 双向六车道及以上道路未按照《城市道路交通设施设计规范》（GB 50688-2011）要求设置分隔设施的，每发现一处扣0.1分，0.5 分扣完为止',

          department: '市发展改革委',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',
            status: 2,
          }, {
            name: '2. 规划年度实施计划;',
            status: 1,
          }],
          status: 2,
          deductMarks: '-0.5',
        }]
      },],
    }, {
      title: '市政安全设施 ',
      deductMarksNumber: '2分',
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
          task: '1. 中心城区中小学校、幼儿园周边不少于 150 米范围内交通安全设施未按照《中小学与幼儿园校园周边道路交通设施设置规范》（GA/T 1215-2014）要求设置的，每发现一处扣 0.1 分，1 分扣完为止。',
          department: '市教育局',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',
            status: 2
          }, {
            name: '2. 规划年度实施计划;',
            status: 1
          }],
          status: 2,
          deductMarks: '-0.5',
        },]
      }, {
        // 评分内容

        // 任务 责任单位 提交材料
        list: [{
          task: '2. （1）双向六车道及以上道路未按照《城市道路交通设施设计规范》（GB 50688-2011）要求设置分隔设施的，每发现一处扣0.1分，0.5 分扣完为止。',
          department: '市交通局',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',
            status: 2
          }, {
            name: '2. 规划年度实施计划;',
            status: 1
          }],
          status: 2,
          deductMarks: '-0.5',
        },]
      }, {
      },],
    },],
  }, {
    name: '城市安全保障能力<br/>(16分)',
    content: [{
      title: '城市防洪排涝安全设施 ',
      deductMarksNumber: '3.5分',
      allNumber: '4分',

      tabelHeaderList: [{
        name: '任务',
      }, {
        name: '责任单位',
      }, {
        name: '提交材料',
      }, {
        name: '材料状态',
      }, {
        name: '评分状态',
      }],

      tabelDetailList: [{
        // 评分内容

        // 任务 责任单位 提交材料
        list: [{
          task: '1. 城市堤防、河道等防洪工程建设未达到《防洪标准》（GB 50201-2014）、《城市防洪规划规范》（GB 51079-2016）、《城市防洪工程设计规范》（GB/T 50805-2012）等要求的，每发现一处扣0.5 分，1 分扣完为止。',

          department: '市建设局',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',
            status: 2,
          }, {
            name: '2. 规划年度实施计划;',
            status: 1,
          }],
          status: 2,
          deductMarks: '-0.5',
        }]
      },],
    }, {
      title: '市政安全设施 ',
      deductMarksNumber: '2分',
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
          task: '1. 中心城区中小学校、幼儿园周边不少于 150 米范围内交通安全设施未按照《中小学与幼儿园校园周边道路交通设施设置规范》（GA/T 1215-2014）要求设置的，每发现一处扣 0.1 分，1 分扣完为止。',
          department: '市教育局',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',
            status: 2
          }, {
            name: '2. 规划年度实施计划;',
            status: 1
          }],
          status: 2,
          deductMarks: '-0.5',
        },]
      }, {
        // 评分内容

        // 任务 责任单位 提交材料
        list: [{
          task: '2. （1）双向六车道及以上道路未按照《城市道路交通设施设计规范》（GB 50688-2011）要求设置分隔设施的，每发现一处扣0.1分，0.5 分扣完为止。',
          department: '市交通局',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',
            status: 2
          }, {
            name: '2. 规划年度实施计划;',
            status: 1
          }],
          status: 2,
          deductMarks: '-0.5',
        },]
      }, {
      },],
    },],
  }, {
    name: '城市安全应急救援<br/>(14分)',
    content: [{
      title: '城市总体规划及防灾减灾等专项规划 ',
      deductMarksNumber: '1分',
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
        name: '评分状态',
      }],

      tabelDetailList: [{
        // 评分内容

        // 任务 责任单位 提交材料
        list: [{
          task: '1. 城市国土空间总体规划(城市总体规划)未体现综合防灾、公共安全要求的;',

          department: '市发展改革委',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',
            status: 2,
          }, {
            name: '2. 规划年度实施计划;',
            status: 1,
          }],
          status: 2,
          deductMarks: '-0.5',
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
          deductMarks: '-0.5',
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
          task: '1. 建设项目未按照《建设项目安全设施“三同时”监督管理办法》(2010年12月14日原国家安全监管总局令第36号公布,根据2015年11月2日原国家安全监管总局令第77号修正)要求开展安全预评价的',
          department: '市发展改革委',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',
            status: 2
          }, {
            name: '2. 规划年度实施计划;',
            status: 1
          }],
          status: 2,
          deductMarks: '-0.5',
        },]
      }, {
        // 评分内容

        // 任务 责任单位 提交材料
        list: [{
          task: '2. 未按照《地震安全性评价管理条例》(2001年11月15日国务院令第323号公布,根据2019年3月2日国务院令第709号修正)要求开展地震安全性评价的',
          department: '市发展改革委',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',
            status: 2
          }, {
            name: '2. 规划年度实施计划;',
            status: 1
          }],
          status: 2,
          deductMarks: '-0.5',
        },]
      }, {
        // 评分内容

        // 任务 责任单位 提交材料
        list: [{
          task: '3. 未按照《地址灾害防治条例》(国务院令第394号)要求开展地址灾害危险性评估的,未采纳评价(评估)报告建议且无合理说明的',
          department: '市发展改革委',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',
            status: 2
          }, {
            name: '2. 规划年度实施计划;',
            status: 1
          }],
          status: 2,
          deductMarks: '-0.5',
        },]
      },],
    },],
  }, {
    name: '城市安全状况<br/>(4分)',
    content: [{
      title: '城市各类设施安全管理办法 ',
      deductMarksNumber: '3.5分',
      allNumber: '4分',

      tabelHeaderList: [{
        name: '任务',
      }, {
        name: '责任单位',
      }, {
        name: '提交材料',
      }, {
        name: '材料状态',
      }, {
        name: '评分状态',
      }],

      tabelDetailList: [{
        // 评分内容

        // 任务 责任单位 提交材料
        list: [{
          task: '1. 未制修订城市高层建筑、大型商业综合体、综合交通枢纽、管线管廊、轨道交通、燃气工程、垃圾填埋场(渣土受纳场)、电梯、游乐设施等城市设施安全管理办法（含行政规范性文件）的;',

          department: '市发展改革委',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',
            status: 2,
          }, {
            name: '2. 规划年度实施计划;',
            status: 1,
          }],
          status: 2,
          deductMarks: '-0.5',
        }]
      },],
    }, {
      title: '市政安全设施 ',
      deductMarksNumber: '2分',
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
          task: '1. 市政消火栓（消防水鹤）未保持完好的，每发现一处扣0.2 分，1 分扣完为止',
          department: '市发改委',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',
            status: 2
          }, {
            name: '2. 规划年度实施计划;',
            status: 1
          }],
          status: 2,
          deductMarks: '-0.5',
        },]
      }, {
        // 评分内容

        // 任务 责任单位 提交材料
        list: [{
          task: '2. 市政供水、供热和燃气老旧管网改造率≤80 的，扣 1 分。注：供水、供热老旧管网指一次、二次网中运行年限 30 年以上或材质落后、管道老化腐蚀脆化严重、存在泄漏、接口渗漏等隐患的老旧管网。燃气老旧管网指使用年限超过 30 年的灰口铸铁管、镀锌钢管（经评估可以继续使用的除外），或公共管网中泄漏或机械接口渗漏、腐蚀脆化严重等问题的老旧管网。改造率在 2017 年排查出的老旧管网基础上计算',
          department: '市燃气局',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',
            status: 2
          }, {
            name: '2. 规划年度实施计划;',
            status: 1
          }],
          status: 2,
          deductMarks: '-0.5',
        },]
      }, {
      },],
    },],
  }, {
    name: '鼓励项<br/>(5分)',
    content: [{
      title: '城市防洪排涝安全设施 ',
      deductMarksNumber: '3.5分',
      allNumber: '4分',

      tabelHeaderList: [{
        name: '任务',
      }, {
        name: '责任单位',
      }, {
        name: '提交材料',
      }, {
        name: '材料状态',
      }, {
        name: '评分状态',
      }],

      tabelDetailList: [{
        // 评分内容

        // 任务 责任单位 提交材料
        list: [{
          task: '1. 城市堤防、河道等防洪工程建设未达到《防洪标准》（GB 50201-2014）、《城市防洪规划规范》（GB 51079-2016）、《城市防洪工程设计规范》（GB/T 50805-2012）等要求的，每发现一处扣0.5 分，1 分扣完为止。',

          department: '市建设局',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',
            status: 2,
          }, {
            name: '2. 规划年度实施计划;',
            status: 1,
          }],
          status: 2,
          deductMarks: '-0.5',
        }]
      },],
    }, {
      title: '市政安全设施 ',
      deductMarksNumber: '2分',
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
          task: '1. 中心城区中小学校、幼儿园周边不少于 150 米范围内交通安全设施未按照《中小学与幼儿园校园周边道路交通设施设置规范》（GA/T 1215-2014）要求设置的，每发现一处扣 0.1 分，1 分扣完为止。',
          department: '市教育局',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',
            status: 2
          }, {
            name: '2. 规划年度实施计划;',
            status: 1
          }],
          status: 2,
          deductMarks: '-0.5',
        },]
      }, {
        // 评分内容

        // 任务 责任单位 提交材料
        list: [{
          task: '2. （1）双向六车道及以上道路未按照《城市道路交通设施设计规范》（GB 50688-2011）要求设置分隔设施的，每发现一处扣0.1分，0.5 分扣完为止。',
          department: '市交通局',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',
            status: 2
          }, {
            name: '2. 规划年度实施计划;',
            status: 1
          }],
          status: 2,
          deductMarks: '-0.5',
        },]
      }, {
      },],
    },],
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
    content: [{
      title: '城市各类设施安全管理办法 ',
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
          task: '1. 未制修订城市高层建筑、大型商业综合体、综合交通枢纽、管线管廊、轨道交通、燃气工程、垃圾填埋场(渣土受纳场)、电梯、游乐设施等城市设施安全管理办法（含行政规范性文件）的;',
          department: '市发展改革委',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',
            status: 1
          }, {
            name: '2. 规划年度实施计划;',
            status: 2
          }],
          status: 1
        }]
      },],
    }, {
      title: '市政安全设施',
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
          task: '1. 市政消火栓（消防水鹤）未保持完好的，每发现一处扣0.2 分，1 分扣完为止',
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
    name: '城市安全监督管理<br/>(16分)',
    content: [{
      title: '道路交通安全设施',
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
          task: '1. 双向六车道及以上道路未按照《城市道路交通设施设计规范》（GB 50688-2011）要求设置分隔设施的，每发现一处扣0.1分，0.5 分扣完为止;',
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
    }, {
      title: '市政安全设施',
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
          task: '1. 中心城区中小学校、幼儿园周边不少于 150 米范围内交通安全设施未按照《中小学与幼儿园校园周边道路交通设施设置规范》（GA/T 1215-2014）要求设置的，每发现一处扣 0.1 分，1 分扣完为止。',
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
    name: '城市安全保障能力<br/>(16分)',
    content: [{
      title: '城市防洪排涝安全设施',
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
          task: '1. 城市堤防、河道等防洪工程建设未达到《防洪标准》（GB 50201-2014）、《城市防洪规划规范》（GB 51079-2016）、《城市防洪工程设计规范》（GB/T 50805-2012）等要求的，每发现一处扣0.5 分，1 分扣完为止。',
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
    }, {
      title: '市政安全设施',
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
          task: '1. 中心城区中小学校、幼儿园周边不少于 150 米范围内交通安全设施未按照《中小学与幼儿园校园周边道路交通设施设置规范》（GA/T 1215-2014）要求设置的，每发现一处扣 0.1 分，1 分扣完为止。',
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
    name: '城市安全应急救援<br/>(14分)',
    content: [{
      title: '城市各类设施安全管理办法 ',
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
          task: '1. 未制修订城市高层建筑、大型商业综合体、综合交通枢纽、管线管廊、轨道交通、燃气工程、垃圾填埋场(渣土受纳场)、电梯、游乐设施等城市设施安全管理办法（含行政规范性文件）的;',
          department: '市发展改革委',
          materialsList: [{
            name: '1. 专项规划文本，并体现综合防灾、公共安全要求;',
            status: 1
          }, {
            name: '2. 规划年度实施计划;',
            status: 2
          }],
          status: 1
        }]
      },],
    }, {
      title: '市政安全设施',
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
          task: '1. 市政消火栓（消防水鹤）未保持完好的，每发现一处扣0.2 分，1 分扣完为止',
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
    name: '城市安全状况<br/>(4分)',
    content: [{
      title: '道路交通安全设施',
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
          task: '1. 双向六车道及以上道路未按照《城市道路交通设施设计规范》（GB 50688-2011）要求设置分隔设施的，每发现一处扣0.1分，0.5 分扣完为止;',
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
    }, {
      title: '市政安全设施',
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
          task: '1. 中心城区中小学校、幼儿园周边不少于 150 米范围内交通安全设施未按照《中小学与幼儿园校园周边道路交通设施设置规范》（GA/T 1215-2014）要求设置的，每发现一处扣 0.1 分，1 分扣完为止。',
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
    name: '鼓励项<br/>(5分)',
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
        department: '市发展改革委',
        evaluationList: [{
          name: '专项规划文本，并体现综合防灾、公共安全要求;',
        }, {
          name: '规划年度实施计划;',
        }]
      }, {
        task: '综合防灾减灾规划和年度实施计划',
        department: '市委编办',
        evaluationList: [{
          name: '专项规划文本，并体现综合防灾、公共安全要求;',
        }, {
          name: '规划年度实施计划;',
        }]
      }, {
        task: '防震减灾规划和年度实施计划',
        department: '市人防办',
        evaluationList: [{
          name: '专项规划文本，并体现综合防灾、公共安全要求;',
        }, {
          name: '规划年度实施计划;',
        }]
      }]


    },],
  }, {
    name: '城市安全风险防控<br>(32分)',
    content: [{
      title: '城市各类设施安全管理办法',
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
        task: '防震减灾规划和年度实施计划',
        department: '市发展改革委',
        evaluationList: [{
          name: '专项规划文本，并体现综合防灾、公共安全要求;',
        }, {
          name: '规划年度实施计划;',
        }]
      }, {
        task: '综合防灾减灾规划和年度实施计划',
        department: '市委编办',
        evaluationList: [{
          name: '专项规划文本，并体现综合防灾、公共安全要求;',
        }, {
          name: '规划年度实施计划;',
        }]
      }, {
        task: '国土空间总体规划（城市总体规划）',
        department: '市人防办',
        evaluationList: [{
          name: '专项规划文本，并体现综合防灾、公共安全要求;',
        }, {
          name: '规划年度实施计划;',
        }]
      }, {
        task: '建设项目按规定开展安全预评价（设立安全评价）',
        department: '市委宣传部',
        evaluationList: [{
          name: '专项规划文本，并体现综合防灾、公共安全要求;',
        }, {
          name: '规划年度实施计划;',
        }]
      }]


    }, {
      title: '市政安全设施',
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
        task: '防震减灾规划和年度实施计划',
        department: '市民政局',
        evaluationList: [{
          name: '专项规划文本，并体现综合防灾、公共安全要求;',
        }, {
          name: '规划年度实施计划;',
        }]
      }, {
        task: '综合防灾减灾规划和年度实施计划',
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
        task: '城市国民经济和社会发展规划',
        department: '市人防办',
        evaluationList: [{
          name: '专项规划文本，并体现综合防灾、公共安全要求;',
        }, {
          name: '规划年度实施计划;',
        }]
      }]


    },],
  }, {
    name: '城市安全监督管理<br>(16分)',
    content: [{
      title: '城市防洪排涝安全设施',
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
        department: '市发展改革委',
        evaluationList: [{
          name: '专项规划文本，并体现综合防灾、公共安全要求;',
        }, {
          name: '规划年度实施计划;',
        }]
      }, {
        task: '综合防灾减灾规划和年度实施计划',
        department: '市委编办',
        evaluationList: [{
          name: '专项规划文本，并体现综合防灾、公共安全要求;',
        }, {
          name: '规划年度实施计划;',
        }]
      }, {
        task: '防震减灾规划和年度实施计划',
        department: '市人防办',
        evaluationList: [{
          name: '专项规划文本，并体现综合防灾、公共安全要求;',
        }, {
          name: '规划年度实施计划;',
        }]
      }]


    },],
  }, {
    name: '城市安全保障能力<br>(16分)',
    content: [{
      title: '城市禁止类产业目录',
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
        task: '防震减灾规划和年度实施计划',
        department: '市发展改革委',
        evaluationList: [{
          name: '专项规划文本，并体现综合防灾、公共安全要求;',
        }, {
          name: '规划年度实施计划;',
        }]
      }, {
        task: '综合防灾减灾规划和年度实施计划',
        department: '市委编办',
        evaluationList: [{
          name: '专项规划文本，并体现综合防灾、公共安全要求;',
        }, {
          name: '规划年度实施计划;',
        }]
      }, {
        task: '国土空间总体规划（城市总体规划）',
        department: '市人防办',
        evaluationList: [{
          name: '专项规划文本，并体现综合防灾、公共安全要求;',
        }, {
          name: '规划年度实施计划;',
        }]
      }, {
        task: '建设项目按规定开展安全预评价（设立安全评价）',
        department: '市委宣传部',
        evaluationList: [{
          name: '专项规划文本，并体现综合防灾、公共安全要求;',
        }, {
          name: '规划年度实施计划;',
        }]
      }]


    }, {
      title: '市政安全设施',
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
        task: '防震减灾规划和年度实施计划',
        department: '市民政局',
        evaluationList: [{
          name: '专项规划文本，并体现综合防灾、公共安全要求;',
        }, {
          name: '规划年度实施计划;',
        }]
      }, {
        task: '综合防灾减灾规划和年度实施计划',
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
        task: '城市国民经济和社会发展规划',
        department: '市人防办',
        evaluationList: [{
          name: '专项规划文本，并体现综合防灾、公共安全要求;',
        }, {
          name: '规划年度实施计划;',
        }]
      }]


    },],
  }, {
    name: '城市安全应急救援<br>(14分)',
    content: [{
      title: '高危行业搬迁改造',
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
        department: '市发展改革委',
        evaluationList: [{
          name: '专项规划文本，并体现综合防灾、公共安全要求;',
        }, {
          name: '规划年度实施计划;',
        }]
      }, {
        task: '综合防灾减灾规划和年度实施计划',
        department: '市委编办',
        evaluationList: [{
          name: '专项规划文本，并体现综合防灾、公共安全要求;',
        }, {
          name: '规划年度实施计划;',
        }]
      }, {
        task: '防震减灾规划和年度实施计划',
        department: '市人防办',
        evaluationList: [{
          name: '专项规划文本，并体现综合防灾、公共安全要求;',
        }, {
          name: '规划年度实施计划;',
        }]
      }]


    },],
  }, {
    name: '城市安全状况<br>(4分)',
    content: [{
      title: '危险化学品企业运行安全风险',
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
        task: '防震减灾规划和年度实施计划',
        department: '市发展改革委',
        evaluationList: [{
          name: '专项规划文本，并体现综合防灾、公共安全要求;',
        }, {
          name: '规划年度实施计划;',
        }]
      }, {
        task: '综合防灾减灾规划和年度实施计划',
        department: '市委编办',
        evaluationList: [{
          name: '专项规划文本，并体现综合防灾、公共安全要求;',
        }, {
          name: '规划年度实施计划;',
        }]
      }, {
        task: '国土空间总体规划（城市总体规划）',
        department: '市人防办',
        evaluationList: [{
          name: '专项规划文本，并体现综合防灾、公共安全要求;',
        }, {
          name: '规划年度实施计划;',
        }]
      }, {
        task: '建设项目按规定开展安全预评价（设立安全评价）',
        department: '市委宣传部',
        evaluationList: [{
          name: '专项规划文本，并体现综合防灾、公共安全要求;',
        }, {
          name: '规划年度实施计划;',
        }]
      }]


    }, {
      title: '市政安全设施',
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
        task: '防震减灾规划和年度实施计划',
        department: '市民政局',
        evaluationList: [{
          name: '专项规划文本，并体现综合防灾、公共安全要求;',
        }, {
          name: '规划年度实施计划;',
        }]
      }, {
        task: '综合防灾减灾规划和年度实施计划',
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
        task: '城市国民经济和社会发展规划',
        department: '市人防办',
        evaluationList: [{
          name: '专项规划文本，并体现综合防灾、公共安全要求;',
        }, {
          name: '规划年度实施计划;',
        }]
      }]


    },],
  }, {
    name: '鼓励项<br>(5分)',
    content: [{
      title: '尾矿库、渣土受纳场运行安全风险',
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
        department: '市发展改革委',
        evaluationList: [{
          name: '专项规划文本，并体现综合防灾、公共安全要求;',
        }, {
          name: '规划年度实施计划;',
        }]
      }, {
        task: '综合防灾减灾规划和年度实施计划',
        department: '市委编办',
        evaluationList: [{
          name: '专项规划文本，并体现综合防灾、公共安全要求;',
        }, {
          name: '规划年度实施计划;',
        }]
      }, {
        task: '防震减灾规划和年度实施计划',
        department: '市人防办',
        evaluationList: [{
          name: '专项规划文本，并体现综合防灾、公共安全要求;',
        }, {
          name: '规划年度实施计划;',
        }]
      }]


    },],
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
      organizationPassword: 'sfzggw123',
      id: 1,
    }, {
      organizationName: '市委组织部',
      organizationNumber: '002',
      organizationUsername: 'swzzb',
      organizationPassword: 'swzzb123',
      id: 2,
    }, {
      organizationName: '市委政法委',
      organizationNumber: '003',
      organizationUsername: 'swzfw',
      organizationPassword: 'swzfw123',
      id: 3
    }, {
      organizationName: '市供电公司',
      organizationNumber: '004',
      organizationUsername: 'sgdgs',
      organizationPassword: 'sgdgs123',
      id: 4
    }, {
      organizationName: '市人防办',
      organizationNumber: '005',
      organizationUsername: 'srfb',
      organizationPassword: 'srfb123',
      id: 5
    }, {
      organizationName: '市气象局',
      organizationNumber: '006',
      organizationUsername: 'sqxj',
      organizationPassword: 'sqxj123',
      id: 6
    }, {
      organizationName: '杭报集团',
      organizationNumber: '007',
      organizationUsername: 'hbjt',
      organizationPassword: 'hbjt123',
      id: 7
    }, {
      organizationName: '市建委',
      organizationNumber: '008',
      organizationUsername: 'sjw',
      organizationPassword: 'sjw123',
      id: 8
    }, {
      organizationName: '市司法局',
      organizationNumber: '009',
      organizationUsername: 'ssfj',
      organizationPassword: 'ssfj123',
      id: 9
    }, {
      organizationName: '市气象局',
      organizationNumber: '0010',
      organizationUsername: 'sqxj',
      organizationPassword: 'sqxj123',
      id: 10
    }]
  },


  // 组织机构下拉框
  organizationSelectList: [
    {
      id: 1,
      value: '市发展改革委',
      label: "市发展改革委"
    },
    {
      id: 2,
      value: "市委组织部",
      label: "市委组织部"
    },
    {
      id: 3,
      value: "市委政法委",
      label: "市委政法委"
    },
    {
      id: 4,
      value: "市供电公司",
      label: "市供电公司"
    },
    {
      id: 5,
      value: "市人防办",
      label: "市人防办"
    },
    {
      id: 6,
      value: "市气象局",
      label: "市气象局"
    },{
      id: 7,
      value: "杭报集团",
      label: "杭报集团"
    },{
      id: 8,
      value: "市建委",
      label: "市建委"
    },{
      id: 9,
      value: "市司法局",
      label: "市司法局"
    },{
      id: 10,
      value: "市气象局",
      label: "市气象局"
    },
  ],

}