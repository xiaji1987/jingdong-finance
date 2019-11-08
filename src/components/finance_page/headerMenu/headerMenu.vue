<template>
  <div class="headerMenu">
    <menuPendant />
    <menuLeft />
    <rotationChart />
    <menuRight />
  </div>
</template>

<script>
import menuLeft from './menuLeft'
import menuPendant from './menuPendant'
import rotationChart from './rotationChart'
import menuRight from './menuRight'
export default {
  components: {
    menuLeft,
    menuPendant,
    rotationChart,
    menuRight
  }
}
</script>

<style scoped lang="stylus">
.headerMenu
  height 560px
  position relative
  background-color #F7F8FC
  z-index -1
</style>
