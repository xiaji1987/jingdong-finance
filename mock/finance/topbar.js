const topbar = {
  url: /\/api\/finance\/topbar/,
  type: 'get',
  response: {
    code: 200,
    data: {
      topBar: {
        Finance: [
          {
            src: "http://m.jr.jd.com/integrate/download/html/pc.html",
            img: "http://storage.360buyimg.com/base/images/topbar/topbar-jrapp.png?20170804"
          },
          {
            src: "http://gupiao.jd.com/download/",
            img: "http://storage.360buyimg.com/base/images/topbar/topbar-gpapp-new.png"
          },
          {
            src: "javascript:;",
            img: "http://storage.360buyimg.com/base/images/topbar/topbar-wxfw.png?20170823"
          }
        ],
        service: [
          {
            name: "帮助中心",
            src: "http://jrhelp.jd.com/"
          },
          {
            name: "我要吐槽",
            src: "http://ur.jr.jd.com/survey/show?id=121&u=https%3A%2F%2Fjr.jd.com%2F"
          },
          {
            name: "我的客服",
            src: "https://jtalk.jd.com?entrance=10000&source=web&companyId=1"
          },
          {
            name: "客服邮箱",
            src: "http://jr.jd.com/mail/index.html"
          }
        ],
        website: [
          {
            title: "投资理财",
            Subheading: "MONEY",
            itemsLeft: [
              {
                itemName: "京东小金库",
                src: "http://xjk.jr.jd.com/index.htm"
              },
              {
                itemName: "股权众筹",
                src: "http://dj.jd.com/"
              }
            ],
            itemsRight: [
              {
                itemName: "定期理财",
                src: "http://dq.jd.com",
                iconSrc: "https://static.360buyimg.com/finance/base/1.2.0/css/i/nav-new.png"
              },
              {
                itemName: "股票",
                src: "http://gupiao.jd.com/",
                iconSrc: "https://static.360buyimg.com/finance/base/1.2.0/css/i/nav-new.png"
              }
            ]
          },
          {
            title: "生活服务",
            Subheading: "LIFESTYLE",
            itemsLeft: [
              {
                itemName: "白条",
                src: "http://baitiao.jd.com/"
              },
              {
                itemName: "金条",
                src: "http://baitiao.jd.com/bul/home"
              },
              {
                itemName: "保险",
                src: "http://bao.jd.com/"
              }
            ],
            itemsRight: [
              {
                itemName: "小白卡",
                src: "http://bk.jd.com/"
              },
              {
                itemName: "众筹",
                src: "http://z.jd.com/"
              },
              {
                itemName: "京东金融APP",
                src: "http://m.jr.jd.com/integrate/download/html/pc.html"
              }
            ]
          },
          {
            title: "金融精选",
            Subheading: "SELECTION",
            itemsLeft: [
              {
                itemName: "小白信用",
                src: "http://credit.jd.com/"
              },
              {
                itemName: "纵横资讯",
                src: "http://trade.jr.jd.com/asyncpublicnews/newsindex.htm"
              }
            ],
            itemsRight: [
              {
                itemName: "0元评测",
                src: "http://pingce.jd.com/index.html?from=jrdh"
              },
              {
                itemName: "换钢镚",
                src: "http://coin.jd.com/#banklist"
              },
              {
                itemName: "企业金融",
                src: "//ft.jd.com/"
              }
            ]
          },
          {
            title: "常用功能",
            Subheading: "FAVORITE",
            itemsLeft: [
              {
                itemName: "白条还款",
                src: "http://baitiao.jd.com/v3/ious/list"
              },
              {
                itemName: "领优惠券",
                src: "http://vip.jr.jd.com/exchange/exchangeGolds"
              },
              {
                itemName: "安全中心",
                src: "http://authpay.jd.com/"
              },
              {
                itemName: "众筹进度",
                src: "http://trade-z.jd.com/funding/myCrowdfunding.action"
              }
            ]
          }
        ]
      }
    }
  }
}

export default topbar
