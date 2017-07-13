<template>
  <div class="release">
    <v-header>求助</v-header>
    <div class="release-type">
      <p class="select-type">选择类型</p>
      <ul class="item-wrapper">
        <li class="re-item" v-for="(item,index) in releases" @click="select(item,index)">{{item.text}}</li>
      </ul>
    </div>
    <div class="footer">
      <a href="javascript:void(0)">下一步</a>
    </div>
  </div>
</template>

<script>
  import VHeader from "base/header/header"

  export default {
    data(){
      return {
        releases: [
          {
            "id": "1",
            "text": "食堂餐"
          },
          {
            "id": "2",
            "text": "取快递"
          },
          {
            "id": "3",
            "text": "帮购物"
          },
          {
            "id": "4",
            "text": "周边小吃"
          },
          {
            "id": "5",
            "text": "帮摄影"
          },
          {
            "id": "6",
            "text": "其他"
          },
        ]
      }
    },
    methods: {
      select(item,index){
        console.log(item.id)
        console.log(index)
      }
    },
    components: {
      VHeader
    }
  }
</script>

<style lang="less" scoped>
  @import "~common/style/index";

  .release {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
    background-color: @tabBackground;
    color: #000;
    .release-type {
      position: absolute;
      top: @headerHeight;
      bottom: @tabHeight;
      left: 0;
      right: 0;
      overflow: hidden;
      .select-type {
        height: @tabHeight/2;
        line-height: @tabHeight/2;
        text-align: center;
        color: @mainTextColor;
        .border-1px(@mainTextColor)
      }
      .item-wrapper {
        text-align: center;
        font-size: 0;
      }
      .re-item {
        display: inline-block;
        padding: 20px;
        .box-sizing;
        width: 30%;
        font-size: 14px;
      }
    }
    .footer {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: @tabHeight;
      line-height: @tabHeight;
      a {
        display: block;
        font-size: 20px;
        font-weight: bold;
        text-align: center;
        text-decoration: none;
        background-color: @mainBackground;
        color: @headerColor;
      }
    }
  }
</style>
