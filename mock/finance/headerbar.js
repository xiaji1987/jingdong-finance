const headerbar = {
  url: /\/api\/finance\/headerbar/,
  type: 'get',
  response: {
    code: 200,
    data: {
      headerbar: {
        // Img: {
        //   src: "http://jr.jd.com/",
        //   imgSrc: "http://storage.360buyimg.com/base/images/jdjr-logo/logo-jr-r.png?20181203"
        // },
        menu: [
          {
            src: "http://jr.jd.com/",
            titleName: "首页"
          },
          {
            src: "http://licai.jd.com",
            titleName: "财富",
            list: [
              {
                title: "财富精选",
                itemList: [
                  {
                    title: "财富首页",
                    src: "http://licai.jd.com/"
                  },
                  {
                    title: "京东小金库",
                    src: "http://trade.jr.jd.com/myxjk/jrbincome.action"
                  }
                ]
              },
              {
                title: "稳健理财",
                itemList: [
                  {
                    title: "小白精选",
                    src: "http://dq.jd.com/index_new"
                  }
                ]
              },
              {
                title: "基金理财",
                itemList: [
                  {
                    title: "基金超市",
                    src: "http://fund.jd.com"
                  },
                  {
                    title: "基金定投",
                    src: "http://trade.jr.jd.com/jjdt/index.action"
                  },{
                    title: "小白基金",
                    src: "http://fundh5.jd.com/pc/blankfd/index.html"
                  }
                ]
              },
              {
                title: "特色产品",
                itemList: [
                  {
                    title: "京东黄金",
                    src: "http://www.jdjygold.com/product/index.htm"
                  }
                ]
              },
            ],
            img: [{
              src: "http://jrdc.jd.com/dh/nc?keyStr=qIqWFuBhENxsf6bMsVhrNx9JSTLHhmcvHdxogcQjtGQDvLV9tJrk5Q%2FkwSLNbmDitwON8KBU4q%2BqtPz%2FaMu0G%2BjkqnBC3GetMzORcBMWzNwKIdFu%2F7icKg%3D%3D&to=http://fund.jd.com/",
              imgSrc: "http://img30.360buyimg.com/darkhouse/jfs/t6073/95/9176699893/67126/c7e1ba12/59914c93N4f519dbb.png"
            }]
          },
          {
            src: "http://z.jd.com",
            titleName: "众筹",
            list: [
              {
                title: "产品众筹",
                itemList: [
                  {
                    title: "众筹优选",
                    src: "http://z.jd.com/sceneIndex.html?from=header"
                  },
                  {
                    title: "发起项目",
                    src: "http://trade-z.jd.com/funding/agreement.action"
                  }
                ]
              },
              {
                title: "众筹分类",
                itemList: [
                  {
                    title: "科技",
                    src: "http://z.jd.com/bigger/search.html?categoryId=10&from=header"
                  },
                  {
                    title: "家电",
                    src: "http://z.jd.com/bigger/search.html?categoryId=18&from=header"
                  },
                  {
                    title: "美食",
                    src: "http://z.jd.com/bigger/search.html?categoryId=36&from=header"
                  },
                  {
                    title: "美学",
                    src: "http://z.jd.com/bigger/search.html?categoryId=12&from=header"
                  },
                  {
                    title: "文化",
                    src: "http://z.jd.com/bigger/search.html?categoryId=38&from=header"
                  },
                  {
                    title: "扶贫",
                    src: "http://z.jd.com/bigger/search.html?categoryId=13&from=header"
                  }
                ]
              },
              {
                title: "东家",
                itemList: [
                  {
                    title: "东家精选",
                    src: "http://dj.jd.com/"
                  },
                  {
                    title: "我要投资",
                    src: "http://dj.jd.com/search.html?projectModel=0"
                  }
                ]
              },
              {
                title: "互动尝鲜",
                itemList: [
                  {
                    title: "众筹社区",
                    src: "http://zbbs.jd.com/?from=header"
                  },
                  {
                    title: "众测社区",
                    src: "http://pingce.jd.com/index.html?from=header"
                  }
                ]
              },
              {
                title: "众创生态",
                itemList: [
                  {
                    title: "千树资本",
                    src: "http://y.jd.com/bsyPlan"
                  },
                  {
                    title: "创业服务",
                    src: "http://y.jd.com"
                  },
                  {
                    title: "众创学院",
                    src: "http://y.jd.com/zcCollege"
                  }
                ]
              }
            ],
            img: [{
              src: "http://jrdc.jd.com/dh/nc?keyStr=qIqWFuBhENx5M1O3CJM3Hh9JSTLHhmcvHdxogcQjtGQDvLV9tJrk5Q%2FkwSLNbmDi8%2FyoE8GgxE6qtPz%2FaMu0G%2BoAYZVvNnotDrE%2Bry5c03v0sHQUMQnlfv35P8WV6YVMxPV33hu%2BAo8%3D&to=https://z.jd.com/sceneIndex.html",
              imgSrc: "http://img30.360buyimg.com/darkhouse/jfs/t26437/229/2069921304/26452/db8937ab/5bf7cdd2Necdb73ef.jpg"
            }]
          },
          {
            src: "http://bx.tjjt360.com/",
            titleName: "保险",
            list: [
              {
                title: "保险精选",
                itemList: [
                  {
                    title: "保险首页",
                    src: "http://bx.tjjt360.com/"
                  }
                ]
              },
              {
                title: "车险",
                itemList: [
                  {
                    title: "车险首页",
                    src: "http://bx.tjjt360.com/vehicle"
                  }
                ]
              },
              {
                title: "意外",
                itemList: [
                  {
                    title: "交通",
                    src: "http://bx.tjjt360.com/goods/3100"
                  },
                  {
                    title: "综合",
                    src: "http://bx.tjjt360.com/goods/3200"
                  },
                  {
                    title: "运动",
                    src: "http://bx.tjjt360.com/goods/3300"
                  }
                ]
              },
              {
                title: "旅行",
                itemList: [
                  {
                    title: "境内",
                    src: "http://bx.tjjt360.com/goods/2100"
                  },
                  {
                    title: "境外",
                    src: "http://bx.tjjt360.com/goods/2200"
                  },
                  {
                    title: "申根",
                    src: "http://bx.tjjt360.com/goods/2300"
                  }
                ]
              },
              {
                title: "健康",
                itemList: [
                  {
                    title: "重大疾病",
                    src: "http://bx.tjjt360.com/goods/1100"
                  },
                  {
                    title: "医疗费用",
                    src: "http://bx.tjjt360.com/goods/1200"
                  },
                  {
                    title: "防癌保障",
                    src: "http://bx.tjjt360.com/goods/1300"
                  }
                ]
              },
              {
                title: "财产",
                itemList: [
                  {
                    title: "家财",
                    src: "http://bx.tjjt360.com/goods/7100"
                  },
                  {
                    title: "责任",
                    src: "http://bx.tjjt360.com/goods/7200"
                  },
                  {
                    title: "创新",
                    src: "http://bx.tjjt360.com/goods/7300"
                  }
                ]
              },
              {
                title: "人寿",
                itemList: [
                  {
                    title: "养老储蓄",
                    src: "http://bx.tjjt360.com/goods/8100"
                  },
                  {
                    title: "教育储蓄",
                    src: "http://bx.tjjt360.com/goods/8200"
                  },
                  {
                    title: "定期寿险",
                    src: "http://bx.tjjt360.com/goods/8300"
                  }
                ]
              }
            ],
            img: [{
              src: "http://jrdc.jd.com/dh/nc?keyStr=qIqWFuBhENyJrDMKf7pXWh9JSTLHhmcvHdxogcQjtGQDvLV9tJrk5Q%2FkwSLNbmDiJ0I%2FRq2OCymqtPz%2FaMu0G%2BoAYZVvNnothO94VZuLPVmI%2FzPcgMjuTs0GpL9UvauBAYJL%2FenftH8%3D&to=https://bao.jd.com/item/20130327",
              imgSrc: "http://img30.360buyimg.com/darkhouse/jfs/t22219/72/1045408669/30579/a598389f/5b1f908dN4a874121.jpg"
            }]
          },
          {
            src: "http://baitiao.jd.com/",
            titleName: "白条",
            list: [
              {
                title: "购物打白条",
                itemList: [
                  {
                    title: "白条",
                    src: "http://baitiao.jd.com/"
                  },
                  {
                    title: "白条优惠",
                    src: "http://baitiao.jd.com/coupon/init"
                  },
                  {
                    title: "白条还款",
                    src: "http://bt.jd.com/v3/activity/open"
                  }
                ]
              },
              {
                title: "生活打白条",
                itemList: [
                  {
                    title: "汽车分期",
                    src: "http://icar.jd.com/"
                  },
                  {
                    title: "旅游",
                    src: "http://sfy.jd.com/"
                  },
                  {
                    title: "买房装修",
                    src: "http://fang.jd.com/"
                  }
                ]
              },
              {
                title: "信用服务",
                itemList: [
                  {
                    title: "小白信用",
                    src: "http://credit.jd.com/"
                  },
                  {
                    title: "白条联名卡",
                    src: "http://bk.jd.com/"
                  },
                  {
                    title: "京东钢镚",
                    src: "http://coin.jd.com/"
                  },
                  {
                    title: "免押租赁",
                    src: "http://eshare.jd.com/"
                  },
                  {
                    title: "城市信用卡",
                    src: "http://jcca.jd.com/pc/index.html"
                  }
                ]
              },
              {
                title: "个人/企业服务",
                itemList: [
                  {
                    title: "金条",
                    src: "http://loan.baitiao.com"
                  },
                  {
                    title: "抵质押贷",
                    src: "http://dang.jd.com/"
                  },
                  {
                    title: "借钱",
                    src: "http://crpl.jd.com/pc"
                  }
                ]
              },
              {
                title: "校园金融",
                itemList: [
                  {
                    title: "校园特权",
                    src: "http://edu.jd.com/"
                  }
                ]
              },
              {
                title: "农村金融",
                itemList: [
                  {
                    title: "京农贷",
                    src: "http://nj.jd.com/"
                  }
                ]
              }
            ],
            img: [{
              src: "http://jrdc.jd.com/dh/nc?keyStr=qIqWFuBhENx7itceEZlqKR9JSTLHhmcvHdxogcQjtGQDvLV9tJrk5Q%2FkwSLNbmDiGpaX%2BPrMQ%2BqqtPz%2FaMu0G%2BjkqnBC3Getf09blCeW0pjB5e0Cyt39IlhIsMSUOGyN&to=http://baitiao.jd.com/",
              imgSrc: "http://img30.360buyimg.com/darkhouse/jfs/t7300/322/296910861/43280/5aee15e0/5991475cNea059c9e.jpg"
            }]
          },
          {
            src: "http://gupiao.jd.com/",
            titleName: "股票",
            list: [
              {
                title: "炒股工具",
                itemList: [
                  {
                    title: "APP下载",
                    src: "http://gupiao.jd.com/download/"
                  }
                ]
              },
              {
                title: "特色功能",
                itemList: [
                  {
                    title: "实时资讯",
                    src: "http://gupiao.jd.com/"
                  },
                  {
                    title: "发现牛人",
                    src: "http://gupiao.jd.com/find/"
                  }
                ]
              }
            ],
            img: [{
              src: "http://jrdc.jd.com/dh/nc?keyStr=qIqWFuBhENxdmFkWdAYcBR9JSTLHhmcvHdxogcQjtGQDvLV9tJrk5Q%2FkwSLNbmDinauGzupJQEKqtPz%2FaMu0G%2BoAYZVvNnotHDUffE6fXZTB5e0Cyt39IlhIsMSUOGyN&to=https://gupiao.jd.com/",
              imgSrc: "http://img30.360buyimg.com/darkhouse/jfs/t21667/267/80714524/33095/12e1deb5/5afa7bd2Na0a1f171.jpg"
            }]
          },
          {
            src: "http://rich.jd.com/",
            titleName: "东家财富",
            list: [
              {
                title: "东家财富",
                itemList: [
                  {
                    title: "关于东家",
                    src: "http://rich.jd.com/about.html"
                  },
                  {
                    title: "APP下载",
                    src: "http://rich.jd.com/app.html"
                  }
                ]
              }
            ],
            img: [{
              src: "javascript:;",
              imgSrc: "http://img30.360buyimg.com/jr_image/jfs/t7960/92/1273380948/12801/7ea55226/599bb4bbN2eac8e56.jpg"
            }]
          },
          {
            src: "http://scf.jd.com/",
            titleName: "企业金融",
            list: [
              {
                title: "企业中心",
                itemList: [
                  {
                    title: "企业金融介绍",
                    src: "http://loan.jd.com/home/index.htm"
                  },
                  {
                    title: "企业金融服务",
                    src: "http://ft.jd.com"
                  },
                  {
                    title: "常见问题",
                    src: "http://jrhelp.jd.com/show/getTrdTabList?id=650"
                  }
                ]
              },
              {
                title: "企业融资",
                itemList: [
                  {
                    title: "京保贝",
                    src: "http://loan.jd.com/scf/"
                  },
                  {
                    title: "京小贷",
                    src: "http://loan.jd.com/home.htm"
                  },
                  {
                    title: "动产融资",
                    src: "http://dcrz.jd.com/guide.htm"
                  },
                  {
                    title: "企业金采",
                    src: "http://jc.jd.com"
                  },
                  {
                    title: "京东快银",
                    src: "http://loan.jd.com/ky/"
                  },
                  {
                    title: "跨境金融",
                    src: "http://cbf.jd.com"
                  }
                ]
              },
              {
                title: "企业理财",
                itemList: [
                  {
                    title: "企业金库",
                    src: "http://8.jd.com"
                  }
                ]
              },
              {
                title: "信用服务",
                itemList: [
                  {
                    title: "京东信用",
                    src: "http://icredit.jd.com"
                  }
                ]
              },
              {
                title: "票据服务",
                itemList: [
                  {
                    title: "票据秒贴",
                    src: "http://piaoju.jd.com/#/?reffer=qyjr"
                  }
                ]
              }
            ],
            img: [{
              src: "http://jrdc.jd.com/dh/nc?keyStr=qIqWFuBhENzE%2FEm%2BqMa8rx9JSTLHhmcvHdxogcQjtGQDvLV9tJrk5Q%2FkwSLNbmDiUyxAwaHCyReqtPz%2FaMu0G%2BoAYZVvNnotX1yeD4N6kGqtD22HFXwhdw%3D%3D&to=https://xc.jd.com",
              imgSrc: "http://img30.360buyimg.com/darkhouse/jfs/t1/10942/33/9398/30780/5c418b5eEac7e5d5a/381be20797e2bfeb.jpg"
            }]
          },
          {
            src: "http://c.jd.com",
            titleName: "金融云"
          },
          {
            src: "https://icity.jd.com",
            titleName: "城市计算"
          },
        ]  
      }
    }
  }
}

export default headerbar
