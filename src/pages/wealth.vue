<template>
  <div>
    <headerBarBottom />
    <wealthMenu />
    <wealthFanc />
    <wealthList />
  </div>
</template>

<script>
import headerBarBottom from '@/components/wealth/headerBarBottom'
import wealthMenu from '@/components/wealth/wealthMenu'
import wealthFanc from '@/components/wealth/wealthFanc'
import wealthList from '@/components/wealth/wealthList'
export default {
  components: {
    headerBarBottom,
    wealthMenu,
    wealthFanc,
    wealthList
  }
}
</script>

<style>

</style>
