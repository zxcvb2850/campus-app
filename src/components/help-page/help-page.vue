<template>
  <div class="help-wrapper">
    <v-header>
      <p>我的学校<span></span></p>
    </v-header>
    <div class="nav">
      <router-link to="/helpPage/helpList" class="nav-item">帮助</router-link>
      <router-link to="/loginPage" class="nav-item" v-if="!isLogin">求助</router-link>
      <router-link to="/helpPage/seekList" class="nav-item" v-if="isLogin">求助</router-link>
    </div>
    <keep-alive>
      <router-view class="wrapper"></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import Scroll from "base/scroll/scroll"
  import VHeader from "base/header/header"
  import {mapGetters} from "vuex"

  export default {
    computed: {
      ...mapGetters([
        "isLogin"
      ])
    },
    components: {
      Scroll,
      VHeader
    }
  }
</script>

<style lang="less" scoped>
  @import "~common/style/index";

  .help-wrapper {
    position: fixed;
    top: 0;
    bottom: @tabHeight;
    left: 0;
    right: 0;
    z-index: 2;
    .nav {
      display: flex;
      height: @tabHeight/2;
      line-height: @tabHeight/2;
      .border-1px(@divisionLine);
      .nav-item {
        display: block;
        flex: 1;
        text-align: center;
        text-decoration: none;
        font-size: @mainFontSize;
        color: @mainTextColor;
        &.active {
          color: @mainBackground;
        }
      }
    }
    .wrapper {
      position: absolute;
      top: @tabHeight+@headerHeight/2-5px;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }
</style>
