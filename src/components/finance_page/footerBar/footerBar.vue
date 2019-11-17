<template>
  <div class="footerBar">
    <div class="barText">
      <router-link class="textTo" to="" v-for="item in text" :key="item">{{item}}
        <span>|</span>
      </router-link>
    </div>
    <div class="barCon">
      Copyright © 2004-2018 京东JD.com 版权所有
      <span>|</span>
      投资有风险，购买需谨慎
    </div>
  </div>
</template>

<script>
export default {
  name: 'footerBar',
  data () {
    return {
      text: ['关于京东金融', '关于京东小金库', '关于京东白条', '京东数科', '知识产权', '免责声明', '金融联盟', '平台协议', '隐私政策', '联系客服', '营业执照']
    }
  }
}
</script>

<style scoped lang="stylus">
.footerBar
  background #323232
  height 120px
  padding-bottom 15px
  width 100%
  position relative
  .barText
    position absolute
    left 160px
    top 35px
    .textTo
      color #b3b5ba
      font-size 12px
    span
      color #5a606e
      margin 0 10px
  .barCon
    position absolute
    left 160px
    top 70px
    color #b3b5ba
    font-size 12px
    span
      color #5a606e
      margin 0 10px
</style>
