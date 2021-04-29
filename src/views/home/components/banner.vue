<template>
  <div class="banner">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="v in chuan" :key="v.id">
        <img :src="v.imageUrl" >
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import Vue from 'vue'
import swiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
Vue.use(swiper)
export default {
  props: ['chuan']
}
</script>

<style lang="stylus">
.banner img
  width 100%
</style>
