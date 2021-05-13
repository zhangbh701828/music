<template>
  <div>
    <div class="header">
      <van-icon @click="goBack()" name="arrow-left" />排行榜
    </div>
    <!-- 排行榜具体信息 -->
    <div>
      <van-tabs v-model="active" scrollspy sticky>
        <van-tab
         v-for="(item, index) in topName"
         :title="item"
         :key="item+index"
        >
          <!-- 内容 {{ index }} -->
          <div>
            <h3>官方榜</h3>
            <ul class="box">
              <li
                v-for="(item, index) in num1"
                :key="index"
                @click="toTopDetail(item.id,item.name)"
              >
                <div class="left-item">
                  <p class="title">{{item.name}}</p>
                  <img :src="item.coverImgUrl" alt="">
                </div>
                <div class="right-item">
                  <p v-for="(list,i) in item.tracks"  :key="i">
                    <span class="index ells">{{i+1}}</span>
                    <span class="name ells">{{list.first}}</span>
                    <span class="songs ells">{{list.second}}</span>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: 'topSongs',
  data () {
    return {
      active: 0,
      topName: ['官方', '精选', '精选', '精选', '精选', '精选', '精选', '精选', '精选', '精选', '精选', '精选', '精选'],
      topDetail: []
    }
  },
  computed: {
    num1 () {
      const list = this.topDetail.slice(0, 4)
      return list
    }
  },
  methods: {
    toTopDetail (id, name) {
      this.$router.push({ name: 'bdxq', params: { id, name } })
    },
    goBack () {
      this.$router.go(-1)
    },
    getTop () {
      this.axios.get('api/toplist/detail')
        .then(res => {
          console.log(res)
          this.topDetail = res.data.list
        })
        .catch(arr => {
          console.log(arr)
        })
    }
  },
  mounted () {
    this.getTop()
  }
}
</script>

<style lang="stylus" scoped>
.ells
  display --webkit-box
  -webkit-box-orient vertical
  -webkit-line-clamp 2
  overflow hidden
.box
  padding .3rem
  li
    border-radius .2rem
    margin 0.3rem 0
    background pink
    display flex
    .right-item
      flex 1
      margin-left .3rem
.box li:nth-child(2n)
  background skyblue
.left-item
  width 1.8rem
  text-align center
  img
    width 1rem
    height 1rem
.header
  height 0.8rem
  font-size .8rem
  i
    margin-right .2rem
</style>
