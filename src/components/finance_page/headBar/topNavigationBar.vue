<template>
  <div class="topbar">
    <div class="topbar-right">
      <ul class="menu-ul">
        <li class="menu-li-home">
          <a href="https://www.jd.com/">京东首页</a>
        </li>
        <li class="menu-li-login-register">
          <div v-show="!islogin">
            <router-link to="login">你好，请登陆</router-link>
            <router-link to="register">免费注册</router-link>
          </div>
          <div v-show="islogin">
            <router-link to="login">{{loginName}}</router-link>
            <router-link to="register">退出</router-link>
          </div>
        </li>
        <li class="menu-li-transaction">
          <a href="">我的交易单</a>
        </li>
        <li class="menu-li-member">
          <a href="https://vip.jr.jd.com/?from=jrshouyedb">
            会员中心
            <i class="member-icon"></i>
          </a>
        </li>
        <li class="menu-li-mobile-finance" @mouseover="mobileEnter()" @mouseleave="mobileLeave()" :class="mobileIsShow ? 'mobile-hover' : ''">
          <transition name="">
            <i class="mobile-finance-icon1" v-show="!mobileIsShow"></i>
          </transition>
          <a href="https://m.jr.jd.com/integrate/download/html/pc.html">手机金融</a>
          <i class="mobile-finance-icon2"></i>
          <div class="mobile-finance-list" v-show="mobileIsShow">
            <div class="list-img" v-for="(item, index) in data.Finance" :key="index">
              <a :href="`${item.src}`">
                <img :src="`${item.img}`" alt="">
              </a>
            </div>
          </div>
        </li>
        <li class="menu-li-service" @mouseover="serviceEnter()" @mouseleave="serviceLeave()" :class="serviceIsShow ? 'mobile-hover' : ''">
          <span>联系客服</span>
          <i class="service-icon"></i>
          <ul class="service-list" v-show="serviceIsShow">
            <li v-for="(item, index) in data.service" :key="index">
              <a :href="`${item.src}`">{{item.name}}</a>
            </li>
          </ul>
        </li>
        <li class="menu-li-website" @mouseover="websiteEnter()" @mouseleave="websiteLeave()" :class="websiteIsShow ? 'mobile-hover' : ''">
          <a href="javascript:;">网站导航</a>
          <i class="website-icon"></i>
          <ul class="website-list" v-show="websiteIsShow">
            <li v-for="(item, index) in data.website" :key="index">
              <dl>
                <dt>{{item.title}}
                  <span>{{item.Subheading}}</span>
                  <i class="list-icon"></i>
                </dt>
                <dd>
                  <div class="list-left" v-for="(itemLeft, indexLeft) in item.itemsLeft" :key="indexLeft + 'left' ">
                    <a :href="`${itemLeft.src}`">{{itemLeft.itemName}}</a>
                  </div>
                  <div class="list-right" v-for="(itemRight, indexRight) in item.itemsRight" :key="indexRight + 'right' ">
                    <a :href="`${itemRight.src}`">{{itemRight.itemName}}
                      <i class="right-icon" v-show="itemRight.iconSrc" :style="`background: url(${itemRight.iconSrc})`"></i>
                    </a>
                  </div>
                </dd>
              </dl>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      islogin: false,
      loginName: 'xiaji1987',
      mobileIsShow: false,
      serviceIsShow: false,
      websiteIsShow: false
    }
  },
  methods: {
    mobileEnter () {
      this.mobileIsShow = true
    },
    mobileLeave () {
      this.mobileIsShow = false
    },
    serviceEnter () {
      this.serviceIsShow = true
    },
    serviceLeave () {
      this.serviceIsShow = false
    },
    websiteEnter () {
      this.websiteIsShow = true
    },
    websiteLeave () {
      this.websiteIsShow = false
    }
  },
  computed: {
    ...mapState({
      data: state => state.topBar.data
    })
  },
  mounted () {
    this.$store.dispatch('topBar/getAllTopBar')
  }
}
</script>

