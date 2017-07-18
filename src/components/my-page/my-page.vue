<template>
  <div class="my-page">
    <login v-show="!isLogin" @clickLogin="clickLogin"></login>
    <login-page></login-page>
    <div class="my-wrapper" v-show="isLogin">
      <div class="header">
        <div class="filter" :style="bgStyle"></div>
        <div class="user-info">
          <div class="user-data">
            <div class="icon-wrapper"><img src="../../assets/logo.png" alt=""></div>
            <div class="data">
              1234
            </div>
          </div>
          <h1 class="username">username</h1>
          <p class="autograph">我是来自南方的一匹狼我是来自南方的一匹狼我是来自南方的一匹狼我是来自南方的一匹狼我是来自南方的一匹狼</p>
        </div>
      </div>
      <div>1234</div>
    </div>
  </div>
</template>

<script>
  import Login from 'base/login/login'
  import LoginPage from 'components/login-page/login-page'
  import {mapGetters, mapMutations} from 'vuex'

  export default {
    props: {
      bgImage: {
        type: String,
        default: ''
      }
    },
    computed: {
      bgStyle(){
        return `background-image:url("http://img2.imgtn.bdimg.com/it/u=257099789,2726639331&fm=26&gp=0.jpg")`
      },
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
    .my-wrapper {
      .header {
        position: relative;
        width: 100%;
        height: 0;
        padding-top: 70%;
        color: @headerColor;
        overflow: hidden;
        .filter {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          background-color: rgba(100, 100, 100, .6);
          filter: blur(2px);
          transform-origin: top;
          background-size: cover;
        }
        .user-info {
          position: absolute;
          top: 20%;
          left: @tabHeight;
          width: 100%;
        }
        .user-data {
          div{
            display: inline-block;
          }
          .icon-wrapper {
            width: @iconHeight;
            height: @iconHeight;
            border-radius: 50%;
            border: 1px solid #000;
            overflow: hidden;
            img {
              width: 100%;
            }
          }
        }
        .username {
          margin: 10px 0;
          font-size: @maxFontSize;
        }
        .autograph {
          display: block;
          padding-left: 10px;
          width: 80%;
          .no-wrap;
        }
      }
    }
  }
</style>
