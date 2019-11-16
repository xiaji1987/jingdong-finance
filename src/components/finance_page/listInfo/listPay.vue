<template>
  <div class="listPay">
    <div v-if="dataAll">
      <div class="payList" v-if="dataAll" @mouseenter="enterIsOn" @mouseleave="leaveIsOn">
        <router-link to="">
          <img :src="dataAll[changIndex].imageUrl">
        </router-link>
      </div>
      <div class="btn">
        <ul>
          <li v-for="(item) in dataAll.length" :key="item" @mouseenter="changeShop(item)">
            <div class="tabLi" :class="item - 1 == changIndex ? 'tabLiIsOn' : ''"></div>
          </li>
        </ul>
      </div>
    </div>
    <router-link to="" class="img"></router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'listPay',
  data () {
    return {
      changIndex: 0,
      timer: null
    }
  },
  computed: {
    ...mapState({
      dataAll: state => state.listPay.dataAll.adElements
    })
  },
  created () {
    this.$store.dispatch('listPay/getAllListPay')
    this.timer = setInterval(() => {
      this.changIndex++
      if (this.changIndex === this.dataAll.length) {
        this.changIndex = 0
      }
    }, 5000)
  },
  methods: {
    enterIsOn () {
      clearInterval(this.timer)
    },
    leaveIsOn () {
      this.timer = setInterval(() => {
        this.changIndex++
        if (this.changIndex === this.dataAll.length) {
          this.changIndex = 0
        }
      }, 5000)
    },
    changeShop (index) {
      this.changIndex = index - 1
    }
  }
}
</script>

<style scoped lang="stylus">
.listPay
  float right
  margin-right 550px
  margin-top 110px
  position relative
  .payList
    width 280px
    height 420px
    background #323232
    position relative
    color #fff
    box-shadow 0 5px 12px rgba(0,0,0,.4)
  .btn
      position absolute
      top 390px
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
          background #fff
  .img
    width 450px
    height 380px
    position absolute
    left 280px
    top 20px
    box-shadow 0 5px 12px rgba(0,0,0,.4)
    background url(//static.360buyimg.com/finance/index/3.0.0/static/img/pay-process.49708d9.png) no-repeat top
</style>
