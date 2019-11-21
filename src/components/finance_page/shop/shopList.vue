<template>
  <div class="shopList">
    <ul>
      <li v-for="(item, index) in dataList" :key="index">
        <router-link class="listTo" :to="item.linkUrl">
          <img :src="item.imageUrl">
        </router-link>
        <div class="listText">
          <div class="listName">
            <router-link class="nameTo" :to="item.linkUrl">{{item.name}}</router-link>
          </div>
          <div class="listIcon">
            <div class="iconBlack"  v-if="item.process >= 80"  :style="`width: ${item.process >= 100 ? 100 : item.process}%`"></div>
            <div class="icongreen" v-else :style="`width: ${item.process}%`"></div>
          </div>
          <div class="listContext">
            <div class="con">
              <div class="value">{{item.process}}%</div>
              <div class="text">已达</div>
            </div>
            <div class="con">
              <div class="value">￥{{item.amount}}</div>
              <div class="text">已筹</div>
              <span class="icon"></span>
            </div>
            <div class="con">
              <div class="value">{{item.remainTime}}</div>
              <div class="text">剩余时间</div>
              <span class="icon"></span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'shopList',
  data () {
    return {
      index: 0,
      page: 1
    }
  },
  computed: {
    ...mapState({
      dataList: state => state.shopList.dataList
    })
  },
  created () {
    this.$store.dispatch('shopList/getAllShopList', this.page)
    // window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      var shopList = document.querySelector('.shopList')
      if (shopList.getBoundingClientRect().bottom <= -446.1) {
        if (this.page === 5) {
          return
        }
        this.page++
        this.$store.dispatch('shopList/getAllShopList', this.page)
      }
    }
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped lang="stylus">
@import '../../../style/changeColor.styl'
@import '../../../style/changeScale.styl'
.shopList
  width 1250px
  font-size 14px
  color #323232
  padding-top 240px
  overflow hidden
  li
    float left
    width 280px
    height 350px
    background #fff
    box-shadow 0 5px 12px rgba(0,0,0,.1)
    margin 0 27px 30px 0
    .listTo
      width 100%;
      display block
      height 220px
      overflow hidden
      img
        transition all 1s ease
        &:hover
          changeScaleUp()
    .listText
      padding 15px
      .listName
        .nameTo
          display block
          font-weight bold
        .nameTo:hover
          changeColor(#f52f3e)
      .listIcon
        margin-top 15px
        position relative
        background #e6e6e6
        height 8px
        border-radius 10px
        .iconBlack
          height 8px
          border-radius 10px
          background-image linear-gradient(left,#a018d3,#fe30ae)
        .icongreen
          height 8px
          border-radius 10px
          background-image linear-gradient(left,#39e9c9,#19dce4)
      .listContext
        padding-top 15px
        .con:nth-child(1)
          width 30%
        .con:nth-child(2)
          width 45%
        .con:nth-child(3)
          width 25%
        .con
          float left
          position relative
          .value
            font-size 16px
            margin-bottom 5px
          .text
            color #a5a5a5
            font-size 12px
          .icon
            height 100%
            position absolute
            border-right 1px solid #e5e5e5
            top 0
            left -15px
</style>
