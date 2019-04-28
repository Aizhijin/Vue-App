<template>
  <div>
    <ul class="shop-list" v-if="shops.length">
      <li class="shop-list-item" v-for="(shop,index) in shops" :key="index" @click="$router.push('/shop')">
        <div class="shop-item-left">
          <img :src="`https://fuss10.elemecdn.com`+shop.image_path"/>
        </div>
        <div class="shop-item-right">
          <div class="item-right-top">
            <h4 class="shop_title ellipsis">{{shop.name}}</h4>
            <ul class="shop-item-list">
              <li class="item" v-for="(item,index) in shop.supports" :key="index">{{item.icon_name}}</li>
            </ul>
          </div>
          <div class="item-right-middel">
            <Star :score="shop.rating"/>
            <div class="item-center">
              <span class="item-enter-satrsNum">{{shop.rating}}</span>
              <span class="item-enter-saleNum">月售<span>{{shop.recent_order_num}}</span>单</span>
            </div>
            <div class="item-right-middel-right">
              <span class="span-left" :style="{color:shop.delivery_mode.color}">{{shop.delivery_mode.text}}</span>
              <span class="span-right">准时达</span>
            </div>
          </div>
          <div class="item-right-bottom">￥{{shop.float_minimum_order_amount}}起送/配送费约{{shop.float_delivery_fee}}元</div>

        </div>
      </li>
    </ul>
    <div class="bgdiv" v-else></div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: 'ShopList',
    computed: {
      ...mapState({
        shops: state => state.home.shops
      }) // 读取值
    },
    mounted () {
      this.$store.dispatch('getShopsList') // 分发方法（事件类似）
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../assets/stylus/mixins.styl"
  .bgdiv
    background url("./images/shop_back.svg")
    height 330px
  .shop-list
    clearFix()
    .shop-list-item
      box-sizing border-box
      width 100%
      height 105px
      padding 15px 8px
      bottom-border-1px(#dddddd)
      .shop-item-left
        width 75px
        float left
        padding-right 10px
        img
          display block
          width 75px
          height 75px
      .shop-item-right
        margin-left 85px
        height 75px
        .item-right-top
          height 17px
        .shop_title
          float left
          width 70%
          color #333
          font-weight 700
          &::before
            content '品牌'
            display inline-block
            font-size 11px
            line-height 11px
            color #333
            background-color #ffd930
            padding 2px 2px
            border-radius 2px
        .shop-item-list
          float right
          .item
            float: left;
            font-size: 10px;
            color: #999;
            border: 1px solid #f1f1f1;
            padding: 0 2px;
            border-radius: 2px;
        .item-right-middel
          height 16px
          padding 15px 0 5px 0
          .item-center
            height 16px
            float left
            font-size 12px
            color #666
            .item-enter-satrsNum
              color #ff6000
            .item-enter-saleNum
              display inline-block
              transform scale(0.8)
          .item-right-middel-right
            float right
            height 16px
            font-size 12px
            span
              float left
              box-sizing border-box
              border-radius 2px
              padding 1px
              transform scale(0.7)
            .span-right
              color #02a774
              border 1px solid #02a774
            .span-left
              color white
              background-color #02a774
              border 1px solid #02a774
              margin-right 3px
        .item-right-bottom
          font-size 12px
          color #666

</style>
