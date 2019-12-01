<template>
  <div class="wealthMenu">
    <div class="menu-left">
      <div class="left-img">
        <div class="img1"></div>
        <div class="img2"></div>
        <div class="img3"></div>
        <div class="imgText"></div>
      </div>
      <div class="left-title">
        <div class="titleText">
          <h3>京东小金库</h3>
          <router-link to="" class="titleTo">立即开通小金库</router-link>
        </div>
      </div>
      <div class="left-list">
        <div class="list-title" v-for="(item, index) in list" :key="index">
          <h3>
            <i class="listIcon"></i>
            {{item.title}}
          </h3>
          <router-link to="" class="listTo">
            {{item.text}}
            <i> > </i>
          </router-link>
        </div>
      </div>
    </div>
    <div class="menu-mid">
      <div class="mid-Rotate">
        <img src="https://storage.jd.com/article-image/1553167619856%E6%B3%B0%E5%BA%B7%E6%B4%BB%E6%9C%9F%E7%9B%88-pc%E8%B4%A2%E5%AF%8C%E9%A6%96%E7%84%A6.jpg" alt="">
      </div>
      <div class="mid-bottom">
        <ul>
          <li v-for="(item, index) in imgList" :key="index">
            <router-link to="" class="bottomTo">
              <img :src="item" alt="">
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="menu-right">
      <h3 class="right-title">今日爆款</h3>
      <p class="right-sub">国寿嘉年月月盈</p>
      <span class="right-num">2.85<i>%</i></span>
      <p class="right-tran">7日年化利率</p>
      <div class="right-botton">
        <router-link to="" class="bottonTo">立即赚钱</router-link>
      </div>
    </div>
    <div class="menu-bgc">
      <div class="bgc" v-for="(item, index) in imgBgc" :key="index" :style="`background: url(${item}) no-repeat;background-position-x: ${imgLeft[index]}px`"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [{
        title: '稳健理财',
        text: '小白精选 '
      }, {
        title: '进阶理财',
        text: '基金理财  '
      }],
      imgList: ['//storage.jd.com/article-image/1536218915423新版理财-月月盈.jpg',
        '//storage.jd.com/article-image/1516069168387新版理财-小金库.jpg',
        '//storage.jd.com/article-image/1509955976862884322216349794217.jpg'
      ],
      imgBgc: ['https://static.360buyimg.com/finance/financial/index/2.0.0/css/i/A3.png',
        'https://static.360buyimg.com/finance/financial/index/2.0.0/css/i/A2.png',
        'https://static.360buyimg.com/finance/financial/index/2.0.0/css/i/A3.png'
      ],
      imgLeft: [-500, -1000, -1500]
    }
  },
  mounted () {
    setInterval(() => {
      for (let i = 0; i < this.imgLeft.length; i++) {
        if (this.imgLeft[i] <= -3000) {
          this.imgLeft[i] = 0
        }
        this.imgLeft[i] -= 1
      }
    }, 10)
  }
}
</script>

