<template>
  <div class="listShare">
    <div class="shareContent" :style="`background: url(${bgcImg}) no-repeat top`">
      <div class="conTop" v-if="dataNum">
        <router-link class="topListTo" to="" v-for="(item, index) in dataNum" :key="index">
          <div class="topTitle">{{item.name}}</div>
          <div class="topNum">
            {{item.current}}
          </div>
          <div class="topChange">
            <span>{{item.change}}</span>
            <span>{{item.changeRange}}</span>
          </div>
        </router-link>
      </div>
      <div class="conMid">
        <ul>
          <li v-for="(item, index) in dataSlice" :key="index">
            <router-link to="">
              <img :src="item.imageUrl">
              <div class="listNum">
                {{item.returnRateM}}
                <span>%</span>
              </div>
              <div class="listMoney">
                <span>月收益最佳</span>
              </div>
              <div class="listName">
                {{item.managerName}}
              </div>
            </router-link>
            <div class="listMan">
              <router-link to="" v-for="(item, index) in dataAll.rateSums" :key="index + 'man'">
                <img :src="item.imageUrl">
              </router-link>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="shareBgc">
      <div class="bgcFir">
        <router-link to="">
          <img src="//img30.360buyimg.com/jr_image/jfs/t5128/29/1353762914/8991/1759e38f/590f061dN90be069f.jpg">
        </router-link>
      </div>
      <div class="bgcText">下载京东股票APP</div>
      <div class="bgcSec"></div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  data () {
    return {
      bgcImg: 'data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjUtYzAyMSA3OS4xNTU3NzIsIDIwMTQvMDEvMTMtMTk6NDQ6MDAgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE0IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpEOUEwNzQ2QjI0RjYxMUU3QjBBODhGRTEzNDVDOUFCMiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpEOUEwNzQ2QzI0RjYxMUU3QjBBODhGRTEzNDVDOUFCMiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkQ5QTA3NDY5MjRGNjExRTdCMEE4OEZFMTM0NUM5QUIyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkQ5QTA3NDZBMjRGNjExRTdCMEE4OEZFMTM0NUM5QUIyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQABgQEBAUEBgUFBgkGBQYJ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',
      time: 0
    }
  },
  computed: {
    ...mapState({
      dataAll: state => state.listShare.dataAll,
      dataNum: state => state.listShare.dataNum
    }),
    ...mapGetters({
      dataSlice: 'listShare/getDataAll'
    })
  },
  created () {
    this.$store.dispatch('listShare/getAllListShare')
  }
}
</script>

<style scoped lang="stylus">
@import '../../../style/changePosition.styl'
.listShare
  float right
  margin-right 100px
  margin-top 110px
  .shareContent
    width 530px
    height 420px
    position relative
    float left
    .conTop
      margin-left 40px
      padding-top 40px
      .topListTo
        color #1aae52
        float left
        width 162px
        .topTitle
          font-size 18px
          color #323232
          padding-left 15px
        .topNum
          font-size 24px
          padding 5px 0 5px 10px
          font-weight bold
        .topChange
          font-size 14px
          font-weight 700
          span
            margin-right 5px
    .conMid
      position absolute
      left 50px
      top 140px
      li
        float left
        width 130px
        height 203px
        background #fff
        box-shadow 0 5px 12px rgba(0,0,0,.1)
        margin-right 10px
        position relative
        padding 20px 30px 0
        img
          width 60px
          height 60px
          border-radius 60px
          box-shadow 0 3px 6px rgba(0,0,0,.2)
        .listNum
          font-size 36px
          color #f52f3e
          line-height 46px
          height 44px
          font-weight bold
          span
            font-size 18px
        .listMoney
          color #ffffff
          padding-top 5px
          span
            padding: 3px 5px
            border-radius 3px
            background-color #ff4c22
            background-repeat repeat-y
            background-image linear-gradient(left,#ff4c22,#f52f3e)
        .listName
          padding-top 10px
          padding-bottom 20px
          height 19px
          overflow hidden
          text-overflow ellipsis
          white-space nowrap
        .listMan
          position absolute
          top 190px
          left 30px
          img
            width 26px
            height 26px
            border-radius 20px
            margin-right 3px
            border: 1px solid #f6f6f6
      li:hover
        changeMoveTop()
  .shareBgc
    float left
    width 200px
    height 420px
    margin-top 20px
    background #f52f3e
    background-color #ff4c22
    background-repeat repeat-x
    background-image linear-gradient(top,#ff4c22,#f52f3e)
    text-align center
    position relative
    .bgcFir
      padding-top 30px
      img
        width 120px
        height 120px
        box-shadow 0 6px 10px rgba(0,0,0,.3)
    .bgcText
      font-size 16px
      color #fff
      padding-top 10px
    .bgcSec
      position absolute
      width 424px
      height 432px
      left -80%
      top 180px
      z-index: 2
      background url(//static.360buyimg.com/finance/index/3.0.0/static/img/stock-app-phone.7e348d2.png) no-repeat
</style>
