<template>
  <header class="header">
    <h2 class="title">
      <slot></slot>
    </h2>
  </header>
</template>

<script>
  export default {}
</script>

<style lang="less" scoped>
  @import "~common/style/index";

  .header {
    position: relative;
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
