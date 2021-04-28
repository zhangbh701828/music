<template>
  <div>
    <div>首页</div>
    <lunbotu></lunbotu>
  </div>
</template>

<script>
// import apiMusic from '../../../public/api/api'
import lunbotu from '../../views/home/components/banner'

// const api = 'http://localhost:3000'
export default {
  name: 'home',
  data () {
    return {
      banner: ''
    }
  },
  methods: {
    // getHome () {
    //   this.axios.get(apiMusic.findBanner.replace(/api/, api))
    //     .then(res => {
    //       console.log(res)
    //       this.banner = res.data.banner
    //     })
    //     .catch(arr => {
    //       console.log(arr)
    //     })
    // }
  },
  mounted () {
    // this.getHome()
  }
}
</script>

<style>

</style>
