<template>
  <div class="listBgc">
    <div class="list" v-for="item in 6" :key="item" :style="`background: url(${bgcImg[item - 1]}) no-repeat bottom`"></div>
  </div>
</template>

<script>
import listTrans from './listTrans'
import listWhite from './listWhite'
import listFund from './listFund'
import listInsu from './listInsu'
import listPay from './listPay'
import listShare from './listShare'
export default {
  data () {
    return {
      bgcImg: [
        'https://static.360buyimg.com/finance/index/3.0.0/static/img/floor-xjk-bg.94c2411.jpg',
        'https://static.360buyimg.com/finance/index/3.0.0/static/img/floor-bt-bg.2624f55.jpg',
        'https://static.360buyimg.com/finance/index/3.0.0/static/img/crowdfunding-bg.50c4c8e.jpg',
        'https://static.360buyimg.com/finance/index/3.0.0/static/img/insurance-bg.dabf4d7.jpg',
        'https://static.360buyimg.com/finance/index/3.0.0/static/img/jdpay-bg.82b3f77.jpg',
        'https://static.360buyimg.com/finance/index/3.0.0/static/img/stock-bg.a02b80a.jpg'
      ],
      route: ['listTrans', 'listWhite', 'listFund', 'listInsu', 'listPay', 'listShare']
    }
  },
  components: {
    listTrans,
    listWhite,
    listFund,
    listInsu,
    listPay,
    listShare
  }
}
</script>

<style scoped lang="stylus">
.listBgc
  .list
    height 640px
</style>
