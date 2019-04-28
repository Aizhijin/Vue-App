<template>
  <section class="content-item">
    <Header :title="'搜索'"/>

    <div class="item-search">
      <input id="searchContent" type="text" placeholder="请输入商家或美食名称"/>
      <button id="btn">搜索</button>
    </div>
  </section>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

  .item-search
    margin-top 45px
    background-color white
    padding 15px 10px
    display flex
    justify-content space-between
    #searchContent
      display inline-block
      width 79%
      box-sizing border-box
      background-color #f2f2f2
      height 35px
      padding 4px
      border none
      border-radius 4px
      outline none
    #btn
      box-sizing border
      padding 4px
      font-size 18px
      width 18%
      height 35px
      background-color #02a774
      color white
      border none
      border-radius 4px
      outline none
</style>
