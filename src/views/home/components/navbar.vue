<template>
  <div class="nav">
    <van-row>
      <van-col span="3">
        <van-icon name="wap-nav" />
      </van-col>
      <van-col span="18">
        <van-search placeholder="请输入搜索关键词" />
      </van-col>
      <van-col span="3">
        <van-icon name="music" />
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scope>
.nav
  background #E4E5E9
  .van-row
    padding .1rem 0
    .van-col
      .van-search
        // margin .1rem 0rem
        border-radius 2rem
        height .66rem
        div
          border-radius .5rem
          // height .6rem
          background white
          // width 2rem
</style>
