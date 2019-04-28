<template>
  <div id="app">
    <router-view/>
    <Footer v-show="$route.meta.isShowFooter"/>
  </div>
</template>

<script>
  import Footer from './components/Footer/Footer'
  export default {
    name: 'App',
    mounted () {
      this.$store.dispatch('getUser')
    },
    components: {
      Footer
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app
  background-color #f5f5f5
  .content-item
    width 100%
    position absolute
    left 0
    top 0
    display block
    margin-bottom 49px
    .item-top
      position fixed
      top 0
      left 0
      width 100%
      z-index 300
      color white
      line-height 45px
      text-align center
      background-color #02a774
      vertical-align center
      display flex
      justify-content space-around
      font-size 22px
</style>
