<template>
  <div class="floatBottom">
    <div class="icon" v-for="item in 4" :key="item" :style="`background-position: ${location[item - 1]}px 0`">
      <i v-if="item == 1"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'floatBottom',
  data () {
    return {
      location: [-168, -420, 0, -42]
    }
  }
}
</script>

<style scoped lang="stylus">
.floatBottom
  position fixed
  right 100px
  bottom 20px
  background-color #ea544a
  z-index 900
  .icon
    width 40px
    height 40px
    border-radius 3px
    margin-top 2px
    background url(https://static.360buyimg.com/finance/base/1.2.0/css/i/sidebar.gif?20180130)
  .icon:hover
    height 80px
    transition all 1s
    cursor pointer
</style>
