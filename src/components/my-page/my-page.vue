<template>
  <div class="my-page">
    <login v-show="!isLogin" @clickLogin="clickLogin"></login>
    <login-page></login-page>
  </div>
</template>

<script>
  import Login from 'base/login/login'
  import LoginPage from 'base/login-page/login-page'
  import {mapGetters, mapMutations} from 'vuex'

  export default {
    computed: {
      ...mapGetters([
        'isLogin'
      ])
    },
    methods: {
      clickLogin(){
        this.setLoginPage(true)
      },
      ...mapMutations({
        setLoginPage: "SET_LOGINPAGE"
      })
    },
    components: {
      Login,
      LoginPage
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
