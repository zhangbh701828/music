<template>
  <div>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="(v) in fenleidaohangList" :key="v.id">
        <div class="flbj">
          <img class="imgs" :src="v.iconUrl" alt="">
        </div>
        <p>{{v.name}}</p>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
