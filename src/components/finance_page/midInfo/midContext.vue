<template>
  <div class="midContext">
    <div class="contextLeft">
      <div class="leftMeb">
        <div class="leftTitle">
          <h3>会员特权</h3>
          <span>比你更爱你自己</span>
        </div>
        <router-link to="http:////vip.jr.jd.com/?from=jrshouyelc" class="leftImg">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMQAAAB+CAYAAAB79754AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkMwRjk2RDVCMjlCODExRTc4NzlDQUEyRURFRDM5NzRGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkMwRjk2RDVDMjlCODExRTc4NzlDQUEyRURFRDM5NzRGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QzBGOTZENTkyOUI4MTFFNzg3OUNBQTJFREVEMzk3NEYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QzBGOTZENUEyOUI4MTFFNzg3OUNBQTJFREVEMzk3NEYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6ihJFWAAAjdklEQVR42uxd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">
          <div class="imgName">MEMBER</div>
          <div class="imgType">金融会员</div>
          <router-link to="http://jrvip.jd.com/" class="imgTo">查看特权 ></router-link>
        </router-link>
        <div class="leftContainer">
          <ul class="containerUl">
            <li class="conLi" v-for="(item, index) in dataLeft.activites" :key="index">
              <router-link v-if="item.linkUrl" :to="`${item.linkUrl}`" class="conA">
                <p>【{{item.tag}}】</p>{{item.name}}
              </router-link>
            </li>
          </ul>
        </div>
        <div class="leftBottom">
          <router-link to="http://jrvip.jd.com/" class="bottomTo">查看更多</router-link>
        </div>
      </div>
      <div class="rightMeb">
        <div class="rightTitle">
          <h3>会员任务</h3>
          <span>完成一个赚一笔</span>
        </div>
        <ul class="rightList">
          <li class="list" v-for="(item, index) in dataMid.missions" :key="index">
            <router-link v-if="item.linkUrl" :to="`${item.linkUrl}`" class="listA">
              <img :src="`${item.icon}`" alt="" class="listImg">
              <div class="listSub" style="background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAKCAYAAACXDi8zAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjcxMDc4MEZDMjM0RDExRTc5QzE0RkEyMzdFMzFCRjkxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjcxMDc4MEZEMjM0RDExRTc5QzE0RkEyMzdFMzFCRjkxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NzEwNzgwRkEyMzREMTFFNzlDMTRGQTIzN0UzMUJGOTEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NzEwNzgwRkIyMzREMTFFNzlDMTRGQTIzN0UzMUJGOTEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5O7GC/AAAAhUlEQVR42mJcunTpRQYGhjdA7AvE3xiggAmI/wOxExCvBWI2ZAkfIL4HxB5AvAyImWEST4DYHUoHA/EcIGZkgeq8A8SeQLwPiBOA+DMTAw4Ak1AB4u1ALArEC4A4HyQhA8Q7oTTIZSkgl4IkNgOxEhDvAOIoIP4LM4oJainIRb9gdgAEGABlahk69KnwRAAAAABJRU5ErkJggg==) 85% 45% no-repeat">
                <div class="subName">{{item.name}}</div>
                <div class="subPrice">{{item.awarkName}}</div>
              </div>
            </router-link>
          </li>
        </ul>
        <div class="rightBottom">
          <router-link to="http://jrvip.jd.com/mission/list" class="bottomTo">查看更多</router-link>
        </div>
      </div>
    </div>
    <div class="contextRight">
      <div class="rightName">京东金融 App</div>
      <div class="rightCon">
        <router-link v-if="dataRightImg.linkUrl" :to="`${dataRightImg.linkUrl}`" class="conImg">
          <img :src="`${dataRightImg.imageUrl}`" alt="">
        </router-link>
      </div>
      <ul class="rightUl">
        <li v-for="(item, index) in dataRightInfo" :key="index">
          <span>·</span>{{item.name}}
        </li>
      </ul>
    </div>
    <div class="contextBottom">
      <div class="bottomCon">
        <div class="conLeftInfo">
          <div class="infoTitle">优惠券中心</div>
          <div class="infoText">一大波优惠券来袭</div>
          <router-link to="http://vip.jr.jd.com/couponCenter/list?from=JDJR" class="infoBtn">领取更多优惠</router-link>
        </div>
        <div class="conList">
          <ul class="conUl">
            <li class="conList" v-for="(item, index) in dataBottom.couponInfos" :key="index" style="background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAACLCAYAAAAK0ffOAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjUxNEU5NjUyMUVBRjExRTc4MkRFOEQ2QjhENzlGMUU0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjUxNEU5NjUzMUVBRjExRTc4MkRFOEQ2QjhENzlGMUU0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NTE0RTk2NTAxRUFGMTFFNzgyREU4RDZCOEQ3OUYxRTQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NTE0RTk2NTExRUFGMTFFNzgyREU4RDZCOEQ3OUYxRTQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4um+NQAAADMklEQVR42uzdX0tTYRzA8eecrTZnUPQ/IhIKgqCgi657A5EX9UICX0jvw8veQ7dFBUEXQt2ppZS4uem20/PoMq2dbVKM0M8HfghnU+GBL895jopZEQVgKjLBgeBAcIDgQHCA4OD/Da67umKF4Iiql6+Uv/Y3nwwcbZPKLRFMj+BAcCA4QHAgOEBwIDgQHCA4EBwgOBAcCA4QHAgOEBwIDhAcCA4EBwgOBAcIDgQHggMEB4IDBAeCAwQHggPBAYIDwQGCA8GB4ADBgeAAwYHgAMGB4EBwgOBAcIDgQHAgOEBwIDhAcCA4EBwgOBAcIDgQHCA4EBwIDhAcCA4QHAgOBAcIDgQHCA4EBwgOBAeCAwQHggMEB4KDExncRumrWRZCUVglmERqJTVTbiMF97a0t+qpUHR3LCRM0lu3G5upjnrLuxTcYmlw9Voo2h0rCZME127HZuqj3rKYFUUxO9jlbg3bInvrayFrzIZ8ZsaKQon+1lYoWs1QOX+h7LZyKc79tMM14zyNszrsDJefPRf6zc04zVD0us50cGBDSk2kNlIjqZWS2FJbz+K00g738+LVOM/jzMeZi/Nrb+z3Q7/VCsV2J36DXqhevDTucAjHPrbu1y8hq1RCdroW8kYjhPzQQ/92nE9xXsZ5EWc5XTx4wtuMsxJnPc71Q8GluNIXix+XHj089H3vfPi8+/Hj3Zuuu37irt9+9Wa/jd/sDFpaHrS1l9Jgh7s3KHFu2JOX/vdvIavV4tT3nsLY3WDvljL2UXTacTq7t5QlTynTTvckzvsUXLqVfB3n2p8nwX7orq+FfPaMhyYw5qFJOsdV00OTfOjvk6Sd7kF6ZWFobOmLtJoxtIbYYIzUSGolNVMibWwLKbjHpTvm9vbuz+KA8dLP4NKt5Qjz+bBz235wvV7I8oqVhEmCi7eSRTyGjXAjBVcfdSj0gAQmLW7s7x7X/bUATPOsZwlAcCA4QHAgOEBwIDgQHCA4EBwgOBAcCA4QHAgOEBwIDhAcCA4EBwgOBAcIDgQHggMEB4IDBAeCAwQHU1cd94bu6opVgn8kK4rR/0EOEBwIDhAcCA4EBwgOjosfAgwAHDNFxGNZCZEAAAAASUVORK5CYII=) no-repeat;">
              <router-link v-if="item.linkUrl" :to="`${item.linkUrl}`" class="listShop">
                <div class="shopPrice">
                  <div class="price">{{item.name}}</div>
                </div>
                <div class="shopInfo">{{item.subName}}</div>
                <div class="shopName">{{item.note}}</div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapState({
      dataLeft: state => state.midContext.dataLeft,
      dataMid: state => state.midContext.dataMid,
      dataBottom: state => state.midContext.dataBottom
    }),
    ...mapGetters({
      dataRightImg: 'midContext/getMidRightImg',
      dataRightInfo: 'midContext/getMidRightInfo'
    })
  },
  created () {
    this.$store.dispatch('midContext/getAllMid')
  }
}
</script>

