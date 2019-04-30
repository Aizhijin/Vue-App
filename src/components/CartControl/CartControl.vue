<template>
  <div class="cartcontrol">
    <div v-show="food.count" class="iconfont iconshanchu" @click="updateFoodCount(false)"></div>
    <div class="cart-count">{{food.count? food.count:'0'}}</div>
    <div class="iconfont iconzengjia" @click="updateFoodCount(true)"></div>
  </div>
</template>

<script>
  export default {
    name: 'CartControl',
    props: {
      food: Object
    },
    methods: {
      updateFoodCount (isAdd) {
        const {food} = this
        this.$store.dispatch('updateFoodCount', {food, isAdd})
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../assets/stylus/mixins.styl"
  .cartcontrol
    font-size: 0
    .cart-decrease
      display: inline-block
      padding: 6px
      line-height: 24px
      font-size: 24px
      color: rgb(0, 160, 220)

    .iconshanchu
      display: inline-block
      padding 6px
      line-height 24px
      font-size 24px
      color #02a774
    .cart-count
      display: inline-block
      vertical-align: top
      width: 12px
      padding-top: 6px
      line-height: 24px
      text-align: center
      font-size: 10px
      color: rgb(147, 153, 159)
    .iconzengjia
      display: inline-block
      padding: 6px
      line-height: 24px
      font-size: 24px
      color #02a774

</style>
