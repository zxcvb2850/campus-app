<template>
  <transition name="slide">
    <div class="my-info">
      <v-header>个人信息</v-header>
      <div class="filter-part">
        <p class="icon icon-jiantouicon" @click="back"></p>
      </div>
      <div class="info">
        <ul>
          <li class="item img">
            <p class="text">头像</p>
            <p class="desc"><img src="../../assets/icon-10.png" alt=""></p>
            <p class="icon">&gt;</p>
          </li>
          <li class="item">
            <p class="text">昵称</p>
            <p class="desc">海棠花的美</p>
            <p class="icon">&gt;</p>
          </li>
          <li class="item">
            <p class="text">生日</p>
            <p class="icon">&gt;</p>
          </li>
          <li class="item">
            <p class="text">收货地址</p>
            <p class="desc">修改/添加</p>
            <p class="icon">&gt;</p>
          </li>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script>
  import VHeader from "base/header/header"

  export default {
    methods: {
      back(){
        this.$router.push("/myPage");
      }
    },
    components: {
      VHeader
    }
  }
</script>

<style lang="less" scoped>
  @import "~common/style/index";

  .my-info {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: @tabBackground;
    z-index: 1;
    &.slide-enter-active, &.slide-leave-active {
      transition: all .3s;
    }
    &.slide-enter, &.slide-leave-to {
      transform: translate3d(100%, 0, 0);
    }
    .filter-part {
      width: 100%;
      .icon-jiantouicon {
        position: absolute;
        top: 0;
        height: @headerHeight;
        line-height: @headerHeight;
        color: #fff;
        font-size: @titleFontSize;
        left: 10px;
      }
    }
    .info {
      background-color: @headerColor;
      .item {
        display: flex;
        padding: 4px 16px;
        line-height: @tabHeight/2;
        .border-1px(@divisionLine);
        font-size: @mainFontSize;
        color: @mainTextColor;
        &.img {
          height: @tabHeight;
          line-height: @tabHeight;
        }
        .text {
          flex: 1;
          color: #000;
          font-size: @titleFontSize;
        }
        .icon {
          flex: 0 0 20px;
          text-align: right;
        }
        .desc {
          img {
            width: @tabHeight;
            height: @tabHeight;
            .bor-radius(50%);
            overflow: hidden;
          }
        }
      }
    }
  }
</style>
