<template>
  <div class="item-top">
    <slot name="left"/>
    <span class="item-top-text ellipsis">
    <span>{{title}}</span>
  </span>
    <slot name="right"/>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    props: ['title']
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .item-top-text
    width 50%
    font-size 18px
</style>
