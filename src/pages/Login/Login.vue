<template>
  <div class="login-page">
        <span class="goback" @click="goBack">
            <i class="iconfont iconpreviewleft"></i>
        </span>
    <div class="login-box">
      <h2>硅谷外卖</h2>
      <div class="login-option">
        <span :class="{active:isShowMsg}" @click="alternate(true)">短信登录</span>
        <span :class="{active:!isShowMsg}" @click="alternate(false)">密码登录</span>
      </div>

      <form class="loginForm">
        <div v-show="isShowMsg">
          <div class="login-account">
            <input type="text" class="account" placeholder="手机号" v-model="phone"/>
            <button :class="{btnStyle:countdown>0||PhoneIsRight}" @click.prevent="getCountdown">{{countdown>0?
              '已发送('+countdown+'s)' :
              '获取验证码'}}
            </button>
          </div>
          <div class="login-password">
            <input type="text" class="password" placeholder="验证码" v-model="code"/>
          </div>
          <div class="login-prompt">
            <p>温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
              <span class="agreement">《用户服务协议》</span>
            </p>
          </div>
        </div>
        <div v-show="!isShowMsg">
          <div class="login-account">
            <input type="text" class="account" placeholder="手机号/邮箱/用户名" v-model="name"/>
          </div>
          <div class="login-password">
            <input type="password" class="password" placeholder="密码" v-model="password"/>
          </div>
          <div class="login-password">
            <input type="text" class="password code" placeholder="验证码" v-model="captcha"/>
            <img class="code-img" :src="imgSrc" @click="changeSrc"/>
          </div>
        </div>
      </form>
      <button class="login-submit" @click.prevent="login">登录</button>
      <div class="about">关于我们</div>
    </div>
  </div>
</template>

<script>
  import {reqMessageLogin, reqSendCode, reqPasswordLogin} from '../../api/index'

  export default {
    name: 'Login',
    data () {
      return {
        isShowMsg: true,
        imgSrc: 'http://localhost:5000/captcha',
        countdown: 0, // 倒计时
        phone: '',  // 手机号
        code: '',   // 短信验证码
        name: '',    //用户名
        password: '', // 密码
        captcha: ''   //验证码
      }
    },
    computed: {
      /**
       * @return {boolean}
       */
      PhoneIsRight () {
        return /^1\d{10}$/.test(this.phone)
      }
    },
    methods: {
      changeSrc () {
        this.imgSrc = this.imgSrc + '?use=' + Date.now()
      },
      alternate (bol) {
        if (!bol) {
          this.changeSrc()
        }
        this.isShowMsg = bol
      },
      goBack () {
        this.$router.back()
      },
      async getCountdown () {
        if (!this.PhoneIsRight || this.countdown > 0) {
          return
        }
        const result = await reqSendCode(this.phone)
        if (!result.code === 0) {
          console.log(result.msg)
          return
        }
        this.countdown = 30
        const IntervalId = setInterval(() => {
          this.countdown--
          if (this.countdown < 0) {
            clearInterval(IntervalId)
          }
        }, 1000)
      },
      async login () {
        const {phone, code, password, name, captcha} = this
        let result
        if (this.isShowMsg) {
          //短信登录
          if (this.PhoneIsRight && /^\d{6}$/.test(code)) {
            result = await reqMessageLogin(phone, code)
          } else {
            console.log('手机号为11位数字，验证码为6位数字！')
          }
        } else {
          // 密码登录
          if (!name.trim()) {
            return console.log('用户名不能为空！')
          } else if (!password.trim()) {
            return console.log('必须输入密码！')
          } else if (!/^.{4}$/.test(captcha)) {
            return console.log('验证码为4位数字')
          }
          result = await reqPasswordLogin(name, password, captcha)
        }
        console.log(result)
        if (result.code === 0) {
          // 1.保存登录信息
          this.$store.dispatch('getUser')
          // 2.跳转页面
          this.$router.replace('/home')
        } else {
          console.log(result.msg)
          this.changeSrc()
          this.password = ''
          this.captcha = ''
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .login-page
    width 100%
    height 100%
    position absolute
    top 0
    left 0
    background-color white
    .goback
      position absolute
      top 0
      left 0
      color #666
      font-size 30px
      line-height 20px
      margin-left 10px
    .login-box
      width 300px
      margin 80px auto 0 auto
      h2
        color #02a774
        font-size 32px
        font-weight bold
        text-align center
      .login-option
        margin-top 40px
        height 16px
        display flex
        justify-content center
        span
          height 24px
          &:nth-child(1)
            margin-right 30px
          &.active
            color #02a774
            font-weight bold
            border-bottom 2px solid #02a774
      .loginForm
        width 300px
        margin-top 20px
        .login-account
          margin-top 20px
          height 50px
          button
            border none
            outline none
            background none
            float left
            margin-left -90px
            height 30px
            margin-top 10px
            color #ccc
            &.btnStyle
              color black
          .account
            float left
            box-sizing border-box
            padding 0 100px 0 20px
            width 100%
            height 50px
            border 1px solid #dddddd
            border-radius 4px
            outline 0
            &:focus
              border 1px solid #02a774
              border-radius 4px
        .login-password
          margin-top 10px
          height 50px
          position relative
          .password
            float left
            box-sizing border-box
            padding 0 100px 0 20px
            width 100%
            height 50px
            border 1px solid #dddddd
            border-radius 4px
            outline 0
            &.code
              padding 0 120px 0 20px
            &:focus
              border 1px solid #02a774
              border-radius 4px
          .code-img
            height 100%
            width 120px
            position absolute
            right 0
            top 0
        .login-prompt
          margin-top 10px
          height 40px
          font-size 14px
          color #999
          line-height 20px
          .agreement
            color #02a774
      .login-submit
        width 100%
        background #4cd96f
        color #fff
        border none
        outline none
        padding 0
        margin 0
        line-height 40px
        margin-top 15px
        border-radius 4px
        font-size 16px
      .about
        width 100%
        color #999
        text-align center
        font-size 12px
        margin-top 15px

</style>
