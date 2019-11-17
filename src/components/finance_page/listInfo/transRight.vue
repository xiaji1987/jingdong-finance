<template>
  <div class="transRight">
    <div class="rightTitle">
      <span class="title">小金库买理财</span>
      <span class="titleSub">小金库可大额买理财 操作更方便</span>
    </div>
    <div class="rightTab">
      <ul class="tabUl">
        <li v-for="(item, index) in listTab" :key="index" :class="index == clickIndex ? 'ckickOn' : ''" @click="changeIndex(index)">{{item}}</li>
      </ul>
    </div>
    <div class="tabContext" v-if="dataInfo[clickIndex]">
      <div class="list" v-for="(item, index) in dataInfo[clickIndex].data" :key="index" v-show="clickIndex != 3">
        <div class="listTitle">
          <router-link v-if="item.linkUrl" :to="`${item.linkUrl}`">
            <div class="title">{{item.yield}}%</div>
            <div class="titleSub">{{item.yieldDesc}}</div>
          </router-link>
        </div>
        <div class="listTime">
          <router-link v-if="item.linkUrl" :to="`${item.linkUrl}`">
            <div class="time">{{clickIndex==1 ? item.investPeriodName : item.periodOrRiskName}}</div>
          </router-link>
        </div>
        <div class="listCon">
          <router-link v-if="item.linkUrl" :to="`${item.linkUrl}`">
            <div class="con">{{item.name}}</div>
          </router-link>
        </div>
        <div class="listIcon"></div>
      </div>
      <div class="list" v-show="clickIndex == 3" v-if="dataInfo[clickIndex]">
        <router-link v-for="(item, index) in dataInfo[clickIndex].data" :key="index" :to="`${item.linkUrl}`" class="listImg">
          <img :src="`${item.imageUrl}`">
        </router-link>
      </div>
    </div>
    <router-link to="//licai.jd.com/" class="rightMore">查看更多</router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      listTab: ['热销', '小白精选', '基金理财', '特色产品'],
      clickIndex: 0
    }
  },
  computed: {
    ...mapState({
      dataInfo: state => state.listTransSec.dataInfo
    })
  },
  created () {
    this.$store.dispatch('listTransSec/getAllListTransSec')
  },
  methods: {
    changeIndex (index) {
      this.clickIndex = index
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../../../style/changeColor.styl'
@import '../../../style/changePosition.styl'
.transRight
  float left
  padding 40px
  background #fff
  height 340px
  position relative
  .rightTitle
    width 390px
    .title
      font-size 24px
      background-color #4a4f5d
      background-repeat repeat-x
      background-image linear-gradient(top, #4a4f5d, #191b20)
      -webkit-background-clip text
      -webkit-text-fill-color transparent
      font-weight 700
      padding-right 10px
    .titleSub
      font-size 14px
      color #323232
  .rightTab
    margin-top 10px
    .tabUl
      height 53px
      border-bottom 1px solid #f0f0f0
      li
        float left
        padding 15px 20px
        font-size 16px
        font-weight 700
        display block
        border-bottom: 2px solid transparent
        cursor pointer
      .ckickOn
        color #f52f3e
        border-color #f52f3e
      li:hover
        changeColor(#f52f3e)
  .tabContext
    font-size 14px
    color #323232
    .list
      width 100%
      border-bottom 1px solid #f0f0f0
      height 78px
      position relative
      .listTitle
        padding-top 20px
        width 136.8px
        display inline-block
        a
          width 100px
          height 100%
          .title
            font-size 24px
            color #f52f3e
            font-weight bold
          .titleSub
            margin-top 5px
            color #323232
          .titleSub:hover
            changeColor(#f52f3e)
      .listTime
        width 78.4px
        display inline-block
        position relative
        .time
          position absolute
          top -25px
          color #323232
        .time:hover
          changeColor(#f52f3e)
      .listCon
        width 130px
        display inline-block
        position absolute
        top 35px
        .con
          color #323232
          white-space nowrap
          text-overflow ellipsis
          overflow hidden
        .con:hover
          changeColor(#f52f3e)
      .listIcon
        width 6px
        background url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAKCAYAAACXDi8zAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjcxMDc4MEZDMjM0RDExRTc5QzE0RkEyMzdFMzFCRjkxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjcxMDc4MEZEMjM0RDExRTc5QzE0RkEyMzdFMzFCRjkxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NzEwNzgwRkEyMzREMTFFNzlDMTRGQTIzN0UzMUJGOTEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NzEwNzgwRkIyMzREMTFFNzlDMTRGQTIzN0UzMUJGOTEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5O7GC/AAAAhUlEQVR42mJcunTpRQYGhjdA7AvE3xiggAmI/wOxExCvBWI2ZAkfIL4HxB5AvAyImWEST4DYHUoHA/EcIGZkgeq8A8SeQLwPiBOA+DMTAw4Ak1AB4u1ALArEC4A4HyQhA8Q7oTTIZSkgl4IkNgOxEhDvAOIoIP4LM4oJainIRb9gdgAEGABlahk69KnwRAAAAABJRU5ErkJggg==') no-repeat 100%
        height 78px
        float right
        margin-right 5px
      .listImg
        padding-top 20px
        padding-right 5px
        display inline-block
        img
          border-radius 3px
          vertical-align top
    .list:hover
      changeMoveRight()
  .rightMore
    position absolute
    display block
    height 50px
    line-height 50px
    bottom 0
    left 0
    text-align center
    font-size 12px
    width 100%
    color #323232
  .rightMore
    changeColor(#f52f3e)
</style>
