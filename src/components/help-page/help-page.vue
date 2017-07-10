<template>
  <div class="help-wrapper">
    <m-header>
      <p>我的学校<span></span></p>
    </m-header>
    <div class="nav">
      <router-link to="/helpPage/helpList" class="nav-item">帮助</router-link>
      <router-link to="/helpPage/seekList" class="nav-item">求助</router-link>
    </div>
    <div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
  import Scroll from "base/scroll/scroll"
  import MHeader from "components/header/header"

  export default {
    components: {
      Scroll,
      MHeader
    }
  }
</script>

<style lang="less" scoped>
  @import "~common/style/index";

  .help-wrapper {
    position: fixed;
    top: @headerHeight;
    bottom: @tabHeight;
    left: 0;
    right: 0;
    .nav {
      display: flex;
      height: @tabHeight/2;
      line-height: @tabHeight/2;
      .border-1px(@divisionLine);
      a {
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
  }
</style>
