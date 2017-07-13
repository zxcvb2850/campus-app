<template>
  <transition name="slide">
    <div class="login-page" v-show="loginPage">
      <transition name="slide">
        <div class="login-form" v-show="isLogin">
          <div class="logo"><img src="../../assets/logo.png" alt=""></div>
          <input name="username" type="text" placeholder="手机号：">
          <input name="password" type="password" placeholder="密码：">
          <input type="submit" name="type" @click="submit" class="button-blue login" value="登录">
          <div class="clearfix"></div>
          <a class="remember" @click="goLogin">还没有账号？注册</a>
          <a class="forgot">忘记密码？</a>
          <input type="button" name="type" class="button-gay not-logged" @click="notLogged" value="暂不登录">
        </div>
      </transition>
      <transition name="slide">
        <div class="login-form register-form" v-show="!isLogin">
          <div class="logo"><img src="../../assets/logo.png" alt=""></div>
          <input name="number" type="text" placeholder="手机号：">
          <input name="password1" type="password" placeholder="密码：">
          <input name="password2" type="password" placeholder="确认密码：">
          <div class="getVer">
            <input name="verification" type="text" placeholder="验证码：">
            <input name="getVer" type="button" class="button-gay" value="获取验证码">
          </div>
          <input type="submit" name="type" class="button-blue login" value="注册">
          <div class="clearfix"></div>
          <a class="remember" @click="goLogin">已有账号？直接登录</a>
          <a class="forgot">忘记密码？</a>
          <input type="button" name="type" class="button-gay not-logged" @click="notLogged" value="暂不登录">
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex'

  export default {
    data(){
      return {
        isLogin: true
      }
    },
    methods: {
      goLogin(){
        this.isLogin = !this.isLogin;
      },
      submit(){
        let username = document.querySelector('.login-page input[name="username"]');
        let password = document.querySelector('.login-page input[name="password"]');
        if (username.value === this.username && password.value === this.password) {
          this.setLoginPage(false)
          this.setLogin(true)
        } else {
          console.log("帐号或者密码不正确")
        }
      },
      notLogged(){
        console.log(1)
        this.setLoginPage(false);
      },
      ...mapMutations({
        setLogin: "SET_LOGIN",
        setLoginPage: "SET_LOGINPAGE"
      })
    },
    computed: {
      ...mapGetters([
        'loginPage',
        'username',
        'password'
      ])
    }
  }
</script>

<style lang="less" scoped>
  @import "~common/style/index";

  .login-page {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background-color: @filterBackground;
    .login-form {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 300px;
      height: 500px;
      transform: translate(-50%, -50%);
      input {
        padding: 9px;
        margin-bottom: 20px;
        display: block;
        width: 100%;
        -webkit-border-radius: 10px;
        -moz-border-radius: 10px;
        border-radius: 10px;
        border: none;
        .box-sizing;
        &[type="checkbox"] {
          width: auto;
          height: auto;
          padding: 0;
          margin: 3px 5px 0 0
        }
        &.not-logged {
          margin-top: 20px;
          width: 40%;
        }
      }
      .getVer {
        overflow: hidden;
        input {
          display: inline-block;
          width: 40%;
          &[name="verification"] {
            float: left;
          }
          &[name="getVer"] {
            float: right;
          }
        }
      }
      a.remember {
        font-size: 13px
      }
      a.forgot {
        font-size: 13px;
        float: right;
        margin-top: 2px;
        width: auto;
        cursor: pointer
      }
      .logo {
        margin: 0 auto 20px;
        width: 100px;
        img {
          width: 100%;
        }
      }
    }
    .button-blue {
      display: block;
      float: left;
      padding: 5px 0;
      width: 80px;
      margin-right: 10px;
      color: #fff;
      background: #407acc;
      text-align: center;
      cursor: pointer
    }
    .slide-enter-active, .slide-leave-active {
      transition: all 0.3s;
    }
    .slide-enter, .slide-leave-to {
      transform: translate3d(100%, 0, 0);
    }
  }

  .slide-enter-active, .slide-leave-active {
    transition: all 0.3s;
  }

  .slide-enter, .slide-leave-to {
    transform: translate3d(100%, 0, 0);
  }
</style>
