<template>
  <div>
    <headerBar />
    <headerMenu />
    <midInfo />
    <listInfo />
  </div>
</template>

<script>
import headerBar from '@/components/finance_page/headBar/headBar'
import headerMenu from '@/components/finance_page/headerMenu/headerMenu'
import midInfo from '@/components/finance_page/midInfo/midInfo'
import listInfo from '@/components/finance_page/listInfo/listInfo'
export default {
  name: 'jd_Finance',
  components: {
    headerBar,
    headerMenu,
    midInfo,
    listInfo
  }
}
</script>

<style scoped>

</style>
