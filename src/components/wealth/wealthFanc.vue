<template>
  <div class="wealthFanc">
    <div class="fanc-left">
      <div class="bgc"></div>
      <h3>京东小金库</h3>
      <p class="left-title">可理财、可消费的钱包</p>
      <div class="left-text">
        <ul>
          <li v-for="(item, index) in fancList" :key="index">
            <img :src="fancIcon" :style="`position: absolute;clip: rect(${14* index - 16}px,18px,${30 * (index + 1)}px,0px)`">
            <span :style="`top: ${(index + 1) * 35 + 65}px`">{{item}}</span>
          </li>
        </ul>
        <div class="bottom">
          <router-link class="bottom-into" to="">立即转入</router-link>
          <router-link class="bottom-dt" to="">定投</router-link>
        </div>
      </div>
    </div>
    <div class="fanc-mid">
      <div class="mid-box">
        <h3>支持购买理财</h3>
        <ul>
          <li>
            <div class="box-title">
              <h3>
                <router-link class="titleTo" to="">
                  <p>养老保障</p>
                  -国寿嘉年月月盈
                </router-link>
              </h3>
            </div>
            <div class="box-text">
              <div class="text-left">
                <span>2.85
                  <p>%</p>
                </span>
                <p>7日年化利率</p>
              </div>
              <div class="text-right">
                <span>1个月</span>
                <p>理财期限</p>
              </div>
              <div class="text-btn">
                <router-link class="btnTo" to="">小金库购买</router-link>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="fanc-right fanc-mid">
      <div class="mid-box">
        <h3>支持消费还款
          <router-link class="boxMore" to="">查看更多 ></router-link>
        </h3>
        <div class="box-img">
          <router-link class="img" to="" v-for="(item, index) in rightImg" :key="index">
            <div class="imgSrc">
              <img :src="rightImg[index]" alt="">
            </div>
            <p class="img-title">{{rightTitle[index]}}</p>
            <span class="img-text">{{rightText[index]}}</span>
          </router-link>
        </div>
        <div class="bottomImg">
          <h3>白条自动还款</h3>
          <p>小金库支持白条自动还款避免逾期</p>
          <router-link class="bottomTo" to="">查看详情</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fancList: ['可还白条、还信用卡', '余额享货币基金收益', '铂金会员京东消费享返现'],
      fancIcon: 'https://static.360buyimg.com/finance/financial/index/2.0.0/css/i/s-icon.png',
      rightImg: ['//storage.jd.com/article-image/15281864278025a0cf3b0N6531f1e1.png',
        '//storage.jd.com/article-image/1489716171209323.jpg'],
      rightTitle: ['100-99元支付券', '快速充话费'],
      rightText: ['小金库福利 天天领', '小金库充值 更便捷']
    }
  }
}
</script>

<style scpoed lang="stylus">
.wealthFanc
  padding-top 85px
  height 420px
  width 1200px
  margin 0 auto
  .fanc-left
    float left;
    width 290px
    padding-left 40px
    margin-right 30px
    position relative
    z-index 2
    .bgc
      width 498px
      height 54px
      display block
      background url(https://static.360buyimg.com/finance/financial/index/2.0.0/css/i/xjk-sy.png) center center no-repeat
      position absolute
      top -20px
      left 40px
      z-index 0
    h3
      text-shadow 0 6px 10px rgba(0,0,0,.2)
      margin-top -10px
      font-size 46px
      font-weight 700
    .left-title
      font-size 700px
      margin-top 10px
      font-size 20px
      color #323232
    .left-text
      margin-top 30px
      li
        margin-bottom 15px
        font-size 14px
        img
          display block
        span
          font-size 14px
          position absolute
          left 70px
      .bottom
        margin-top 130px
        position absolute
        .bottom-into
          width 220px
          height 70px
          line-height 46px
          display inline-block
          text-align center
          font-size 16px
          font-weight 700
          color #fff
          text-shadow 2px 2px 1px rgba(0,0,0,.1)
          background url(https://static.360buyimg.com/finance/financial/index/2.0.0/css/i/bant-bg.png) center center no-repeat
          margin-left -20px
        .bottom-dt
          display inline-block
          font-size 16px
          font-weight 700
          color #f52f3e
          border-radius 3px
          width 98px
          height 44px
          text-align center
          line-height 44px
          border 1px solid #f52f3e
          position absolute
          top 0
          right -100px
  .fanc-mid
    float left
    width 400px
    height 400px
    background-color #fff
    margin-left 20px
    box-shadow 0 0 40px rgba(148, 157, 177, .1)
    position relative
    z-index 2
    .mid-box
      padding 20px 30px
      h3
        border-bottom 1px solid #f6f6f6
        font-size 24px
        font-weight 700
        color #323232
        line-height 36px
        padding-bottom 5px
        cursor pointer
      li
        border-bottom 1px solid #f6f6f6
        position relative
        .box-title
          h3
            font-size 16px
            color #323232
            border-bottom none
            .titleTo
              display inline-block
              vertical-align middle
              overflow hidden
              text-overflow ellipsis
              white-space nowrap
              color #323232
              transition all 0.1s ease
              p
                display inline-block
                font-weight 700
            .titleTo:hover
              color #f52f3e
        .box-text
          padding 6px
          height 50px
          .text-left
            float left
            width 130px
            span
              font-size 28px
              color #f52f3e
              height 32px
              vertical-align bottom
              p
                font-size 14px
                display inline-block
            p
              margin-top 5px
              font-size 14px
              color #a5a5a5
          .text-right
            float left
            text-align center
            margin-top 5px
            span
              height 32px
              font-size 18px
              color #323232
              vertical-align bottom
            p
              margin-top 5px
              font-size 14px
              color #a5a5a5
          .text-btn
            position absolute
            right 0
            bottom 15px
            .btnTo
              display block
              width 96px
              height 32px
              background-color #f52f3e
              text-align center
              color #ffffff
              line-height 32px
              font-size 14px
              border-radius 3px
  .fanc-right
    .mid-box
      .boxMore
        float right
        color #3282ff
        font-size 14px
        font-weight 400
        transition all 0.1s ease
      .boxMore:hover
        color #f52f3e
      .box-img
        padding 15px 20px 0
        .img
          float left
          width 150px
          text-align center
          .imgSrc
            width 130px
            height 130px
            margin 0 auto
            transition 0.3s all ease
          .imgSrc:hover
            transform scale(0.9)
          .img-title
            width 170px
            font-size 14px
            color #323232
            margin-top 5px
            margin-bottom 5px
            white-space nowrap
            text-overflow ellipsis
            overflow hidden
            transition .1s ease all
          .img-title:hover
            color #f52f3e
          .img-text
            margin-top 5px
            color #f52f3e
            font-weight 700
            font-size 14px
      .bottomImg
        margin-top 10px
        width 340px
        height 100px
        padding 15px 0 0 30px
        position absolute
        left 20px
        bottom 20px
        background url(https://static.360buyimg.com/finance/financial/index/2.0.0/images/baitiao-bg.jpg) center center no-repeat
        h3
          font-size 20px
          font-weight 700
          color #000
        p
          margin-top 5px
          width 160px
          font-size 14px
          line-height 16px
          color #85542d
        .bottomTo
          position absolute
          bottom 20px
          right 30px
          display block
          width 96px
          height 32px
          background-color #f52f3e
          text-align center
          color #ffffff
          line-height 32px
          font-size 14px
          border-radius 3px
</style>
