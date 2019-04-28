<template>
  <div class="footer">
    <ul class="footList">
      <li class=" footItem" :class="{active:$route.path==='/home'}" @click="changeRoute('/home')">
        <span><i class="iconfont iconhome"></i></span>
        <span>首页</span>
      </li>
      <li class="footItem" :class="{active:$route.path==='/search'}" @click="changeRoute('/search')">
        <span><i class="iconfont iconsearch"></i></span>
        <span>搜索</span>
      </li>
      <li class="footItem" :class="{active:$route.path==='/order'}" @click="changeRoute('/order')">
        <span><i class="iconfont icondingdan"></i></span>
        <span>订单</span>
      </li>
      <li class="footItem" :class="{active:$route.path==='/profile'}" @click="changeRoute('/profile')">
        <span><i class="iconfont icongeren"></i></span>
        <span>我的</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Footer',
    methods: {
      changeRoute (str) {
        this.$router.replace(str)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../assets/stylus/mixins.styl"
  .footer
    height 50px
    width 100%
    position fixed
    bottom 0
    left 0
    background-color white
    z-index 300
    .footList
      height 50px
      display flex
      justify-content space-around
      top-border-1px(#dddddd)
      li
        box-sizing border-box
        width 25%
        padding-top 5px
        display flex
        flex-direction column
        align-items center
        justify-content space-around
        color #666
        &.active
          color #02a774

</style>
