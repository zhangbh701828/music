<template>
  <div>
    <div>首页</div>
    <lunbotu :chuan="banner"></lunbotu>
  </div>
</template>

<script>
import apiMusic from '../../../public/api/api'
import lunbotu from '../../views/home/components/banner'

const api = 'http://localhost:3000'
export default {
  name: 'home',
  data () {
    return {
      banner: ''
    }
  },
  components: {
    lunbotu
  },
  methods: {
    getHome () {
      this.axios.get(apiMusic.findBanner.replace(/api/, api))
        .then(res => {
          if (res.status === 200) {
            console.log(res)
            console.log(res.data.banners)
            this.banner = res.data.banners
            console.log(this.banner)
          }
        })
        .catch(arr => {
          console.log(arr)
        })
    }
  },
  mounted () {
    this.getHome()
  }
}
</script>

<style>

</style>
