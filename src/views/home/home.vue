<template>
  <div>
    <!-- 导航栏 -->
    <navbar></navbar>
    <!-- banner轮播图 -->
    <div class="banner">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="v in bannerList" :key="v.id">
          <img :src="v.imageUrl" >
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="nav-bar">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="(v,index) in fenleidaohangList" :key="v.name">
          <div class="flbj"
            @click="toTop(index)"
          >
            <img class="imgs" :src="v.iconUrl" alt="">
          </div>
          <p>{{v.name}}</p>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <!-- 推荐歌单 -->
    <div class="tjgd">
      <h3 class="clearfix">
        <span class="list">推荐歌单</span>
        <van-button round type="info">
          <span>更多</span>
          <van-icon name="arrow" />
        </van-button>
      </h3>
      <div class="tjgd-gd">
        <swiper class="swiper" :options="swiperOption1">
          <swiper-slide v-for="v in sixList" :key="v.playCount">
            <div class="flbj">
              <img class="imgs" :src="v.picUrl" alt="">
            </div>
            <p>{{v.name}}</p>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <!-- <tjgd></tjgd> -->
    <!-- 排行榜 -->
    <div class="tjgd">
      <h3 class="clearfix">
        <span class="list">排行榜</span>
        <van-button round type="info">
          <span>更多</span>
          <van-icon name="arrow" />
        </van-button>
      </h3>
      <div>
        <swiper class="swiper" :options="swiperOption2">
          <swiper-slide v-for="(v,index) in topList" :key="v.subscribedCount">
            <div class="flbj">
              <img class="imgs" :src="v.coverImgUrl" alt="">
            </div>
              <!-- 1
                /play/detail?id=19723756飙升榜
                /play/detail?id=3779629新歌榜
                /play/detail?id=2884035原创榜
                /play/detail?id=3778678热歌榜
                /play/detail?id=991319590说唱榜
               -->
            <ul class="list">
              <li class="listItem"
                v-for="(list,i) in songs[index]"
                :key="list.id"
              >
                <img :src="list.al.picUrl" alt="">
                <div class="itemContent">
                  <span class="index">{{i+1}}</span>
                  <span class="name">{{list.al.name}}</span>
                  <span class="author">-{{list.ar[0].name}}</span>
                </div>
              </li>
            </ul>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <!-- 新歌新碟内容 -->
    <div class="xgxd">
      <!-- api/top/album -->
      <van-tabs v-model="active">
        <van-tab title="新歌">
          <div>
            <swiper class="swiper" :options="swiperOption2">
              <swiper-slide v-for="v in newXinge" :key="v.id">
                <ul class="list">
                  <li class="listItem"
                    v-for="(list,i) in v"
                    :key="list.id"
                  >
                    <img :src="list.picUrl" alt="">
                    <div class="itemContent">
                      <span class="index">{{i+1}}</span>
                      <span class="name">{{list.name}}</span>
                      <span class="author">-{{list.song.artists[0].name}}</span>
                    </div>
                  </li>
                </ul>
              </swiper-slide>
            </swiper>
          </div>
        </van-tab>
        <van-tab ref="2" title="新碟 ">
          <div>
            <swiper class="swiper" :options="swiperOption2">
              <swiper-slide v-for="v in newXindie" :key="v.id">
                <!-- <div class="flbj">
                  <img class="imgs" :src="v.coverImgUrl" alt="">
                </div> -->
                  <!-- 1
                    /play/detail?id=19723756飙升榜
                    /play/detail?id=3779629新歌榜
                    /play/detail?id=2884035原创榜
                    /play/detail?id=3778678热歌榜
                    /play/detail?id=991319590说唱榜
                  -->
                <ul class="list">
                  <li class="listItem"
                    v-for="(list,i) in v"
                    :key="i"
                  >
                    <img :src="list.picUrl" alt="">
                    <div class="itemContent">
                      <span class="index">{{i+1}}</span>
                      <span class="name">{{list.name}}</span>
                      <span class="author">-{{list.company}}</span>
                    </div>
                  </li>
                </ul>
              </swiper-slide>
            </swiper>
          </div>
        </van-tab>
        <van-tab title="数字专辑">内容 3</van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import apiMusic from '../../../public/api/api'
