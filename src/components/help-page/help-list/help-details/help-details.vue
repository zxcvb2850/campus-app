<template>
  <transition name="slide">
    <div class="help-disc">
      <v-header>订单详情</v-header>
      <div>
        <div class="filter-part">
          <span class="icon icon-jiantouicon" @click="back"></span>
        </div>
        <div class="detail-wrapper" v-if="detail.complete">
          <p class="item">订单类型: <span v-html="helpType(detail.type)"></span></p>
          <p class="item">订单号: <span>{{detail.id}}</span></p>
          <p class="item">订单时间: <span>{{detail.releaseTime}}</span></p>
          <p class="item">地址: <span>{{detail.address}}</span></p>
          <p class="item">订单描述: <span>{{detail.desc}}</span></p>
          <p class="item">订单状态 <span class="red">已完成</span></p>
          <p class="item">支付方式: <span>在线支付</span></p>
        </div>
        <div class="detail-wrapper no-doing" v-if="!detail.complete">
          <div class="wrapper">
            <p class="item">订单类型: <span v-html="helpType(detail.type)"></span></p>
            <p class="item">订单号: <span>{{detail.id}}</span></p>
            <p class="item">订单时间: <span>{{detail.releaseTime}}</span></p>
            <p class="item">地址: <span>{{detail.address}}</span></p>
            <p class="item">订单描述: <span>{{detail.desc}}</span></p>
            <p class="item">订单状态 <span class="red">未完成</span></p>
            <p class="item">(感谢你对我们的大力支持)</p>
            <p class="item get-orders">接单</p>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import {mapGetters} from "vuex"
  import VHeader from "base/header/header"
  import {transformType} from "common/js/transform"

  export default {
    created(){
      this._getDetail();
    },
    methods: {
      back(){
        this.$router.back();
      },
      helpType(type){
        return transformType(type);
      },
      _getDetail(){
        if (!this.detail.id) {
          this.$router.back()
        }
      }
    },
    computed: {
      ...mapGetters([
        'detail'
      ])
    },
    components: {
      VHeader
    }
  }
</script>

<style lang="less" scoped>
  @import "~common/style/index";

  .help-disc {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: @tabBackground;
    .filter-part {
      position: absolute;
      height: @tabHeight;
      .icon-jiantouicon {
        padding: 10px;
        position: absolute;
        top: -74px;
        left: 0;
        line-height: @tabHeight - 20;
        font-size: @titleFontSize;
        font-weight: normal;
        color: @headerColor;
      }
    }
    .detail-wrapper {
      padding: 20px 10px;
      margin: 20px auto;
      width: 80%;
      max-width: 500px;
      .bor-radius(10px);
      background-color: #fff;
      .item {
        height: @tabHeight/2;
        line-height: @tabHeight/2;
        color: @mainTextColor;
        font-size:@titleFontSize;
        &.get-orders {
          margin: 0 auto;
          padding: 2px 4px;
          width: 60px;
          .bor-radius(10px);
          color: #fff;
          background-color: #0f8faa;
          text-align: center;
        }
        span{
          color: #000;
          font-size: @itemTitleFontSize;
          &.red{
            color: @completeColor;
          }
        }
      }
    }
  }

  .slide-enter-active, .slide-leave-active {
    transition: all .3s;
  }

  .slide-enter, .slide-leave-to {
    transform: translate3D(100%, 0, 0);
  }
</style>
