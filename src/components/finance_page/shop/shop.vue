<template>
  <div class="shop">
    <div class="shopContext">
      <shopRem />
      <shopList />
    </div>
  </div>
</template>

<script>
import shopRem from './shopRem'
import shopList from './shopList'
export default {
  name: 'shop',
  components: {
    shopRem,
    shopList
  }
}
</script>

<style scpoed lang="stylus">
.shop
  min-height 640px
  background url(//static.360buyimg.com/finance/index/3.0.0/static/img/moreCrowd-bg.6db3585.jpg) #fff top no-repeat
  width 100%
  padding-bottom 50px
  position relative
  .shopContext
    width 1210px
    margin 0 auto
</style>
