<template>
  <div class="login">
    <div class="go-login">
      <p class="desc">需要登录</p>
      <h2 class="login-btn"><a href="javascript:void(0)" @click="goLogin">登录</a></h2>
    </div>
  </div>
</template>

<script>
  export default {
      methods:{
        goLogin(){
            this.$emit("clickLogin")
        }
      }
  }
</script>

<style lang="less" scoped>

  @import "~common/style/mixin";

  .go-login {
    margin: 30px auto;
    width: 100%;
    .desc {
      margin-bottom: 30px;
      text-align: center;
      color: @mainTextColor;
      font-size: @mainFontSize;
    }
    .login-btn {
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
</style>
