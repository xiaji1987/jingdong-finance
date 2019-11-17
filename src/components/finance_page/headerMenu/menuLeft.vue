<template>
  <div class="menuLeft">
    <router-link class="leftTopImg" to="http://m.jr.jd.com/integrate/download/html/pc.html">
      <img src="http://img30.360buyimg.com/jr_image/jfs/t1/14150/35/6062/15643/5c46c17cE25ce7c02/562085930ef1761c.png">
    </router-link>
    <div class="menuList">
      <div class="list">
        <ul class="listUl">
          <li class="listLi" v-for="(item, index) in dataMenu" :key="index">
            <p class="listP">
              <router-link :to="`${item.mainNav.url}`">{{item.mainNav.name}}</router-link>
            </p>
            <p class="listSub"  v-for="(Sub, indexSub) in item.subNav" :key="indexSub + 'Sub'">
              <router-link :to="`${Sub.url}`">{{Sub.name}}</router-link>
            </p>
          </li>
        </ul>
      </div>
    </div>
    <div class="subShow"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      dataMenu: state => state.menuLeft.dataMenu
    })
  },
  created () {
    this.$store.dispatch('menuLeft/getAllMenuLeft')
  }
}
</script>

<style scoped lang="stylus">
@import '../../../style/changePosition.styl'
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
      bottom 0px
      font-size 14px
      color #323232
      width 240px
      z-index 183
      .listUl
        position absolute
        bottom 20px
        font-size 14px
        color #323232
        width 240px
        z-index 183
        .listLi
          padding-left 40px
          height 80px
          font-size 14px
          color #323232
          .listP
            padding-top 15px
            font-size 18px
            padding-bottom 10px
            a
              color #fff
          .listSub
            display block
            a
              float left
              color #a5a5a5
              font-size 14px
              margin-right 10px
</style>
