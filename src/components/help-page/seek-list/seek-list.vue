<template>
  <div class="seek-list">
    <div class="filter-part">
      <p class="filter" v-show="isLogin">发布</p>
    </div>
    <div class="login">
      <div>
        <h2><a class="login-btn" href="javascript:void(0)" @click="goingLogin">现在去登陆</a></h2>
      </div>
    </div>
  </div>
</template>

<script>
  import Scroll from "base/scroll/scroll"
  import VMask from "base/mask/mask"
  import {mapGetters} from 'vuex'

  export default {
    data(){
      return {
        isFilter: false
      }
    },
    methods: {
      filterBtn(){
        console.log(this.username)
      },
      goingLogin(){
        console.log(1)
      }
    },
    computed: {
      ...mapGetters([
        'isLogin'
      ])
    },
    components: {
      Scroll,
      VMask
    }
  }
</script>

<style lang="less" scoped>
  @import "~common/style/index";

  .seek-list {
    position: absolute;
    top: @tabHeight/2;
    bottom: 0;
    left: 0;
    right: 0;
    .filter-part {
      position: relative;
      top: 0;
      bottom: 0;
      right: 20px;
      .filter {
        position: absolute;
        top: -50px;
        bottom: 0;
        right: 0;
        font-size: @titleFontSize;
        font-weight: normal;
        color: @headerColor;
      }
    }
    .login {
      h2 {
        text-align: center;
        .login-btn {
          padding: 4px 10px;
          text-decoration: none;
          color: @tabBackground;
          background-color: @mainBackground;
        }
      }
    }
  }
</style>
