<template>
  <div>
    <headerMenu />
    <midInfo />
    <listInfo />
    <shop />
    <footerBar />
    <floatBottom />
  </div>
</template>

<script>
import headerMenu from '@/components/finance_page/headerMenu/headerMenu'
import midInfo from '@/components/finance_page/midInfo/midInfo'
import listInfo from '@/components/finance_page/listInfo/listInfo'
import shop from '@/components/finance_page/shop/shop'
import footerBar from '@/components/finance_page/footerBar/footerBar'
import floatBottom from '@/components/finance_page/footerBar/floatBottom'
export default {
  name: 'jd_Finance',
  components: {
    headerMenu,
    midInfo,
    listInfo,
    shop,
    footerBar,
    floatBottom
  }
}
</script>

<style scoped>

</style>
