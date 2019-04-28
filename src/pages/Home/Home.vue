<template>
  <section class="content-item">
    <Header :title="address.name">
      <span class="item-top-search" slot="left">
        <i @click="$router.replace('/search')" class="iconfont iconsousuo"></i>
      </span>
      <span class="item-top-login" slot="right">
        <span v-if="!user._id" @click="goToLogin">登录|注册</span>
        <i v-else class="iconfont icongeren" @click="$router.push('/profile')"></i>
      </span>
    </Header>

    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <ul class="swiper-List">
            <li>
              <img src="../../assets/images/nav/1.jpg"/>
              <span>甜品饮品</span>
            </li>
            <li>
              <img src="../../assets/images/nav/2.jpg"/>
              <span>商超便利</span>
            </li>
            <li>
              <img src="../../assets/images/nav/3.jpg"/>
              <span>美食</span>
            </li>
            <li>
              <img src="../../assets/images/nav/4.jpg"/>
              <span>简餐</span>
            </li>
            <li>
              <img src="../../assets/images/nav/5.jpg"/>
              <span>新店特惠</span>
            </li>
            <li>
              <img src="../../assets/images/nav/6.jpg"/>
              <span>准时达</span>
            </li>
            <li>
              <img src="../../assets/images/nav/7.jpg"/>
              <span>预定早餐</span>
            </li>
            <li>
              <img src="../../assets/images/nav/8.jpg"/>
              <span>土豪推荐</span>
            </li>

          </ul>
        </div>
        <div class="swiper-slide">
          <ul class="swiper-List">
            <li>
              <img src="../../assets/images/nav/9.jpg"/>
              <span>甜品饮品</span>
            </li>
            <li>
              <img src="../../assets/images/nav/10.jpg"/>
              <span>商超便利</span>
            </li>
            <li>
              <img src="../../assets/images/nav/11.jpg"/>
              <span>美食</span>
            </li>
            <li>
              <img src="../../assets/images/nav/12.jpg"/>
              <span>简餐</span>
            </li>
            <li>
              <img src="../../assets/images/nav/13.jpg"/>
              <span>新店特惠</span>
            </li>
            <li>
              <img src="../../assets/images/nav/14.jpg"/>
              <span>准时达</span>
            </li>
            <li>
              <img src="../../assets/images/nav/1.jpg"/>
              <span>预定早餐</span>
            </li>
            <li>
              <img src="../../assets/images/nav/2.jpg"/>
              <span>土豪推荐</span>
            </li>

          </ul>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div id="fenye" class="swiper-pagination"></div>
    </div>

    <div class="content-item-shopList">
      <div class="shop-header">
        <i class="iconfont icon-xuanxiang"></i>
        <span>附近商家</span>
      </div>
      <ShopList/>
    </div>
  </section>
</template>
<script>
  import {mapState} from 'vuex'
  import Swiper from 'swiper'
  import ShopList from '../../components/ShopList/ShopList'
  import 'swiper/dist/css/swiper.min.css'

  export default {
    name: 'Home',
    components: {
      ShopList
    },
    methods: {
      goToLogin () {
        this.$router.push('/login')
      }
    },
    computed: {
      ...mapState({
        address: state => state.home.address,
        user: state => state.user.user

      })
    },
    async mounted () {
      this.$store.dispatch('getAddress')
      this.$store.dispatch('getCatgoryList')
      /* eslint-disable no-new */
      new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        }
      })
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../assets/stylus/mixins.styl"
  #fenye .swiper-pagination-bullet-active
    background: #02a774;

  .item-top-search
    width 25px
    height 25px
    i
      font-size 25px

  .item-top-login
    font-size 16px
    span
      line-height 100%
    i
      font-size 22px

  .swiper-container
    bottom-border-1px(#dddddd)
    background-color #fff
    width 100%
    height 200px
    margin-top 45px
    .swiper-List
      width 100%
      height 100%
      li
        width 25%
        height 50%
        float left
        display flex
        flex-direction column
        align-items center
        img
          height 50px
          width 50px
          padding-bottom 10px
        span
          text-align center
          width 100%
          font-size 13px
          color #666

  .content-item-shopList
    margin-top 10px
    width 100%
    background-color #fff
    .shop-header
      height 30px
      width 100%
      box-sizing border-box
      padding 10px 0 0 10px
      font-size 14px
      color #999
</style>
