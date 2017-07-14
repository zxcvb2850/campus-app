<template>
  <div class="news-page">
    <v-header>消息</v-header>
    <div class="nav">
      <a href="javascript:void(0)" class="nav-item">附近</a>
      <a href="javascript:void(0)" class="nav-item">消息</a>
    </div>
    <div class="content">
      <div class="content-wrapper">
        111
      </div>
    </div>
  </div>
</template>

<script>
  import VHeader from "base/header/header"

  export default {
    components: {
      VHeader
    }
  }
</script>

<style lang="less" scoped>
  @import "~common/style/index";

  .news-page {
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
    .content {
      position: absolute;
      top: @headerHeight + @tabHeight/2;
      bottom: @headerHeight;
      left: 0;
      right: 0;
    }
  }
</style>
