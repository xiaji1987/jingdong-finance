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
        <li class="menu-li-mobile-finance">
          <i class="mobile-finance-icon1"></i>
          <a href="https://m.jr.jd.com/integrate/download/html/pc.html">手机金融</a>
          <i class="mobile-finance-icon2"></i>
          <div class="mobile-finance-list">
            <div class="list-img"></div>
            <div class="list-img"></div>
            <div class="list-img"></div>
          </div>
        </li>
        <li class="menu-li-service" @mouseover="serviceEnter()" @mouseleave="serviceLeave()">
          <span>联系客服</span>
          <i class="service-icon"></i>
          <ul class="service-list" :class="serviceIsShow ? 'service-show' : ''">
            <li>
              <a href="javascript:;">帮助中心</a>
            </li>
            <li>
              <a href="javascript:;">我要吐槽</a>
            </li>
            <li>
              <a href="javascript:;">我的客服</a>
            </li>
            <li>
              <a href="javascript:;">客服邮箱</a>
            </li>
          </ul>
        </li>
        <li class="menu-li-website">
          <a href="javascript:;">网站导航</a>
          <i class="website-icon"></i>
          <ul class="website-list"></ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      islogin: false,
      loginName: 'xiaji1987',
      serviceIsShow: false
    }
  },
  methods: {
    serviceEnter () {
      this.serviceIsShow = true
    },
    serviceLeave () {
      this.serviceIsShow = false
    }
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
      .menu-li-mobile-finance
        margin-right 10px
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
          right -5px
          top 15px
          z-index 100
      .menu-li-service
        margin-right 8px
        .service-icon
          background url(https://static.360buyimg.com/finance/base/1.2.0/css/i/topbar-arrow.png?20170522)
          background-repeat no-repeat
          width 8px
          height 4px
          overflow hidden
          position absolute
          right -5px
          top 15px
          z-index 100
        span
          border-left 1px solid #5e5e5e
          color #a5a5a5
          padding 0 10px
        .service-list
          display none
        .service-show
          display block
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
</style>
