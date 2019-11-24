<template>
  <div>
    <headerBar />
    <headerBarBottom />
    <wealthMenu />
  </div>
</template>

<script>
import headerBar from '@/components/finance_page/headBar/headBar'
import headerBarBottom from '@/components/wealth/headerBarBottom'
import wealthMenu from '@/components/wealth/wealthMenu'
export default {
  components: {
    headerBar,
    headerBarBottom,
    wealthMenu
  }
}
</script>

<style>

</style>
