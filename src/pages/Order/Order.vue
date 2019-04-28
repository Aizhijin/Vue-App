<template>
  <section class="content-item">
    <Header :title="'订单'"/>
    <div class="tologin">
      <img src="../../assets/images/others/person.png"/>
      <p>登陆后查看外卖订单</p>
      <button class="login" @click="goToLogin">立即登录</button>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Order',
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
    img
      width 213px
      display block
    p
      font-size 17px
      color #6a6a6a
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
