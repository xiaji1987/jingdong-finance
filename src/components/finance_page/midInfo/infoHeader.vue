<template>
  <div class="infoHeader">
    <div class="headerImg">
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI4AAAAcCAYAAAC3U4dAAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjFCOUE4N0MyMUREQTExRTc4REVCOEJCMDNBMDI0NzhGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjFCOUE4N0MzMUREQTExRTc4REVCOEJCMDNBMDI0NzhGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MUI5QTg3QzAxRERBMTFFNzhERUI4QkIwM0EwMjQ3OEYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MUI5QTg3QzExRERBMTFFNzhERUI4QkIwM0EwMjQ3OEYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5A3EYPAAALbElEQVR42qxb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">
    </div>
    <ul class="headerTitle">
      <li v-for="(item, index) in data" :key="index">
        <router-link :to="`${item.linkUrl}`">
          <img v-show="item.tips == 1" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAOCAMAAAAG0/xxAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkI2ODAyNTQ0MUU2NjExRTdCRDMwOUJCMTA4MDg5MkUxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkI2ODAyNTQ1MUU2NjExRTdCRDMwOUJCMTA4MDg5MkUxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QjY4MDI1NDIxRTY2MTFFN0JEMzA5QkIxMDgwODkyRTEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QjY4MDI1NDMxRTY2MTFFN0JEMzA5QkIxMDgwODkyRTEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5RbnmzAAAABlBMVEX////1Lz41sEeDAAAAL0lEQVR42mJgxAkYaCEFx0AApRhQpRjgpjCg68IqBTGBVF0EpWAuRJaiamgABBgA7TwBPx4MCEcAAAAASUVORK5CYII=" />
          {{item.name}}
        </router-link>
        <span class="line">/</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      data: state => state.infoHeader.data
    })
  },
  created () {
    this.$store.dispatch('infoHeader/getAllInfoHeader')
  }
}
</script>

<style scoped lang="stylus">
@import '../../../style/changeColor.styl'
.infoHeader
  width 1200px
  margin 0 auto
  height 28px
  line-height 28px
  font-size 14px
  padding 30px 0
  .headerImg
    width 142px
    height 28px
    float left
    img
      width 100%
      height 100%
  .headerTitle
    float left
    margin-left 48px
    li
      float left
      position relative
      margin-left 50px
      a
        color #323232
        line-height 28px
        font-size 14px
        img
          width 26px
          height 14px
          float left
          margin 7px 5px 0 0
      a:hover
        changeColor(#f52f3e)
      .line
        position absolute
        right -25px
        top 2px
        font-size 16px
        color #ccc
</style>
