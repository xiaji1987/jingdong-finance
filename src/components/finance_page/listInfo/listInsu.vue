<template>
  <div class="listInsu">
    <div class="insuList">
      <ul>
        <li class="list" v-for="(item, index) in dataAll.adElements" :key="index" :style="`background: url(${item.imageUrl}) no-repeat`">
          <router-link to="" class="listTo">
            <div class="listName">{{item.title}}</div>
            <div class="listText">{{item.name}}</div>
            <div class="listCon">
              <span>￥</span>{{item.amount}}
              <span>/{{item.unit}}</span>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="listTitle">
      <router-link class="bottomTo" v-for="(item, index) in dataAll.navInfos" :key="index" :to="item.url">
        {{item.name}}
        <span>/</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'listInsu',
  computed: {
    ...mapState({
      dataAll: state => state.listInsu.dataAll
    })
  },
  created () {
    this.$store.dispatch('listInsu/getAllListInsu')
  }
}
</script>

<style scoped lang="stylus">
.listInsu
  float right
  margin-right 100px
  margin-top 100px
  .insuList
    width 740px
    .list
      float left
      width 360px
      height 205px
      background-color #fff
      background-repeat no-repeat
      background-position 100% 100%
      margin-top 10px
      margin-left 10px
      background-size 100% 100%
      .listTo
        display block
        width 100%
        height 100%
        .listName
          margin-left 40px
          padding-top 40px
          font-weight 700
          font-size 24px
        .listText
          margin 10px 0 0 40px
        .listCon
          margin 30px 0 0 40px
          font-size 36px
          color #f52f3e
          font-weight 700
          span
            font-size 18px
  .listTitle
    color #ffffff
    clear both
    padding 15px 0 0 10px
    .bottomTo
      color #fff
</style>
