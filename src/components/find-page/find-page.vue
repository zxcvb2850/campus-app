<template>
  <div class="about">
    <div class="about-wrapper">
      <ol>
        <li class="item">
          <span>项目名称:未来生活H5WebApp（校园版）</span>
        </li>
        <li class="item">
          <span>团队名称：鑫鑫</span>
        </li>
        <li class="item">
          <span>团队成员：王睿、潘鑫</span>
        </li>
        <li class="item">
          <span>来自：武汉职业技术学院</span>
        </li>
        <li class="item">
          <span>联系方式：18986234786</span>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="less" scoped>
  @import "~common/style/index";

  .about {
    position: fixed;
    top: 0;
    left: 0;
    bottom: @tabHeight;
    right: 0;
    .about-wrapper {
      position: absolute;
      top: 50%;
      width: 100%;
      text-align: center;
      transform: translateY(-50%);
      .item {
        line-height: @tabHeight;
        font-size: @itemTitleFontSize;
      }
    }
  }
</style>
