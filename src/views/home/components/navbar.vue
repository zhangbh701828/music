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
        height .7rem
        div
          border-radius 1rem
          // margin-bottom 0.01rem
          // height .9rem
          background white
          // width 2rem
    .van-icon-wap-nav::before
      font-size .5rem
      padding .06rem 0 0 .24rem
    .van-col:nth-child(3)
      .van-icon::before
        font-size .56rem
        padding .06rem 0 0 .2rem
</style>
