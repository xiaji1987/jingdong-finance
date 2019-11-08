<template>
  <div>
    <headerBar />
    <headerMenu />
    <midInfo />
  </div>
</template>

<script>
import headerBar from '@/components/finance_page/headBar/headBar'
import headerMenu from '@/components/finance_page/headerMenu/headerMenu'
import midInfo from '@/components/finance_page/midInfo/midInfo'
export default {
  name: 'jd_Finance',
  components: {
    headerBar,
    headerMenu,
    midInfo
  }
}
</script>

<style scoped>

</style>
