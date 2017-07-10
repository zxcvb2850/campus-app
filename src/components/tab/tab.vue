<template>
  <div class="tab">
    <div class="tab-item">
      <router-link to="/helpPage" tag="div">
        <p><span class="icon icon-index"></span>帮助</p>
      </router-link>
    </div>
    <div class="tab-item">
      <router-link to="/newsPage" tag="div">
        <p><span class="icon icon-message1"></span>消息</p>
      </router-link>
    </div>
    <div class="tab-item">
      <router-link to="/findPage" tag="div">
        <p><span class="icon icon-find"></span>发现</p>
      </router-link>
    </div>
    <div class="tab-item">
      <router-link to="/myPage" tag="div">
        <p><span class="icon icon-my"></span>我的</p>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="less" scoped>
  @import "~common/style/index";

  .tab {
    position: fixed;
    bottom:0;
    left:0;
    right:0;
    display: flex;
    height: @tabHeight;
    line-height: @tabHeight;
    background-color: @tabBackground;
    .tab-item {
      flex: 1;
      text-align: center;
      div {
        display: block;
        text-decoration: none;
        font-size: @mainFontSize;
        color: @mainTextColor;
        span{
          display: block;
          height: 14px;
          line-height:40px;
          font-size: @headerFontSize;
        }
        &.active {
          color: @importantColor;
        }
      }

    }
  }
</style>
