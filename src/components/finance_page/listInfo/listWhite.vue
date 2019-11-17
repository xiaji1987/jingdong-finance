<template>
  <div class="listWhite">
    <div class="listTop">
      <div class="topTitle">
        <b>你想要的即刻拥有</b>
        <span>白条提供了3-24期分期服务，年轻不留白</span>
      </div>
      <div class="topContext" v-if="dataTop[shopIndex]" @mouseenter="enterIsOn" @mouseleave="leaveIsOn">
        <div class="conImg">
          <router-link :to="dataTop[shopIndex].linkUrl">
            <img :src="dataTop[shopIndex].imageUrl">
          </router-link>
        </div>
        <div class="conInfo">
          <div class="conTitle">
            <router-link :to="dataTop[shopIndex].linkUrl">{{dataTop[shopIndex].name}}</router-link>
          </div>
          <div class="conPrice">
            京东价:
            <del>￥{{dataTop[shopIndex].price}}</del>
          </div>
          <div class="conClear">
            打白条:
            <span :class="index == clickIndex ? 'clickOn' : ''" v-for="(item, index) in priceList" :key="index" @click="clickPrice(index)">{{item}}</span>
          </div>
          <div class="conBtn">
            <router-link class="btn" :to="dataTop[shopIndex].linkUrl">打白条￥{{getPrice}}
              <span v-if="clickIndex != 0">x{{priceTime[clickIndex]}}期</span>
            </router-link>
          </div>
        </div>
      </div>
      <div class="topTab">
        <ul>
          <li v-for="(item) in dataTop.length" :key="item" @mouseenter="changeShop(item)">
            <div class="tabLi" :class="item - 1 == shopIndex ? 'tabLiIsOn' : ''"></div>
          </li>
        </ul>
      </div>
    </div>
    <div class="listBottom">
      <div class="bottomList" v-for="(item, index) in dataBottom" :key="index">
        <router-link to="">
          <div class="listImg" :style="`background: url(${bgcImg[index]})`">
            <img :src="`${item.imageUrl}`">
          </div>
          <div class="listCon">
            <div class="conTitle">{{item.name}}</div>
            <div class="conSub">{{item.subName}}</div>
          </div>
        </router-link>
      </div>
    </div>
    <div class="listTitle">
      <router-link class="bottomTo" v-for="(item, index) in dataBottom.navInfos" :key="index" :to="item.url">
        {{item.name}}
        <span>/</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'listWhite',
  data () {
    return {
      shopIndex: 0,
      clickIndex: 0,
      priceList: ['不分期', '3期免息', '6期免息', '12期免息', '24期'],
      priceTime: [1, 3, 6, 12, 24],
      timer: null,
      bgcImg: ['data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJIAAABkCAIAAADi0v7dAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjczNTExMkRCMjQwODExRTdBMTgwRkQ0NzI5Rjk5MjdGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjczNTExMkRDMjQwODExRTdBMTgwRkQ0NzI5Rjk5MjdGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NzM1MTEyRDkyNDA4MTFFN0ExODBGRDQ3MjlGOTkyN0YiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NzM1MTEyREEyNDA4MTFFN0ExODBGRDQ3MjlGOTkyN0YiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz48ry9WAAAJ0klEQVR42uyd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',
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJMAAABkCAIAAAANEJXjAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjM2NzZCNzBGMjQwQjExRTdCQkFCRDgzRTZENTU5NDQ1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjM2NzZCNzEwMjQwQjExRTdCQkFCRDgzRTZENTU5NDQ1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MzY3NkI3MEQyNDBCMTFFN0JCQUJEODNFNkQ1NTk0NDUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MzY3NkI3MEUyNDBCMTFFN0JCQUJEODNFNkQ1NTk0NDUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7xORMiAAAG6UlEQVR42uyc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'
      ]
    }
  },
  computed: {
    ...mapState({
      dataInfo: state => state.listWhite.dataInfo,
      dataTop: state => state.listWhite.dataTop,
      dataBottom: state => state.listWhite.dataBottom
    }),
    getPrice () {
      var price = this.dataTop[this.shopIndex].price / this.priceTime[this.clickIndex]
      return price.toFixed(2)
    }
  },
  created () {
    this.$store.dispatch('listWhite/getAllListWhite')
    this.timer = setInterval(() => {
      this.shopIndex++
      if (this.shopIndex === this.dataTop.length) {
        this.shopIndex = 0
      }
    }, 5000)
  },
  methods: {
    clickPrice (index) {
      this.clickIndex = index
    },
    enterIsOn () {
      clearInterval(this.timer)
    },
    leaveIsOn () {
      this.timer = setInterval(() => {
        this.shopIndex++
        if (this.shopIndex === this.dataTop.length) {
          this.shopIndex = 0
        }
      }, 5000)
    },
    changeShop (index) {
      this.shopIndex = index - 1
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../../../style/changeColor.styl'
@import '../../../style/changePosition.styl'
.listWhite
  float right
  width 730px
  margin-top 120px
  margin-right 100px
  position relative
  .listTop
    height 310px
    background-color #ffffff
    .topTitle
      padding 30px 0 0 40px
      b
        font-size 24px
        margin-right 20px
        color #323232
        font-weight bold
      span
        font-size 14px
        color #323232
    .topContext
      margin 20px 0 0 40px
      position relative
      height 215px
      background-color #fff
      .conImg
        float left
        width 190px
        height 190px
        img:hover
          changeMoveTop()
      .conInfo
        margin-left 30px
        float left
        width 435px
        .conTitle
          padding-top 10px
          font-size 18px
          font-weight 700
          white-space nowrap
          overflow hidden
          text-overflow ellipsis
        .conPrice
          margin 15px 0
          color #5e5e5e
        .conClear
          margin 15px 0
          color #5e5e5e
          span
            cursor pointer
            padding 4px 12px
            border 1px solid #f52f3e
            color #f52f3e
            margin-right 2px
            font-size 14px
          .clickOn
            color #ffffff
            background-color #ff4c22
            background-repeat repeat-y
            background-image linear-gradient(left,#ff4c22,#f52f3e)
        .conBtn
          padding-left 60px
          padding-top 20px
          .btn
            display block
            width 220px
            height 40px
            line-height 40px
            text-align center
            font-size 16px
            color #fff
            font-weight: 700
            background-color #ff4c22
            background-repeat repeat-y
            background-image -webkit-linear-gradient(left,#ff4c22,#f52f3e)
            border-radius 50px
    .topTab
      position absolute
      top 280px
      right 30px
      li
        width 16px
        height 20px
        float left
        cursor pointer
        .tabLi
          width 10px
          height 10px
          background rgba(0,0,0,.3)
          display block
          border-radius 5px
          margin-top 5px
          margin-left 3px
        .tabLiIsOn
          background rgba(0,0,0,.7)
  .listBottom
    clear both
    margin-top 10px
    width 100%
    .bottomList
      width 360px
      height 100px
      float left
      background rgb(255, 255, 255)
      box-shadow rgba(0, 0, 0, 0.3) 0px 5px 10px
      .listImg
        height 100px
        width 140px
        float left
        position relative
        img:hover
          changeMoveTop()
      .listCon
        float left
        line-height 28px
        .conTitle
          padding-top 25px
          font-size 18px
          font-weight 700
        .conTitle:hover
          changeColor(#f52f3e)
        .conSub
          color #f52f3e
    .bottomList:nth-child(2)
      margin-left 10px
  .listTitle
    color #ffffff
    clear both
    padding-top 15px
    .bottomTo
      color #fff
      span
        color #ffffff
    .bottomTo:hover
      changeColor(#f52f3e)
</style>
