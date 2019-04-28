<template>
  <section class="content-item">
    <Header :title="'我的'"/>
    <div class="personal border-1px">
      <div class="personal-img">
        <i class="iconfont iconxiaoren"></i>
      </div>
      <div class="personal-text" v-if="!user._id">
        <div class="text-top" @click="goToLogin">
          <span>登录</span>/<span>注册</span>
        </div>
        <div class="text-bottom">
          <i class="iconfont iconshouji"></i>
          <span>暂无绑定手机号</span>
        </div>
      </div>
      <div class="personal-text" v-else>{{user.name? user.name:user.phone}}</div>
      <div class="personal-login" @click="user._id ? goMessg():goToLogin()">
        <i class="iconfont iconarrow"></i>
      </div>
    </div>
    <div class="finance">
      <div class="remainder">
                    <span class="top">
                        <span class="remainder-num">1,000</span>
                        <span>元</span>
                    </span>
        <span class="finance-text">我的余额</span>
      </div>
      <div class="preferential">
                    <span class="top">
                        <span class="preferential-num">0</span>
                        <span>个</span>
                    </span>
        <span class="finance-text">我的优惠</span>
      </div>
      <div class="points">
                    <span class="top">
                        <span class="points-num">0</span>
                        <span>分</span>
                    </span>
        <span class="finance-text">我的积分</span>
      </div>
    </div>
    <div class="correlation">
      <div class="order">
        <i class="iconfont icondingdan"></i>
        <div>
          <span>我的订单</span>
          <i class="iconfont iconarrow"></i>
        </div>
      </div>
      <div class="point-mall">
        <i class="iconfont iconjifen"></i>
        <div>
          <span>积分商城</span>
          <i class="iconfont iconarrow"></i>
        </div>
      </div>
      <div class="member">
        <i class="iconfont iconVIP"></i>
        <div>
          <span>硅谷外卖会员卡</span>
          <i class="iconfont iconarrow"></i>
        </div>
      </div>
    </div>
    <div class="service">
      <i class="iconfont iconfuwu"></i>
      <div>
        <span>服务</span>
        <i class="iconfont iconarrow"></i>
      </div>
    </div>
    <mt-button class="loginOut" type="danger" v-show="user._id" @click="loginOut">退出登录</mt-button>
  </section>
</template>

<script>
  import Vue from 'vue'
  import {mapState} from 'vuex'
  import {MessageBox, Button} from 'mint-ui'
  import 'mint-ui/lib/style.min.css'

  Vue.component(Button.name, Button)

  export default {
    name: 'Profile',
    computed: {
      ...mapState({
        user: state => state.user.user
      })
    },
    methods: {
      loginOut () {
        const that = this
        MessageBox.confirm('你确定要退出吗？').then(action => {
          that.$store.dispatch('deleteUser')
        }, action => {
          console.log('取消')
        })
      },
      goMessg () {
        console.log(2222222222)
      },
      goToLogin () {
        this.$router.push('/login')
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../assets/stylus/mixins.styl"
  .personal
    top-border-1px(#fff)
    box-sizing border-box
    padding 15px 10px
    margin-top 45px
    height 100px
    background-color #02a774
    display flex
    align-items center
    justify-content space-around
    .personal-img
      clearFix()
      width 50px
      border-radius 50%
      overflow hidden
      i
        font-size 49px
        width 50px
        line-height 50px
        background #e4e4e4
        color #747474

    .personal-text
      width 120px
      height 60px
      color white
      display flex
      flex-direction column
      justify-content space-around
      .text-top span
        font-size 16px
        font-weight bold
      .text-bottom
        i
          font-size 20px
          width 20px
          display block
          &::before
            width 20px
        span
          font-size 14px
    .personal-login
      width 15px
      color white
      i
        width 100%
        font-size 12px

  .finance
    bottom-border-1px(#dddddd)
    overflow hidden
    display flex
    align-items center
    height 80px
    background-color #fff
    margin-bottom 10px
    div
      flex 1
      height 100%
      color #666
      font-size 12px
      .top
        display block
        margin-top 10px
        padding-left 10px
        text-align center
      .finance-text
        margin-top 10px
        display block
        color #666
        width 100%
        text-align center
        font-size 14px
    .remainder
      .remainder-num
        color #f90
        font-size 24px
        font-weight 700
    .preferential
      .preferential-num
        color #ff5f3e
        font-size 24px
        font-weight 700
    .points
      .points-num
        color #6ac20b
        font-size 24px
        font-weight 700

  .correlation
    padding-left 10px
    background-color #fff
    margin-bottom 10px
    & > div > div
      margin-left 30px
      height 16px
      padding 18px 0
      span
        color #666
        float left
      i
        color #666
        font-size 12px
        line-height 16px
        float right

  i
    font-size 22px
    float left
    width 30px

  .order
    height 53px
    div
      bottom-border-1px(#dddddd)
    & > i
      color #02a774
      line-height 53px

  .point-mall
    height 53px
    div
      bottom-border-1px(#dddddd)
    & > i
      color #ff5f3e
      line-height 53px

  .member
    height 53px
    & > i
      color #f90
      line-height 53px

  .service
    height 53px
    background-color #fff
    padding-left 10px
    & > i
      font-size 22px
      color #02a774
      line-height 53px
      width 30px
      float left
    & > div
      margin-left 30px
      height 16px
      padding 18px 0
      color #666
      span
        float left
      i
        float right
        font-size 12px
        line-height 16px

  .loginOut
    height 40px
    width 90%
    font-size 16px
    margin 20px 5% 0 5%
</style>
