<template>
  <div class="headerBottom">
    <ul>
      <li v-for="(item, index) in listData" :key="index" @click="indexChange(index)" :class="index == clickIndex ? 'changeColor' : ''">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      listData: ['财富', '京东小金库', '基金理财', '小白精选'],
      clickIndex: 0
    }
  },
  methods: {
    indexChange (index) {
      this.clickIndex = index
    }
  }
}
</script>

<style scoped lang="stylus">
.headerBottom
  background-color #fff
  height 40px
  line-height 40px
  border-top 1px solid #e6e6e6
  ul
    position absolute
    left 168px
    li
      float left
      margin-right 18px
      color #474e5d
      font-size 14px
      height 40px
      cursor pointer
    .changeColor
      color #ea544a
      position relative
      border-top 1px solid #ea544a
      top -1px
      height 39px
</style>
