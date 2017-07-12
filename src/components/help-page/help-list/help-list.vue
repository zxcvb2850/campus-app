<template>
  <div class="help-list">
    <div class="filter-part">
      <p class="filter" @click="filterBtn">筛选</p>
      <transition name="slide">
        <div class="filter-condition" v-show="isFilter">
          <scroll class="filter-wrapper" ref="filterWrapper">
            <div>
              <p>筛选条件</p>
            </div>
          </scroll>
        </div>
      </transition>
    </div>
    <v-mask @clickMask="hideMask" :isFilter="isFilter"></v-mask>
    <scroll class="help-wrapper">
      <ul>
        <li class="help-item">
          <div class="center">
            <div class="user-icon"><img src="../../../assets/logo.png" alt=""></div>
            <div class="demand">
              <h3 class="title">取快递</h3>
              <p class="address">xxxxxxxxxxxxxxx</p>
              <p class="desc">简述：<span>无</span></p>
              <p class="complete icon icon-iconcompleted" v-show="isComplete"></p>
            </div>
            <div class="price"><span>3</span>￥</div>
          </div>
          <div class="footer">
            <div class="sex"><span class="icon icon-girl"></span>网名</div>
            <div class="time">发布时间:<span>MM-dd HH:MM</span></div>
          </div>
        </li>
      </ul>
    </scroll>
  </div>
</template>

<script>
  import Scroll from "base/scroll/scroll"
  import VMask from "base/mask/mask"

  export default {
    data(){
      return {
        isFilter: false,
        isComplete: false
      }
    },
    methods: {
      _refreshFilter(){
        if (this.isFilter) {
          this.$refs.filterWrapper.refresh();
        }
      },
      filterBtn(){
        this.isFilter = true;
        this._refreshFilter();
      },
      hideMask(isShow){
        this.isFilter = !isShow;
      }
    },
    components: {
      Scroll,
      VMask
    }
  }
</script>

<style lang="less" scoped>
  @import "~common/style/index";

  .help-list {
    position: absolute;
    top: @tabHeight/2;
    bottom: 0;
    left: 0;
    right: 0;
    .filter-part {
      position: relative;
      top: 0;
      bottom: 0;
      right: 20px;
      .filter {
        position: absolute;
        top: -50px;
        bottom: 0;
        right: 0;
        font-size: @titleFontSize;
        font-weight: normal;
        color: @headerColor;
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
    }
    .help-wrapper {
      height: 100%;
      overflow: hidden;
      .help-item {
        padding: 10px;
        .border-1px(@divisionLine);
        &:last-child {
          .border-none;
        }
        .center {
          display: flex;
          align-items: center;
          .bor-sizing;
          box-sizing: border-box
        }
        .user-icon {
          flex: 0 0 100px;
          margin-right: 20px;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          overflow: hidden;
          img {
            width: 100%;
          }
        }
        .demand {
          position: relative;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          line-height: 20px;
          .title {
            font-size: @itemTitleFontSize;
            color: @importantColor;
          }
          .address {
            font-size: @titleFontSize;
            .no-wrap();
          }
          .desc {
            font-size: @mainFontSize;
          }
          .complete {
            position: absolute;
            top: 50%;
            right: 0;
            font-size: 80px;
            color: @completeColor;
          }
        }
        .price {
          flex: 20px 0 0;
          text-align: center;
          span {
            font-size: @headerHeight;
            color: @priceColor;
          }
        }
        .footer {
          display: flex;
          padding-top: 10px;
          font-size: @mainFontSize;
          .sex {
            flex: 1;
            text-align: left;
            .icon-girl {
              color: #dc4883;
            }
            .icon-boy {
              color: #487ef8;
            }
          }
          .time {
            flex: 1;
            text-align: right;
          }
        }
      }
    }
  }
</style>
