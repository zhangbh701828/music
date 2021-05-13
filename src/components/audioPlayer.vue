<template>
  <div v-if="url.play">
    <!-- 全屏播放器 -->
    <audio :src="url.mp3.url" autoplay></audio>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'audioPlayer',
  data () {
    return {

    }
  },
  computed: {
    ...mapState({
      url: 'mp3Info'
    })
  }
}
</script>

<style lang="stylus" scoped>

</style>
