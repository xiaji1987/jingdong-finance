<template>
  <div class="midInfo">
    <infoHeader />
    <midContext />
  </div>
</template>

<script>
import infoHeader from './infoHeader'
import midContext from './midContext'
export default {
  components: {
    infoHeader,
    midContext
  }
}
</script>

<style  scoped lang="stylus">
.midInfo
  background url(//static.360buyimg.com/finance/index/3.0.0/static/img/module-bg.02d907c.jpg) top #f6f8fc no-repeat
  padding-bottom 40px
</style>
