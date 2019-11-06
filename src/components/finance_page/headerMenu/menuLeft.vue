<template>
  <div class="menuLeft">
    <a class="leftTopImg" href="http://m.jr.jd.com/integrate/download/html/pc.html">
      <img src="http://img30.360buyimg.com/jr_image/jfs/t1/14150/35/6062/15643/5c46c17cE25ce7c02/562085930ef1761c.png">
    </a>
    <div class="menuList">
      <div class="list"></div>
    </div>
  </div>
</template>

<script>
export default {
  created () {
    this.$store.dispatch('menuLeft/getAllMenuLeft')
  }
}
</script>

<style scoped lang="stylus">
.menuLeft
  width 240px
  height 530px
  background #050501
  position relative
  left 160px
  top 30px
  z-index 2
  // .leftTopImg
  .leftTopImg
    left 15px
    top -20px
    z-index 181
    cursor pointer
    width 210px
    height 134px
    position absolute
  .menuList
    position absolute
    width 240px
    height 471px
    bottom 0
    left 0
    z-index 182
    background url(//static.360buyimg.com/finance/index/3.0.0/static/img/nav-bg.45c130d.png) no-repeat
    .list
      position absolute
      bottom 20px
      font-size 14px
      color #323232
      width 240px
      z-index 183
</style>
