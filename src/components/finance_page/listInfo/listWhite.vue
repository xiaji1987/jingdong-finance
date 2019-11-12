<template>
  <div class="listWhite">
    {{data}}
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'listWhite',
  computed: {
    ...mapState({
      data: state => state.listWhite.data
    })
  },
  created () {
    this.$store.dispatch('listWhite/getAllListWhite')
    // this.$emit('getInfo', this.data)
  }
}
</script>

<style>

</style>
