<template>
  <div class="menuPendant">
    <ul class="pendantUl">
      <li v-for="(item, index) in data" :key="index">
        <router-link :to="item.linkUrl">
          <img :src="item.imageUrl">
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'menuPendant',
  computed: {
    ...mapState({
      data: state => state.menuPendant.data
    })
  },
  created () {
    this.$store.dispatch('menuPendant/getAllMenuPendant')
  }
}
</script>

<style scoped lang="stylus">
@import '../../../style/changePosition.styl'
.menuPendant
  width 90px
  height 360px
  position absolute
  left 60px
  top 30px
  clear both
  overflow hidden
  .pendantUl
    height 100%
    width 200px
    li
      float left
      width 78px
      margin 6px
      border-radius 5px
      overflow hidden
      box-shadow 0 3px 6px rgba(0,0,0,.2)
      a
        display block
        height 124px
        img
          vertical-align top
    // li:hover
    //   changeMoveTop(-5px)
      // border-radius 0px
</style>