<style scoped lang="stylus">
.midContext
  width 1200px
  margin 0 auto
  font-size 14px
  height 534px
  position relative
  color #323232
  .contextLeft
    width 920px
    height 345px
    float left
    box-shadow 0 3px 10px rgba(0,0,0,.2)
    background url(//static.360buyimg.com/finance/index/3.0.0/static/img/member-bg.d59898a.png) #fff 100% 100% no-repeat
    position relative
    z-index 1
    .leftMeb
      margin-left 35px
      width 410px
      position relative
      float left
      .leftTitle
        height 22px
        margin-top 30px
        margin-bottom 20px
        h3
          font-size 18px
          font-weight 700
          float left
        span
          float left
          margin-left 10px
          margin-top 5px
      .leftImg
        box-shadow 0 5px 10px rgba(135,142,162,.6)
        clear both
        font-size 12px
        width 196px
        height 126px
        display block
        color #fff
        position relative
        .imgName
          font-size 20px
          position absolute
          left 15px
          top 10px
          font-weight: 400
        .imgType
          position absolute
          left 15px
          top 35px
        .imgTo
          position absolute
          right 15px
          bottom 15px
          color #fff
          font-size 12px
      .leftContainer
        margin-top 20px
        margin-left -6px
        .containerUl
          .conLi
            line-height 30px
            .conA
              color #323232
              font-size 14px
              p
                font-weight bold
                display inline-block
      .leftBottom
        position absolute
        top 300px
        .bottomTo
          font-size 12px
          color #5e5e5e
    .rightMeb
      width 250px
      float left
      margin-left 35px
      position relative
      .rightTitle
        height 22px
        margin-top 30px
        margin-bottom 20px
        h3
          font-size 18px
          font-weight 700
          float left
        span
          float left
          margin-left 10px
          margin-top 5px
      .rightList
        padding-top 22px
        border-top 1px solid #f0f0f0
        .list
          line-height 22px
          height 66px
          .listA
            color #323232
            img
              width 38px
              height 38px
              float left
              margin-right 15px
              margin-top 2px
            .listSub
              width 195px
              float left
              .subName
                font-size 16px
                font-weight normal
              .subPrice
                color #f52f3e
      .rightBottom
        position absolute
        top 300px
        a
          font-size 12px
          color #5e5e5e
  .contextRight
    color #fff
    text-align center
    width 270px
    height 345px
    background url(https://static.360buyimg.com/finance/index/3.0.0/static/img/app-bg.bd4bf86.png) no-repeat
    float right
    position relative
    z-index 1
    box-shadow 0 6px 15px rgba(0,0,0,.2)
    .rightName
      font-size 24px
      font-weight 700
      padding-top 30px
      text-shadow 0 4px 10px rgba(0,0,0,.4)
    .rightCon
      padding-top 20px
      img
        height 135px
        width 135px
        box-shadow 0 6px 15px rgba(0,0,0,.4)
        background #fff
    .rightUl
      float left
      margin 20px 0 0 70px
      li
        clear both
        line-height 22px
        text-align left
        span
          font-size 18px
          float left
          padding-right 2px
          margin-top 2px
  .contextBottom
    position absolute
    width 1160px
    height 189px
    left 20px
    top 20px
    background url(http://static.360buyimg.com/finance/index/3.0.0/static/img/coupon-wrap.d646c1c.jpg) no-repeat
    box-shadow 0 6px 15px rgba(0,0,0,.2)
    padding-top 325px
    .bottomCon
      height 198px
      .conLeftInfo
        color #fff
        margin 0 0 0 30px
        width 190px
        height 189px
        float left
        .infoTitle
          padding-top 40px
          font-size 24px
          font-weight 700
        .infoText
          padding-top 5px
        .infoBtn
          margin-top 20px
          float left
          color #fff
          border 2px solid #fff
          border-radius 30px
          padding 10px 20px
          font-weight 700
      .conList
        margin-top 10px
        float left
        .conUl
          .conList
            float left
            width 220px
            height 139px
            text-align center
            margin-right 10px
            box-shadow 0 5px 10px rgba(0,0,0,.3)
            .listShop
              display block
              height 139px
              .shopPrice
                height 65px
                position relative
                .price
                  font-size 36px
                  position absolute
                  bottom 5px
                  width 100%
                  color #f52f3e
                  font-weight 700
                  text-shadow 0 5px 6px #ffb9b9
              .shopInfo
                font-weight 700
                color #323232
              .shopName
                color #f52f3e
                padding-top 25px
</style>
