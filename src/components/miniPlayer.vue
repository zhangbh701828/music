<template>
  <div class="mini">
    <!-- 迷你播放器 -->
    <div class="ding">
      111111
    </div>
  </div>
</template>

<script>
export default {
  name: 'miniPlayer',
  data () {
    return {
      isShowMin: true
    }
  }
}
</script>

<style lang="stylus" scoped>
.mini
  width 100%
  height 100%
  .ding
    position fixed
    bottom 0
    left 0
    width 100%
    height 1.5rem
    background black
    opacity 1
</style>
