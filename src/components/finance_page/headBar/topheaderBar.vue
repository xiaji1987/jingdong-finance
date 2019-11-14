<template>
  <div class="headerBar">
    <div class="headerBarImg">
      <router-link to="http://jr.jd.com/">
        <img src="http://storage.360buyimg.com/base/images/jdjr-logo/logo-jr-r.png?20181203">
      </router-link>
    </div>
    <ul class="headerBarUl">
      <li class="headerList" v-for="(item, index) in ArrFir" :key="index" @mouseover="listInto(index)" @mouseleave="listOut(index)">
        <router-link :to="`${item.src}`">{{item.titleName}}</router-link>
        <div class="listItem"  v-show="item.list" :class="index == MouseIndex ? 'disListItem' : ''">
          <dl v-for="(pro, indexList) in item.list" :key="indexList">
            <dt>{{pro.title}}
              <i class="itemIcon"></i>
            </dt>
            <dd>
              <ul>
                <li v-for="(ddd, indexpro) in pro.itemList" :key="indexpro">
                  <router-link :to="`${ddd.src}`">{{ddd.title}}</router-link>
                </li>
              </ul>
            </dd>
          </dl>
          <div class="itemImg" v-for="(img, indexImg) in item.img" :key="indexImg + 'img'">
            <router-link :to="`${img.src}`">
              <img :src="`${img.imgSrc}`">
            </router-link>
          </div>
        </div>
      </li>
      <div class="listVertical"></div>
    </ul>
    <div class="headerBarInput">
      <input type="text" placeholder="小白基金" class="select">
      <router-link to="javascript:" class="search-btn"></router-link>
    </div>
    <div class="headerBarInfo">
      <div class="infoAsset">
        <i class="assetIcon1"></i>
        <router-link to="http:////trade.jr.jd.com/centre/browse.action">我的资产</router-link>
        <i class="assetIcon2"></i>
      </div>
      <div class="infoAll"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      MouseIndex: ''
    }
  },
  computed: {
    ...mapGetters({
      ArrFir: 'headerBar/getArrFir'
      // ArrSec: 'headerBar/getArrSec'
    })
  },
  methods: {
    listInto (index) {
      // console.log(index)
      // $event.currentTarget.className = '.headerList .block'
      this.MouseIndex = index
      // console.log(this.MouseIndex)
    },
    listOut (index) {
      // console.log(index)
      this.MouseIndex = ''
    }
  },
  created () {
    this.$store.dispatch('headerBar/getAllHeaderBar')
  }
}
</script>

<style scope lang="stylus">
.headerBar
  padding-top 30px
  height 71px
  border-color transparent
  width 1200px
  margin 0 auto
  position relative
  .headerBarImg
    float left
    width 200px
    height 70px
    margin-top 10px
    img
      width 172px
      height 56px
      z-index -1
  .headerBarUl
    display flex
    float left
    margin 20px 0 0 10px
    font-size 16px
    width 685px
    .headerList:nth-child(1)
      a
        color #ff5256
        font-weight 700
    .headerList:nth-child(7)
      width 76px
    .headerList:nth-child(8)
      margin-left 50px
      width 76px
    .headerList:nth-child(9)
      width 76px
    .headerList:nth-child(10)
      width 76px
    .block
      display block
    .headerList
      width 55px
      height 37.6px
      text-align center
      line-height 35px
      a
        font-weight 700
        color #000
      .listItem
        position absolute
        top 82px
        left 0
        width 100%
        min-height 160px
        text-align left
        padding 20px 0 30px
        box-shadow 0 0 15px rgba(0,0,0,.1)
        background-color #fff
        border 1px solid #e6e6e6
        border-radius 0 3px 3px
        z-index 100
        display none
        dl
          width 126px
          overflow hidden
          float left
          margin-left 40px
          dt
            position relative
            font-size 14px
            font-weight 700
            color #323232
            margin-bottom 10px
            .itemIcon
              position absolute
              width 30px
              height 2px
              background #323232
              overflow hidden
              left 0
              top 36px
          li
            height 36px
            line-height 36px
            a
              display inline
              margin-right 16px
              position relative
              white-space nowrap
              line-height 30px
              height 30px
              font-size 14px
              text-align left
              font-weight normal
        .itemImg
          position absolute
          right 0
          margin 10px 30px 0 0
          img
            vertical-align: top;
      .disListItem
        display block
    .listVertical
      width 1px
      height 18px
      border-left 1px solid #000
      position absolute
      left 53.5%
      top 50%
      margin-top 8px
  .headerBarInput
    float left
    width 170px
    height 36px
    margin 17px 0 0 10px
    position relative
    .select
      background #29261f
      color #a5a5a5
      border-color #29261f
      opacity .5
      width 124px
      height 34px
      line-height 34px
      padding 0 34px 0 10px
      border 1px solid #e6e6e6
      font-size 14px
      border-radius 4px
      outline none
    .search-btn
      position: absolute
      right 0
      bottom 0
      display block
      width 34px
      height 34px
      background url(https://static.360buyimg.com/finance/base/1.2.0/css/i/search-bg.png) no-repeat
      cursor pointer
  .headerBarInfo
    float right
    padding-top 17px
    position relative
    .infoAsset
      background none
      width 94px
      padding-left 29px
      height 34px
      line-height 34px
      border 1px solid #e6e6e6
      border-radius 3px
      position relative
</style>
