<template>
  <div class="item-stars">
    <span v-for="(star,index) in StarArr" :key="index" :class="star" class="star"></span>
  </div>
</template>

<script>
  export default {
    name: 'Star',
    props: {
      score: Number
    },
    computed: {
      StarArr: {
        get () {
          const Arr = []
          const on = Math.floor(this.score)
          let half = Math.round(this.score) - on
          for (let i = 0; i < 5; i++) {
            if (i < on) {
              Arr.push('on')
            } else if (half) {
              Arr.push('half')
              half = 0
            } else {
              Arr.push('off')
            }
          }
          return Arr
        }
      }
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../assets/stylus/mixins.styl"
  .item-stars
    width 70px
    height 10px
    float left
    .star
      float left
      width 10px
      height 10px
      margin-right 3px
      background-size 10px 10px
      &.on
        bg_image('star_on')
      &.half
        bg_image('star_half')
      &.off
        bg_image('star_off')
</style>
