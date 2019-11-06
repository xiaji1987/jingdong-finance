<template>
  <div>
    <headerBar />
    <headerMenu />
  </div>
</template>

<script>
import headerBar from '@/components/finance_page/headBar/headBar'
import headerMenu from '@/components/finance_page/headerMenu/headerMenu'
export default {
  name: 'jd_Finance',
  components: {
    headerBar,
    headerMenu
  }
}
</script>

<style scoped>

</style>
