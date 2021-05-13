<template>
  <div class="quanping">
    <!-- 全屏播放器 -->
    <div class="ding">
      <header>
        <!-- <van-icon name="arrow-left" /> -->
        <van-icon name="arrow-left" @click="closeFull()" />
        <span class="songName">{{mp3Info.name}}</span>
      </header>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  name: 'fullPlayer',
  data () {
    return {

    }
  },
  methods: {
    ...mapMutations(['closeFull'])
  },
  computed: {
    ...mapState({
      mp3Info: 'mp3Info'
    })
  }
}
</script>

<style lang="stylus" scoped>
header
  i
    font-size .36rem
    line-height 1rem
.quanping
  width 100%
  height 100%
  .ding
    position fixed
    top 0
    left 0
    width 100%
    height 100%
    background black
    opacity 1
    color white
</style>
