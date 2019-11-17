<template>
  <div class="listBgc">
    <div class="list" v-for="item in 6" :key="item" :style="`background: url(${bgcImg[item - 1]}) no-repeat bottom`">
        <div class="listImg">
          <div class="Img" v-show="item == 1 || item == 2" :style="`background: url(${listImg[item - 1].img}) no-repeat; background-position: top`"></div>
          <div class="listContext" v-show="item !== 0 || item !== 1">
            <div class="conTitle">
              <router-link to="javascript:;" class="titleTo">
                <div class="title">{{listImg[item - 1].title}}</div>
                <div class="titleSub">{{listImg[item - 1].titleSub}}</div>
              </router-link>
              <div class="context">
                {{listImg[item - 1].context}}
              </div>
            </div>
          </div>
          <div class="listBtn">
            <router-link class="btnTo" to="jsvascropt:;">
              <div class="btnContext">
                <div class="btnTitle">{{listImg[item - 1].name}}</div>
                <span>{{listImg[item - 1].sub}}</span>
              </div>
            </router-link>
          </div>
        </div>
      <component :is="route[item - 1]"></component>
    </div>
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
      route: ['listTrans', 'listWhite', 'listFund', 'listInsu', 'listPay', 'listShare'],
      listImg: [
        {
          img: 'https://static.360buyimg.com/finance/index/3.0.0/static/img/xjk-slogan.2a5cec3.png',
          name: '立即转入',
          sub: '闲钱管理工具'
        },
        {
          img: 'https://static.360buyimg.com/finance/index/3.0.0/static/img/bt-slogan.5a1155a.png',
          name: '激活白条',
          sub: '送百元礼包+12期免息'
        },
        {
          title: '好玩',
          titleSub: '抢鲜尝',
          context: '京东众筹 与众不同',
          name: '众筹优选',
          sub: '奇特好物 低价抢鲜+12期免息'
        },
        {
          title: '保障',
          titleSub: '新时代',
          context: '京东保险 未雨绸缪',
          name: '大地车险',
          sub: '服务好 万元以下当天赔'
        },
        {
          title: '支付',
          titleSub: '惠生活',
          context: '京东支付 安全快捷',
          name: '京东支付',
          sub: '多种支付产品任你选择'
        },
        {
          title: '牛人',
          titleSub: '选牛股',
          context: '京东股票 超低佣金',
          name: '立即开户',
          sub: '166%翻倍牛人'
        }
      ]
    }
  },
  components: {
    listTrans,
    listWhite,
    listFund,
    listInsu,
    listPay,
    listShare
  },
  methods: {
    getALlInfo (data) {
      console.log(data)
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../../../style/changePosition.styl'
.listBgc
  .list
    height 640px
    position relative
    .listImg
      height 640px
      width 460px
      text-align center
      position absolute
      left 100px
      .Img
        height 100%
        margin 20px 0 70px
      .listBtn
        display inline-block
        position absolute
        top 450px
        left 110px
        .btnTo
          width 220px
          height 56px
          background-color #ff4c22
          background-repeat repeat-y
          background-image linear-gradient(left, #ff4c22, #f52f3e)
          display inline-block
          text-align center
          color #ffffff
          border-radius 50px
          position relative
          .btnContext
            .btnTitle
              font-size 16px
              padding-top 8px
              font-weight 700
            span
              font-size 12px
              opacity .7
      .listBtn:hover
        changeMoveTop()
      .listContext
        color #ffffff
        text-shadow 0 5px 5px rgba(0,0,0,.3)
        margin-top 100px
        .titleTo
          color #ffffff
          .title
            font-size 120px
          .titleSub
            font-size 80px
            margin-top 10px
        .context
          margin-top 20px
          color #ffffff
          font-size 20px
          padding 20px 0 80px
</style>
