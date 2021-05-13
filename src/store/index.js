import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showfull: 0,
    mp3Info: {
      mp3: {}, // mp3地址
      lrc: '', // 歌词
      play: false, // 是否播放,
      name: ''
    },
    minifull: 0
  },
  mutations: {
    info (state, data) {
      state.showfull = 1
      state.minifull = 0
      state.mp3Info.play = 1
      state.mp3Info.mp3 = ''
      state.mp3Info.mp3 = data[0]
      state.mp3Info.name = data[1]
    },
    lrc (state, lrc) {
      console.log(lrc)
      state.mp3Info.lrc = lrc
    },
    closeFull (state) {
      state.showfull = 0
      state.minifull = 1
    }
  },
  actions: {
    full (ctx, [id, name]) {
      axios.get('/api/song/url?id=' + id)
        .then(res => {
          console.log(res)
          if (res.status === 200) {
            ctx.commit('info', [res.data.data[0], name])
          }
        })
        .catch(arr => {
          console.log(arr)
        })
      axios.get('/api/lyric?id=' + id)
        .then(res => {
          console.log(res)
          if (res.status === 200) {
            ctx.commit('lrc', res.data.lrc.lyric)
          }
        })
        .catch(arr => {
          console.log(arr)
        })
    }
  },
  modules: {
  }
})
