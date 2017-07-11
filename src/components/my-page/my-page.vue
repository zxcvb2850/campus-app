<template>
  <div class="my-page">
    <div class="go-login" v-show="!isLogin">
      <div class="login-wrapper">
        <h2 class="login-btn"><a href="javascript:void(0)">登录</a></h2>
        <h2 class="login-btn"><a href="javascript:void(0)">注册</a></h2>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    computed: {
      ...mapGetters([
        'isLogin'
      ])
    }
  }
</script>

<style lang="less" scoped>
  @import '~common/style/index';

  .my-page {
    .go-login {
      margin: 30px auto;
      width: 100%;
      .login-wrapper {
        display: block;
        position: absolute;
        top: 40%;
        width: 100%;
        height: 100px;
        transform: translateY(-50px);
        .login-btn {
          margin: 10px 0;
          text-align: center;
          a {
            display: block;
            margin: 0 auto;
            width: 80%;
            height: @headerHeight;
            line-height: @headerHeight;
            -webkit-border-radius: 10px;
            -moz-border-radius: 10px;
            border-radius: 10px;
            text-decoration: none;
            color: @tabBackground;
            background-color: @mainBackground;
          }
        }
      }
    }
  }
</style>
