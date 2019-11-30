<template>
  <div class="wealthList">
    <div class="list listTop">
      <h3>小白精选
        <span class="listIcon"></span>
        <router-link class="listTo" to="">更多小白精选 ></router-link>
      </h3>
      <p class="listTitle">简单 · 稳定</p>
      <ul>
        <li class="topList" v-for="(item, index) in topText" :key="index">
          <router-link class="liTo" to="">
            <img :src="item.imgSrc" alt="">
            <div class="listText">
              <h3 class="textH3">期限{{item.textDay}}天</h3>
              <p class="textP">{{item.textName}}</p>
              <span class="textSpan">{{item.textNum}}
                <i>%</i>
                <p class="textP2">{{item.textDate}}</p>
              </span>
              <div class="textBtn">立即抢购</div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="list listMid">
      <h3>基金理财
        <span class="listIcon"></span>
        <router-link class="listTo" to="">更多基金理财 ></router-link>
      </h3>
      <p class="listTitle">富有是个过程，一步一个脚印</p>
      <div class="midText">
        <div class="textLeft">
          <div class="textTitle">市场热度</div>
          <div class="textSub">今日市场热度</div>
          <div class="textCanvas">
            <img src="//static.360buyimg.com/finance/financial/index/2.0.0/css/i/meter-bar.png" alt="">
            <div class="canText">
              <b>44</b>
              <span>℃</span>
              <div class="stateText">持续震荡</div>
            </div>
          </div>
          <div class="textCon">市场处于持续震荡区间，在此区间市场将延续震荡行情。</div>
        </div>
        <div class="textMid">
          <ul>
            <li class="midList" v-for="(item, index) in textMid" :key="index">
              <h3>
                <router-link class="midTo" to="">{{item.name}}</router-link>
              </h3>
              <span class="midSpan">{{item.income}}
                <span>%</span>
              </span>
              <p class="midP">温和上涨期间涨幅</p>
              <div class="midBtn">
                <router-link class="btnTo" to="">立即买入</router-link>
              </div>
            </li>
            <li class="midList">
              <router-link class="listTo" to="">
                <p class="listP">更多产品 ></p>
                <span class="listSpan">SEE  ALL</span>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="textRight">
          <div class="rightTopText">
            <router-link class="topTo" to="">
              <img src="//static.360buyimg.com/finance/financial/index/2.0.0/images/fund-add-bg.jpg" alt="">
              <div class="topText">
                <h3>
                  <span>今日推荐</span>
                  -目标盈系列
                </h3>
                <div class="topCon">
                  <div class="conLeft">
                    <span>10.00
                      <span>%</span>
                    </span>
                    <p>预期止盈年化收益</p>
                  </div>
                  <div class="conRight">
                    <span>90-270
                      <span>天</span>
                    </span>
                    <p>理财期限</p>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
          <div class="rightBtnText">
            <div class="listTalk" v-for="(item, index) in talkList" :key="index"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="list listright">
    </div>
  </div>
</template>

<script>
export default {
  name: 'wealthList',
  data () {
    return {
      topText: [{
        imgSrc: '//static.360buyimg.com/finance/financial/index/2.0.0/images/d-pro01.jpg',
        textDay: 1,
        textName: '国海金贝壳5号集合资产管理计划',
        textNum: 3.27,
        textDate: '七日年化收益率'
      },
      {
        imgSrc: '//static.360buyimg.com/finance/financial/index/2.0.0/images/d-pro02.jpg',
        textDay: 31,
        textName: '安邦养老安增益4号',
        textNum: 3.40,
        textDate: '近七日年化'
      },
      {
        imgSrc: '//static.360buyimg.com/finance/financial/index/2.0.0/images/d-pro03.jpg',
        textDay: 45,
        textName: '平安45天周期盈',
        textNum: 3.67,
        textDate: '近七日年化'
      },
      {
        imgSrc: '//static.360buyimg.com/finance/financial/index/2.0.0/images/d-pro04.jpg',
        textDay: 180,
        textName: '平安180天周期盈',
        textNum: 4.17,
        textDate: '近七日年化'
      }],
      textMid: [{
        name: '广发中证500ETF联接C类',
        income: 3.16
      },
      {
        name: '易方达深证100联接',
        income: 2.99
      },
      {
        name: '国泰创业板指数（LOF）',
        income: 1.58
      }],
      talkList: [{
        title: '平时很忙抽不出时间理财',
        text: '选择基金定投躺着赚钱不操心',
        num: 7.50,
        dateText: '定投近3年'
      },
      {
        title: '平时很忙抽不出时间理财',
        text: '选择基金定投躺着赚钱不操心',
        num: 7.50,
        dateText: '定投近3年'
      },
      {
        title: '平时很忙抽不出时间理财',
        text: '选择基金定投躺着赚钱不操心',
        num: 7.50,
        dateText: '定投近3年'
      }]
    }
  }
}
</script>