<style scpoed lang="stylus">
.wealthMenu
  width 100%
  height 510px
  background url(https://static.360buyimg.com/finance/financial/index/2.0.0/images/banner-bg.jpg) top center no-repeat
  position relative
  padding-top 20px
  .menu-left
    position absolute
    left 160px
    width 295px
    height 495px
    background url(https://static.360buyimg.com/finance/financial/index/2.0.0/images/user-f-bg-01.jpg) center center no-repeat
    box-shadow 0 0 60px rgba(36,77,159,.2)
    z-index 2
    .left-img
      position absolute
      top -10px
      left -15px
      width 295px
      height 170px
      background url(https://static.360buyimg.com/finance/financial/index/2.0.0/css/i/logo-bg-01.png) center center no-repeat
      .img1
        position absolute
        z-index: 3
        top 0
        left 0
        width 295px
        height 170px
        background url(https://static.360buyimg.com/finance/financial/index/2.0.0/css/i/b4-01.png) center center no-repeat
        animation light 1.8s infinite ease-in
      .img2
        position absolute
        z-index: 2
        top 0
        left 0
        width 295px
        height 170px
        background url(https://static.360buyimg.com/finance/financial/index/2.0.0/css/i/b3-01.png) center center no-repeat
        animation light 1.8s infinite ease-in
      .img3
        position absolute
        z-index: 1
        top 0
        left 0
        width 295px
        height 170px
        background url(https://static.360buyimg.com/finance/financial/index/2.0.0/css/i/b2-01.png) center center no-repeat
        animation light 1.8s infinite ease-in
      .imgText
        position absolute
        z-index 4
        top 0
        left 0
        width 295px
        height 170px
        background url(//storage.jd.com/public-static-resource/financial/pc/index/cflogo.png)
    .left-title
      position absolute
      top 200px
      left 40px
      height 70px
      .titleText
        h3
          font-size 20px
          color #fff
          font-weight 700
        .titleTo
          margin-top 10px
          width 104px
          height 22px
          border 1px solid #f52f3e
          text-align center
          line-height 22px
          font-size 12px
          color #f52f3e
          border-radius 3px
          display inline-block
          transition .1s ease all
        .titleTo:hover
          background #3c1717
    .left-list
      position absolute
      left 60px
      top 270px
      border-left: 1px solid #434343
      padding-left 20px
      .list-title:nth-child(2)
        h3
          color #f52f3e
      .list-title
        padding-top 15px
        font-size 16px
        margin-bottom 5px
        h3
          color #3282ff
          margin-bottom 15px
          position relative
          font-size 16px
          cursor default
          .listIcon
            width 5px
            height 5px
            display block
            position absolute
            top 8px
            left -23px
            background-color #52566d
            border-radius 50%
        .listTo
          color #ffffff
          margin-right 15px
          position relative
          right 0
          transition all 1s ease
          i
            font-size 12px
            opacity 0.5
        .listTo:hover
          right -10px
  .menu-mid
    position absolute
    left 460px
    z-index 2
    .mid-Rotate
      width 635px
      height 360px
      img
        width 100%
        height 100%
    .mid-bottom
      position absolute
      top 365px
      width 900px
      height 130px
      background-color #fff
      box-shadow 0 0 60px rgba(36,77,159,.2)
      ul
        li
          width 300px
          height 130px
          float left
          overflow hidden
          .bottomTo
            img
              width 100%
              height 135px
              transition all 0.5s ease
            img:hover
              transform translateY(-5px)
  .menu-right
    position absolute
    left 1100px
    width 260px
    height 360px
    background url(https://static.360buyimg.com/finance/financial/index/2.0.0/css/i/hot-day-bg01.png)
    text-align center
    z-index 2
    .right-title
      padding-top 45px
      font-size 24px
      font-weight 700
      text-shadow 6px 6px 12px rgba(245,47,62,.2)
      color rgba(255,23,37,.9)
    .right-sub
      font-size 16px
      font-weight 700
      color #323232
      line-height 34px
    .right-num
      display block
      margin-top 20px
      font-size 72px
      font-weight 700
      color #f52f3e
      text-shadow 3px 6px 15px rgba(245,47,62,.4)
      i
        font-size 24px
    .right-tran
      font-size 14px
      color #a5a5a5
    .right-botton
      position relative
      width 220px
      height 70px
      margin 35px auto 0
      background url(https://static.360buyimg.com/finance/financial/index/2.0.0/css/i/bant-bg.png)
      transition all 0.5s ease
      .bottonTo
        width 220px
        height 46px
        line-height 46px
        display block
        text-align center
        font-size 16px
        font-weight 700
        color #fff
        text-shadow 2px 2px 1px rgba(0,0,0,.1)
    .right-botton:hover
      transform translateY(-10px)
  .menu-bgc
    position absolute
    bottom 19px
    left 0
    height 120px
    width 100%
    overflow hidden
    .bgc
      width 6000px
      position absolute
      bottom 0
      height 100%
      z-index 0
@keyframes light {
  0%{
    opacity 1
  }
  50%{
    opacity 0.5
  }
  100%{
    opacity 1
  }
}
</style>
