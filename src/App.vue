<template>
  <div id="app">
    <router-view></router-view>
    <full-player v-if="showfull">111111111</full-player>
    <audio-player></audio-player>
    <mini-player v-if="minifull"></mini-player>
  </div>
</template>
<script>
import fullPlayer from './components/fullPlayer.vue'
import audioPlayer from './components/audioPlayer.vue'
import miniPlayer from './components/miniPlayer.vue'
import { mapState } from 'vuex'
export default {
  name: 'App',
  computed: {
    ...mapState({
      showfull: 'showfull',
      minifull: 'minifull'
    })
  },
  components: {
    fullPlayer,
    audioPlayer,
    miniPlayer
  }
}
</script>
<style lang="stylus">

</style>
