<template>
  <div>
    <!-- 导航栏 -->
    <navbar></navbar>
    <!-- banner轮播图 -->
    <div class="banner">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="v in bannerList" :key="v.targetId">
          <img :src="v.imageUrl" >
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="nav-bar">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="(v) in fenleidaohangList" :key="v.id">
          <img class="imgs" :src="v.iconUrl" alt="">
          <p>{{v.name}}</p>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import apiMusic from '../../../public/api/api'
import navbar from './components/navbar'
import swiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
Vue.use(swiper)
// const api = 'http://localhost:3000'
export default {
  name: 'home',
  data () {
    return {
      bannerList: [],
      fenleidaohangList: [],
      swiperOption: {
        slidesPerView: 5,
        spaceBetween: 30,
        freeMode: true
      }
    }
  },
  components: {
    navbar
  },
  methods: {
    getHome () {
      this.axios.get(apiMusic.findBanner)
        .then(res => {
          if (res.status === 200) {
            console.log(res)
            console.log(res.data.banners)
            this.bannerList = res.data.banners
            // console.log(this.banner)
          }
        })
        .catch(arr => {
          console.log(arr)
        })
      this.axios.get(apiMusic.fenleidaohang).then(res => {
        console.log(res)
        if (res.status === 200) {
          this.fenleidaohangList = res.data.data
        }
      }).catch(arr => {
        console.log(arr)
      })
    }
  },
  mounted () {
    this.getHome()
  }
}
</script>

<style lang="stylus" scope>
.banner img
  width 100%
.banner
  background #E4E5E9
  .my-swipe
    width 94%
    margin 0 auto
    border-radius .2rem
</style>
