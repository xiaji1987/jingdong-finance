<template>
  <div class="listTrans">
    <div class="transLeft">
      <div class="leftTitle">京东小金库</div>
      <div class="leftContext">{{data.servenYield}}
        <span>%</span>
      </div>
      <div class="leftSub">近7日年化收益率</div>
      <div class="leftTrans">
        <span>转入</span>
        <input type="text" maxlength="8" v-model="value">
        <span class="transSub">元</span>
      </div>
      <div class="leftTransMoney">
        可获得收益 <span>{{transMoney}}</span> 元
      </div>
      <a :href="`${data.btnInfo.linkUrl}`" class="leftBtn">{{data.btnInfo.name}}</a>
      <ul class="leftUl">
        <li v-for="(item, index) in data.adInfo" :key="index">
          {{item.name}}
        </li>
      </ul>
    </div>
    <div class="transRight">
      <div class="rightTitle">
        <span class="title"></span>
        <span class="titleSub"></span>
      </div>
      <div class="rightTab">
        <ul class="tabUl">
          <li></li>
        </ul>
      </div>
    </div>
    <div class="transBottom"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'listTrans',
  data () {
    return {
      value: 10000,
      transMoney: 0.84
    }
  },
  computed: {
    ...mapState({
      data: state => state.listTrans.data
    })
  },
  created () {
    this.$store.dispatch('listTrans/getAllListTrans')
  },
  mounted () {
    this.$emit('getInfo', this.data)
  },
  watch: {
    value: function (value) {
      this.transMoney = (value * this.data.servenYield / 100 / 365).toFixed(2)
    }
  }
}
</script>

<style scoped lang="stylus">
.listTrans
  float right
  margin-top 110px
  .transLeft
    color #ffffff
    width 170px
    height 340px
    padding 40px
    background-color #c6a46a
    background-repeat repeat-x
    background-image -webkit-linear-gradient(top, #c6a46a, #876730)
    text-align center
    float left
    margin-right 10px
    .leftTitle
      font-size 24px
      font-weight 700
      text-shadow 0 2px 4px rgba(163,109,17,.2)
    .leftContext
      padding-top 15px
      height 44px
      line-height 48px
      font-size 36px
      text-shadow 0 3px 7px rgba(99,63,0,.35)
      padding-bottom 5px
    .leftSub
      font-size 12px
    .leftTrans
      line-height 32px
      border-bottom 1px solid #cbba9e
      text-align left
      margin-top 10px
      span
        opacity 0.5
      input
        background none
        font-size 24px
        text-align center
        font-weight 400
        color #fff
        width 65%
        vertical-align sub
        outline 0
      .transSub
        float right
    .leftTransMoney
      opacity 0.5
      padding-top 10px
    .leftBtn
      display block
      border 2px solid #fff
      border-radius 80px
      height 36px
      line-height 36px
      color #fff
      font-size 16px
      font-weight 700
      margin-top 30px
    .leftUl
      margin-top 45px
      li
        opacity 0.5
        font-size 12px
        line-height 28px
        text-align center
</style>
