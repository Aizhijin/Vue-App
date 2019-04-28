<template>
  <section class="content-item">
    <Header :title="'订单'"/>
    <div class="tologin">
      <img src="../../assets/images/others/person.png"/>
      <div v-if="!user._id">
        <p>登陆后查看外卖订单</p>
        <button class="login" @click="goToLogin">立即登录</button>
      </div>
      <div v-else>暂无订单信息</div>
    </div>
  </section>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: 'Order',
    computed: {
      ...mapState({
        user: state => state.user.user
      })
    },
    methods: {
      goToLogin () {
        this.$router.push('/login')
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .tologin
    height 280px
    width 213px
    margin 150px auto 0 auto
    div
      text-align center
      color #6a6a6a
    img
      width 213px
      display block
    p
      font-size 17px
      padding 8px 0
      text-align center
    button
      display block
      height 20px
      box-sizing content-box
      padding 7px 20px
      background-color #02a774
      color white
      outline none
      border none
      border-radius 4px
      font-size 14px
      margin auto
</style>
