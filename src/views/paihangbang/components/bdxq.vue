<template>
  <div>
    <div class="bg">
      <div class="header">
        <van-icon @click="fanGo()" name="arrow-left" />
        <van-icon name="search" />
      </div>
      <div class="topname">
        {{this.$route.params.name}}
      </div>
    </div>
    <!-- 播放全部 -->
    <div class="all-list" v-if="list.tracks">
      <p class="all">
        <van-icon name="play-circle" />
        <span>播放全部</span>
        <span class="len">({{list.tracks.length}})</span>
      </p>
      <ul>
        <li class="list-item"
          v-for="(item,index) in list.tracks"
          :key="index"
          @click="playMusic(item.id,item.name)"
        >
          <div class="left-item">
            {{index}}
          </div>
          <div class="right-inner">
            <p class="inner-name">{{item.name}}</p>
            <p class="inner-author">{{item.ar[0].name}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'topDetail',
  data () {
    return {
      list: []
    }
  },
  methods: {
    fanGo () {
      this.$router.go(-1)
    },
    playMusic (id, name) { // 不能在这个地方请求mp3地址
    // 需要开启全屏播放器
      this.$store.dispatch('full', [id, name])
    },
    getResult () {
      this.axios.get('/api/playlist/detail?id=' + this.$route.params.id + '')
        .then(res => {
          console.log(res)
          if (res.status === 200) {
            this.list = res.data.playlist
          }
        })
        .catch(arr => {
          console.log(arr)
        })
    }
  },
  mounted () {
    this.getResult()
  }
}
</script>

<style lang="stylus" scoped>
.inner-name
  color black
  font-size .32rem
  font-weight 600
.inner-author
  color #ccc
.list-item
  margin .2rem 0
  padding 0 .3rem
  display flex
  .left-item
    width .9rem
    text-align center
    line-height 1rem
  .right-inner
    flex 1
.bg
  height 4rem
  background #C74082
  position relative
  .topname
    text-align center
    padding-top 1.6rem
    color white
    font-size .6rem
  .header
    position absolute
    width 100%
    padding 0 .6rem
    box-sizing border-box
    top .3rem
    font-size .4rem
    i
      float left
      &:nth-child(2)
        float right
</style>
