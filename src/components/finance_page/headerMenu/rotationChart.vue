<template>
  <div class="block rotationChart">
    <el-carousel :interval="5000" arrow="always" height="370px" class="rotation">
      <el-carousel-item v-for="(item, index) in data" :key="index">
        <a :href="`${item.linkUrl}`">
          <div :style="`background: url(${item.imageUrl})`" class="chart"></div>
        </a>
      </el-carousel-item>
    </el-carousel>
    <el-carousel height="560px" class="bgc" :interval="5000" indicator-position="none">
      <el-carousel-item v-for="(item, index) in data" :key="index">
        <div class="bgcImg" :style="`background: url(${item.bgImageUrl})`"></div>
      </el-carousel-item>
    </el-carousel>
    <div class="rotationBottom">
      <ul>
        <li class="bottomLi" v-for="(item, index) in dataBottom" :key="index">
          <a :href="`${item.linkUrl}`">
            <div class="liImg">
              <img :src="`${item.imageUrl}`">
            </div>
            <div class="liInfo">
              <h3>{{item.name}}</h3>
              <div class="infoSub">
                <i class="Subicon"></i>
              </div>
              <p class="subText">{{item.subName}}</p>
              <p class="subText">{{item.ext1Name}}</p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      data: state => state.rotationChart.data,
      dataBottom: state => state.rotationChart.dataBottom
    })
  },
  created () {
    this.$store.dispatch('rotationChart/getAllRotationChart')
  }
}
</script>

<style scoped lang="stylus">
.rotationChart
  position absolute
  left 400px
  top 30px
  width 690px
  height 530px
  .rotation
    overflow hidden
    .chart
      width 100%
      height 100%
      box-sizing border-box
  .bgc
    position relative
    width 1520px
    left -400px
    top -500px
    z-index -1
    .bgcImg
      height 100%
  .rotationBottom
    width 690px
    height 160px
    background: #fff
    position absolute
    left 0
    top 370px
    .bottomLi
      float left
      margin-left 10px
      margin-top: 20px
      width 210px
      a
        display inline-block
        color #323232
        .liImg
          float left
          height 100px
          width 100px
          margin-top 8px
          margin-right 5px
          img
            width 100px
            height 100px
            vertical-align top
        .liInfo
          float left
          width 105px
          margin-top 10px
          h3
            font-size 18px
            font-weight 700
            overflow hidden
            white-space nowrap
          .infoSub
            margin 11px 0
            .Subicon
              width 20px
              height 2px
              background #f52f3e
              display block
          .subText
            font-size 14px
            line-height 25px
</style>