<style scoped lang="stylus">
.topbar
  width 1200px
  display block
  background none
  margin 0 auto
  .topbar-right
    float right
    .menu-ul
      li
        float left
        padding 6px 0
        position relative
        line-height 22px
        height 18px
        font-size 14px
        a
          color #a5a5a5
          border-left 1px solid #5e5e5e
          padding 0 10px
      .menu-li-home
        margin-right 10px
        a
          border none
          padding-right 0px
      .menu-li-member
        .member-icon
          background url(https://static.360buyimg.com/finance/base/1.2.0/css/i/topbar-new.png)
          background-repeat no-repeat
          display inline-block
          width 20px
          height 14px
          vertical-align: text-bottom
      .mobile-hover
        background-color #fff
        box-shadow 0 1px 3px rgba(0,0,0,.2)
        z-index 200
      .menu-li-mobile-finance
        width 105px
        .mobile-finance-icon1
          position absolute
          z-index 12
          left: 10px
          top 5px
          width 13px
          height 22px
          background url(https://static.360buyimg.com/finance/base/1.2.0/css/i/topbar-app.png)
          background-repeat no-repeat
          background-position -105px 0
        a
          padding-left 28px
        .mobile-finance-icon2
          background url(https://static.360buyimg.com/finance/base/1.2.0/css/i/topbar-arrow.png?20170522)
          background-repeat no-repeat
          width 8px
          height 4px
          overflow hidden
          position absolute
          right 5px
          top 15px
          z-index 100
        .mobile-finance-list
          position absolute
          top 30px
          left -147px
          width 420px
          border-radius 3px
          background-color #fff
          box-shadow 0 1px 3px rgba(0,0,0,.2)
          .list-img
            float left
            width 140px
            padding 20px 0 15px
            text-align center
            a
              border none
              padding 0px
      .menu-li-service
        width 84px
        .service-icon
          background url(https://static.360buyimg.com/finance/base/1.2.0/css/i/topbar-arrow.png?20170522)
          background-repeat no-repeat
          width 8px
          height 4px
          overflow hidden
          position absolute
          right 5px
          top 15px
          z-index 100
        span
          border-left 1px solid #5e5e5e
          color #a5a5a5
          padding 0 10px
        .service-list
          position absolute
          top 30px
          right 0px
          width 84px
          border-radius 0px 0px 3px 3px
          background-color #fff
          box-shadow 0 1px 3px rgba(0,0,0,.2)
          text-align center
          li
            float none
            a
              border none
      .menu-li-website
        .website-icon
          width 8px
          height 4px
          overflow hidden
          background url(https://static.360buyimg.com/finance/base/1.2.0/css/i/topbar-arrow.png?20170522)
          position absolute
          right -5px
          top 15px
          z-index 100
        .website-list
          width 1083px;
          padding 40px 50px 30px 0
          font-size 14px
          border-radius 3px
          opacity .99
          box-shadow 0 1px 3px rgba(0,0,0,.2)
          position absolute
          right -1px
          top 30px
          background-color: #fff
          border 1px solid #e6e6e6
          display flex
          a
            border none
          li
            flex 1
            text-align left
            border-right 1px solid #f6f6f6
            margin-left 50px
            height 100%
            line-height inherit
            // float left
            dl
              dt
                display block
                font-weight 700
                color #323232
                position relative
                margin-bottom 20px
                span
                  font-weight bold
                .list-icon
                  width 25px
                  height 2px
                  overflow hidden
                  background #f52f3e
                  position absolute
                  left 0
                  top 28px
              dd
                clear both
                text-align left
                font-size 14px
                div
                  width 100px
                .list-left
                  float left
                  a
                    font-size 14px
                    color #5e5e5e
                    display block
                    white-space nowrap
                    padding 0
                    line-height 35px
                    margin-right 50px
                .list-right
                  float left
                  a
                    font-size 14px
                    color #5e5e5e
                    display block
                    white-space nowrap
                    padding 0
                    line-height 35px
                    margin-right 50px
                    .right-icon
                      display inline-block
                      width 25px
                      height 9px
</style>