<style scoped lang="stylus">
.wealthList
  padding 25px 30px
  background-color #fff
  height 1220px
  width 1140px
  margin 0 auto
  box-shadow 0 0 40px rgba(148, 158, 177, .1)
  position relative
  .list
    h3
      font-size 24px
      font-weight 700
      color #323232
      .listIcon
        display inline-block
        vertical-align middle
        width 116px
        height 21px
        margin-left 2px
        background-position 0 -224px
        background-image url(https://static.360buyimg.com/finance/financial/index/2.0.0/css/i/bg-sd3f16611f8.png)
      .listTo
        float right
        font-size 14px
        color #3282ff
        font-weight 400
        margin-top 12px
        transition all 0.1s ease
      .listTo:hover
        color #f52f3e
    .listTitle
      font-size 14px
      color #a5a5a5
      line-height 26px
    ul
      padding-top 10px
      .topList:nth-child(4)
        margin-right 0!important
      .topList
        float left
        width 270px
        height 325px
        position relative
        overflow hidden
        margin-right 20px
        .liTo
          img
            position absolute
            z-index 0
            top 0
            left 0
          .listText
            position absolute
            top 0
            left 0
            width 270px
            height 325px
            z-index 999
            text-align center
            .textH3
              padding-top 45px
              font-size 20px
              font-weight 700
              color #323232
            .textP
              font-size 14px
              color #323232
              margin-top 10px
            .textSpan
              display block
              margin-top 15px
              font-size 60px
              font-weight 700
              color rgba(255,23,37,.9)
              text-shadow 3px 6px 15px rgba(245,47,62,.4)
              i
                font-size 14px
              p
                font-size 14px
                color #323232
                margin-bottom 30px
            .textBtn
              width 210px
              height 50px
              position absolute
              left 30px
              bottom 35px
              box-shadow 0 14px 14px rgba(0, 0, 0, 0.2)
              background-color rgba(255,255,255,.8)
              border-radius 3px
              text-align center
              font-weight 700
              color #f52f3e
              line-height 50px
              transition all 0.3s ease
      .topList:hover
        .textBtn
          transform translateY(-10px)
  .listMid
    position absolute
    top 450px
    left 30px
    // overflow hidden
    .midText
      padding-bottom 40px
      padding-top 10px
      .textLeft
        width 350px
        height 320px
        float left
        position relative
        .textTitle
          font-size 18px
          text-align center
          font-weight 700
          color #323232
        .textSub
          font-size 14px
          color #a5a5a5
          text-align center
          position absolute
          top 120px
          left 0
          width 100%
          z-index 1
        .textCanvas
          width 261px
          height 251px
          margin 20px auto
          position relative
          background url(https://static.360buyimg.com/finance/financial/index/2.0.0/css/i/hot-bg02.jpg) center center no-repeat
          text-align center
          .canText
            position absolute
            top 100px
            left 0
            width 100%
            text-align center
            b
              font-size 66px
              color #323232
              font-weight 700
              text-shadow 0 6px 10px rgba(0, 0, 0, 0.2)
            span
              font-size 20px
              font-weight 700
              color #323232
              position absolute
              top 6px
              right 70px
              text-shadow 0 3px 5px rgba(0, 0, 0, 0.2)
            .stateText
              font-size 18px
              text-align center
              position absolute
              bottom -30px
              width 100%
        .textCon
          width 270px
          text-align center
          font-size 14px
          color #5e5e5e
          margin -38px auto 0
          position relative
          line-height 24px
      .textMid
        float left
        width 460px
        height 320px
        .midList
          width 229px
          height 158px
          border-bottom 1px solid #f0f0f0
          border-right 1px solid #f0f0f0
          text-align center
          position relative
          float left
          h3
            font-size 16px
            line-height 16px
            margin-bottom 15px
            color #323232
            .midTo
              color #323232
              transition 0.1 all ease
            .midTo:hover
              color #f52f3e
          .midSpan
            font-size 28px
            color #f52f3e
            span
              font-size 14px
              font-weight 700
          .midP
            color #a5a5a5
            font-size 14px
          .midBtn
            position absolute
            left 50%
            margin-left -48px
            bottom 28px
            .btnTo
              display  block
              width 96px
              height 32px
              background-color #f52f3e
              text-align center
              color #ffffff
              line-height 32px
              font-size 14px
              border-radius 3px
          .listP
            margin-top 40px
            font-size 16px
            color #5e5e5e
            margin-bottom 5px
          .listSpan
            font-size 12px
            color #5e5e5e
      .textRight
        width 269px
        height 320px
        float left
        padding-left 30px
        margin-left 30px
        border-left 1px solid #f0f0f0
        .rightTopText
          width 230px
          height 95px
          padding 20px
          position relative
          .topTo
            img
              position absolute
              top 0
              left 0
              z-index 1
            .topText
              position absolute
              z-index 2
              top 25px
              left 25px4
              h3
                font-size 16px
                color #323232
                transition 0.1s all ease
                span
                  font-weight 700
                  font-size 18px
              h3:hover
                color #f52f3e
              .topCon
                padding-top 20px
                .conLeft, .conRight
                  float left
                  width 120px
                  span
                    font-size 28px
                    color #f52f3e
                    font-weight 700
                    height 32px
                    vertical-align bottom
                    span
                      font-size 14px
                  p
                    font-size 14px
                    color #a5a5a5
                .conRight
                  padding-top 10px
                  span
                    color #a5a5a5
                    font-size 18px
                  p
                    font-size 14px
                    color #a5a5a5
</style>
