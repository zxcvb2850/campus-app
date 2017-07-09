<template>
  <div class="header">
    <h2 class="title">
      <slot></slot>
    </h2>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="less" scoped>
  @import "~common/style/index";

  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: @headerHeight;
    background-color: @mainBackground;
    .title {
      height: @headerHeight;
      line-height: @headerHeight;
      font-size: 18px;
      text-align: center;
      color: @headerColor;
    }
  }
</style>