import navbar from './components/navbar'
import swiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
// import tjgd from './components/tjgd'
Vue.use(swiper)
// const api = 'http://localhost:3000'
export default {
  name: 'home',
  data () {
    return {
      active: 0,
      bannerList: [], // 轮播图数据
      fenleidaohangList: [], // 分类导航数据
      tjgdList: [], // 推荐歌单数据
      newSongs: [], // 新歌新碟数据
      newXinge: [],
      newXindie: [],
      Shuzizhuanji: [],
      sixList: [], // 六个推荐歌单里的数据
      songs: [], // 排行榜里的数据
      topList: [], // 排行版
      swiperOption: {
        slidesPerView: 5,
        spaceBetween: 30,
        freeMode: true
      },
      swiperOption1: {
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true
      },
      swiperOption2: {
        slidesPerView: 1,
        spaceBetween: 30,
        freeMode: true
      }
    }
  },
  components: {
    navbar
    // tjgd
  },
  methods: {
    toTop (i) {
      switch (i) {
        case 0:
          break
        case 3:
          this.$router.push({ name: 'paihangbang' })
          break
      }
    },
    getHome () {
      this.axios.get(apiMusic.findBanner)
        .then(res => {
          if (res.status === 200) {
            // console.log(res)
            // console.log(res.data.banners)
            this.bannerList = res.data.banners
            // console.log(this.banner)
          }
        })
        .catch(arr => {
          console.log(arr)
        })
      this.axios.get(apiMusic.fenleidaohang).then(res => {
        // console.log(res)
        if (res.status === 200) {
          console.log(res.data.data)
          this.fenleidaohangList = res.data.data
        }
      }).catch(arr => {
        console.log(arr)
      })
    },
    getTjgd () { // 获取推荐歌单
      this.axios.get(apiMusic.personalized)
        .then(res => {
          if (res.status === 200) {
            // console.log(res)
            this.tjgdlist = res.data.result
            while (this.sixList.length < 6) {
              const num = parseInt(Math.random() * 30)
              if (this.sixList.indexOf(res.data.result[num]) === -1) {
                this.sixList.push(res.data.result[num])
              }
            }
            // console.log(this.sixList)
          }
        })
        .catch(arr => {
          console.log(arr)
        })
    },
    getPhb () { // 获取排行榜
      this.axios.get('api/toplist')
        .then(res => {
          if (res.status === 200) {
            this.topList = res.data.list.slice(0, 6)
            this.topList.map((v, i) => {
              if (i === 4) {
                this.topList.splice(4, 1)
              } else {
                this.topList[i] = v
              }
              this.axios.get('api/playlist/detail?id=' + v.id).then((res) => {
                this.songs.push(res.data.playlist.tracks.slice(0, 3))
                console.log(this.songs)
                // this.songs.slice(0, 3)
              })
            })
            console.log(this.topList)
          }
        })
        .catch(arr => {
          console.log(arr)
        })
    },
    getnewXinge () { // 获取新歌
      this.axios.get('/api/personalized/newsong?limit=6').then((res) => {
        console.log(res)
        if (res.status === 200) {
          this.newXinge.push(res.data.result.slice(0, 3))
          this.newXinge.push(res.data.result.slice(3))
          console.log(this.newXinge)
        }
      })
    },
    getnewXindie () { // 获取新碟
      this.axios.get('/api/top/album?limit=6&type=hot').then((res) => {
        console.log(res)
        if (res.status === 200) {
          // this.newXindie = res.data.monthData.slice(0, 6)
          this.newXindie.push(res.data.monthData.slice(0, 3))
          this.newXindie.push(res.data.monthData.slice(3, 6))
        }
      })
    },
    getShuzizhuanji () { // 获取数字专辑
      this.axios.get('/api/album/list?limit=6').then((res) => {
        console.log(res)
        if (res.status === 200) {
          this.Shuzizhuanji = res.data.products
        }
      })
    }
  },
  mounted () {
    this.getHome()
    this.getTjgd()
    this.getPhb()
    this.getnewXinge()
    this.getnewXindie()
    this.getShuzizhuanji()
  },
  computed: {
    // sixList () {
    //   const list = []
    //   while (list.length < 6) {
    //     const num = parseInt(Math.random() * 30)
    //     list.push(this.sixList[num])
    //   }
    //   return list
    // }
  }
}
</script>

<style lang="stylus" scope>
.listItem
  display flex
  img
    width 1.5rem
    height 1.5rem
  .itemContent
    flex 1
    display flex
    height 1.2rem
    align-items center
    .index
      margin 0 .2rem
    .name
      font-size .4rem
    .author
      font-size .3rem
.clearfix:after
  content ""
  display block
  clear both
  height 0
  visibility hidden
.banner img
  width 100%
.banner
  background #E4E5E9
  .my-swipe
    width 94%
    margin 0 auto
    border-radius .2rem
.nav-bar
  padding 0 .4rem
  div
    div
      div
        .flbj
          background #FFF3F5
          border-radius .5rem
          // margin 0 auto
          img
            width .7rem
            border-radius 0rem
            background #FA3D42
.list
  font-size .5rem
.tjgd
  margin-bottom .4rem
  .van-button
    float right
    height .5rem
    padding 0 .02rem 0 .14rem
    color black
    background white
    // margin 0
    // padding 0
    border-radius .2rem
    border 1px solid #ccc
  .tjgd-gd
    img
      width 100%
    p
      display: -webkit-box
      -webkit-box-orient: vertical
      -webkit-line-clamp: 2
      overflow: hidden
// .van-button
//   height 0.6em
//   line-height .6rem
  // span
  //   display inline-block
  //   height 0.6rem
  //   line-height .6rem
  // .van-icon
  //   height .6rem
  //   line-height .6rem
.flbj
  img
    width 2rem
</style>
