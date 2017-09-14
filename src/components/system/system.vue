<template>
  <transition name="left-fade">
    <div class="system">
      <v-header>设置</v-header>
      <div class="filter-part">
        <i class="icon icon-jiantouicon" @click="back"></i>
      </div>
      <div class="system-wrapper">
        <ul>
          <li class="item" @click="myInfo">
            <p class="title">个人信息</p>
            <p class="icon">&gt;</p>
          </li>
          <li class="item">
            <p class="title">换绑手机</p>
            <p class="info">138****6918</p>
            <p class="icon">&gt;</p>
          </li>
          <li class="item">
            <p class="title">社交账号绑定</p>
            <p class="info">绑定/解绑</p>
            <p class="icon">&gt;</p>
          </li>
          <li class="item">
            <p class="title">登录密码 <span class="red">(中)</span></p>
            <p class="info">修改</p>
            <p class="icon">&gt;</p>
          </li>
          <li class="item margin-top">
            <p class="title">安全中心</p>
            <p class="icon">&gt;</p>
          </li>
          <li class="item">
            <p class="title">通用</p>
            <p class="icon">&gt;</p>
          </li>
        </ul>
        <div class="cancellation">
          <h3 class="text">退出账号</h3>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import VHeader from "base/header/header"

  export default {
    data(){
      return {};
    },
    methods: {
      back(){
        this.$router.push("/myPage");
      },
      myInfo(){
        this.$router.replace("/myInfo")
      }
    },
    components: {
      VHeader
    }
  }
</script>

<style lang="less" scoped>
  @import "~common/style/index";

  .system {
    position: fixed;
    top: 0;
    left: 0;
    bottom: -@tabHeight;
    right: 0;
    z-index: 100;
    background-color: @tabBackground;
    &.left-fade-enter-active, &.left-fade-leave-active {
      transition: all .2s;
    }
    &.left-fade-enter, &.left-fade-leave-to {
      transform: translate3d(100%, 0, 0)
    }
    .filter-part {
      width: 100%;
      .icon-jiantouicon {
        position: absolute;
        top: 0;
        left: 10px;
        padding: 20px 10px;
        color: #fff;
        font-size: @titleFontSize;
      }
    }
    .system-wrapper {
      .item {
        display: flex;
        padding: 4px 10px;
        height: 40px;
        line-height: 40px;
        font-size: @titleFontSize;
        .border-1px(@divisionLine);
        .box-sizing;
        background-color: #fff;
        &.margin-top {
          margin-top: 10px;
        }
        .title {
          flex: 1;
          color: #000;
          font-size: @titleFontSize;
          .red {
            color: @completeColor;
          }
        }
        .info {
          color: @mainTextColor;
          font-size: @mainFontSize;
        }
        .icon {
          flex: 0 0 20px;
          color: @mainTextColor;
          font-size: @mainFontSize;
          text-align: right;
        }
      }
      .cancellation {
        margin: 10px auto;
        width: 80%;
        background-color: #fff;
        border: 1px solid @divisionLine;
        .text {
          line-height: 40px;
          text-align: center;
          font-size: @itemTitleFontSize;
          font-weight: 500;
        }
      }
    }
  }
</style>
