<template>
  <div class="menuRight">
    <div class="rightTop">
      <div class="topLogin">
        <router-link to="/login" class="loginLink">
          <div class="loginImg">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkRFM0RERDJEMTlEODExRTdBNzA5OTk3NzMwNTBCOTgxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkRFM0RERDJFMTlEODExRTdBNzA5OTk3NzMwNTBCOTgxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6REUzREREMkIxOUQ4MTFFN0E3MDk5OTc3MzA1MEI5ODEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6REUzREREMkMxOUQ4MTFFN0E3MDk5OTc3MzA1MEI5ODEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4QmZSzAAALDklEQVR42sxb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">
          </div>
          <div class="loginInfo">
            <div class="loginNickName">HI，欢迎回来</div>
            <div class="loginText">
              <router-link to="/login" class="textLink">登录京东账号></router-link>
            </div>
          </div>
        </router-link>
      </div>
      <div class="topMid">
        <div class="rightReco" v-for="(item, index) in data.info" :key="index" :style="`background: url(${getBgc(index)})`">
          <router-link :to="`${item.linkUrl}`">
            <div class="recoTitle">
              {{item.name}}
              <i>|</i>
              {{item.typeName}}
            </div>
            <div class="recoSub">
              {{item.contents[0]}}
              <i>%</i>
              <span>{{item.contents[1]}}</span>
            </div>
            <div class="recoText">
              <span>{{item.contents[2]}}</span>
              <span>{{item.contents[3]}}</span>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <div class="rightBottom">
      <div class="bottomIcon">
        <ul v-for="(item, index) in dataIcon" :key="index">
          <li v-for="(icon, index) in item" :key="index + 'icon'">
            <router-link :to="`${icon.linkUrl}`">
              <div :style="`background: url(${icon.imageUrl})`" class="iconImg"></div>
              <div class="iocnText">{{icon.name}}</div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapState({
      data: state => state.menuRight.data
    }),
    ...mapGetters({
      dataIcon: 'menuRight/getBottomIcon'
    })
  },
  methods: {
    getBgc (index) {
      return index === 0 ? '//static.360buyimg.com/finance/index/3.0.0/static/img/recommen-1.fb10a7f.png' : '//static.360buyimg.com/finance/index/3.0.0/static/img/recommen-2.93bc329.png'
    }
  },
  created () {
    this.$store.dispatch('menuRight/getAllMenuRight')
  }
}
</script>

<style scoped lang="stylus">
.menuRight
  width 270px
  position absolute
  left 1090px
  top 30px
  .rightTop
    height 370px
    background-color #f6f8fc
    .topLogin
      padding 30px 0 19px 30px
      height 60px
      .loginLink
        text-decoration none
        color #323232
        .loginImg
          width 60px
          height 60px
          float left
          img
            width 100%
            height 100%
        .loginInfo
          margin 5px 0 0 10px
          line-height 22px
          float left
          line-height 22px
          .loginNickName
            font-size 16px
            color #000
            margin-bottom 4px
          .loginText
            .textLink
              color #323232
              font-size 12px
    .topMid
      margin-top -10px
      .rightReco
        clear both
        width 250px
        height 125px
        margin 10px 0 0 10px
        border-radius 3px
        text-shadow 0 4px 10px rgba(0,0,0,.4)
        a
          padding 15px 0 0 15px
          display block
          color #f5dfce
          .recoTitle
            font-size 16px
            font-weight 700
            color #ffefdf
            i
              position absolute
              top 2px
              left -4px
              font-size 12px
              font-style normal
          .recoSub
            padding-top 5px
            font-size 36px
            font-weight 400
            i
              margin-left -10px
              font-style normal
              font-size 16px
            span
              font-size 14px
              margin-left 10px
          .recoText
            font-size 14px
            padding-top 15px
            span
              font-size 14px
  .rightBottom
    width 270px
    height 160px
    position relative
    background #f6f8fc
    .bottomIcon
      width 100%
      height 100%
      position relative
      ul:nth-child(2)
        z-index -1
      ul
        float left;
        overflow hidden
        padding-left 10px
        position absolute
        height 138px
        bottom 0
        padding-top 12px
        background #f6f8fc
        li
          float left
          font-size 12px
          text-align center
          width 64px
          position relative
          margin-bottom 14px
          height 53px
          a
            display block
            .iconImg
              margin 4px 0
              display inline-block
              width 26px
              height 26px
              overflow hidden
            .iocnText
              color #323232
              text-align center
</style>
