<template>
  <div class="headerMenu">
    <menuPendant />
    <menuLeft />
  </div>
</template>

<script>
import menuLeft from './menuLeft'
import menuPendant from './menuPendant'
export default {
  components: {
    menuLeft,
    menuPendant
  }
}
</script>

<style scoped lang="stylus">
.headerMenu
  height 530px
  position relative
</style>
