<template>
  <div class="help-wrapper">
    <m-header>
      <p>我的学校<span></span></p>
      <p class="filter" @click="filterBtn">筛选</p>
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
    <transition name="slide">
      <div class="filter-condition" v-show="isFilter">
        <scroll class="filter-wrapper" ref="filterWrapper">
          <div>
            <p>筛选条件</p>
          </div>
        </scroll>
      </div>
    </transition>
    <div class="mask" v-show="isFilter" @click="hideMask"></div>
  </div>
</template>

<script>
  import Scroll from "base/scroll/scroll"
  import MHeader from "components/header/header"

  export default {
    data(){
      return {
        isFilter: false
      }
    },
    methods: {
      filterBtn(){
        this.isFilter = true;
        this._refreshFilter()
      },
      hideMask(){
        this.isFilter = false;
      },
      _refreshFilter(){
        if (this.isFilter) {
          this.$refs.filterWrapper.refresh();
        }
      }
    },
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
    .filter {
      position: absolute;
      bottom: 0;
      right: 20px;
      font-size: @titleFontSize;
      font-weight: normal;
    }
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
    .filter-condition {
      padding: 0 20px;
      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      z-index: 1000;
      background-color: @tabBackground;
      .filter-wrapper {
        height: 100%;
        overflow: hidden;
      }
    }
    .slide-enter-active, .slide-leave-active {
      transition: all .3s;
    }
    .slide-enter, .slide-leave-to {
      transform: translate3d(100%, 0, 0);
    }
    .mask {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 999;
      background-color: @maskBackground;
    }
  }
</style>
