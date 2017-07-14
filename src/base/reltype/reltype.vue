<template>
  <div class="reltype" v-show="relType>0">
    <div class="type-page" v-show="relType === 1">
      <v-header>食堂餐</v-header>
      <a href="javascript:void(0)" class="icon icon-jiantouicon" @click="back"></a>
      <p class="details">填写详情</p>
      <scroll class="canteen-wrapper">
        <ul class="wrapper-form">
          <li>食堂: <input type="text" name="canteen" id="canteen"></li>
          <li>菜品: <input type="text" name="checkfood" id="checkFood"></li>
          <li>地点: <input type="text" name="address" id="addressCanteen">
            <input id="infoCanteen" type="checkbox" checked="checked" value="1">
            <label for="info">隐藏信息</label>
          </li>
          <li>备注: <input type="text" name="remark" id="remarkCanteen"></li>
          <li>隐藏信息: <input type="text" name="hideCanteen" id="hideCanteen">
            <div class="desc">只有接单者可以看到</div>
          </li>
          <li><p class="price">赏金：<input type="text" style="width: 50px;" id="priceCanteen">￥</p></li>
        </ul>
      </scroll>
      <div class="footer">
        <a href="javascript:void(0)" @click="submitCanteen">发布</a>
      </div>
    </div>
    <div class="type-page" v-show="relType === 2">
      <v-header>取快递</v-header>
      <a href="javascript:void(0)" class="icon icon-jiantouicon" @click="back"></a>
      <p class="details">填写详情</p>
      <scroll class="canteen-wrapper">
        <ul class="wrapper-form">
        </ul>
      </scroll>
      <div class="footer">
        <a href="javascript:void(0)">发布</a>
      </div>
    </div>
    <div class="type-page" v-show="relType === 3">
      <v-header>帮购物</v-header>
      <a href="javascript:void(0)" class="icon icon-jiantouicon" @click="back"></a>
      <p class="details">填写详情</p>
      <scroll class="canteen-wrapper">
        <ul class="wrapper-form">
        </ul>
      </scroll>
      <div class="footer">
        <a href="javascript:void(0)">发布</a>
      </div>
    </div>
    <div class="type-page" v-show="relType === 4">
      <v-header>周边小吃</v-header>
      <a href="javascript:void(0)" class="icon icon-jiantouicon" @click="back"></a>
      <p class="details">填写详情</p>
      <scroll class="canteen-wrapper">
        <ul class="wrapper-form">
        </ul>
      </scroll>
      <div class="footer">
        <a href="javascript:void(0)">发布</a>
      </div>
    </div>
    <div class="type-page" v-show="relType === 5">
      <v-header>帮摄影</v-header>
      <a href="javascript:void(0)" class="icon icon-jiantouicon" @click="back"></a>
      <p class="details">填写详情</p>
      <scroll class="canteen-wrapper">
        <ul class="wrapper-form">
        </ul>
      </scroll>
      <div class="footer">
        <a href="javascript:void(0)">发布</a>
      </div>
    </div>
    <div class="type-page" v-show="relType === 6">
      <v-header>其他</v-header>
      <a href="javascript:void(0)" class="icon icon-jiantouicon" @click="back"></a>
      <p class="details">填写详情</p>
      <scroll class="canteen-wrapper">
        <ul class="wrapper-form">
        </ul>
      </scroll>
      <div class="footer">
        <a href="javascript:void(0)">发布</a>
      </div>
    </div>
  </div>
</template>

<script>
  import VHeader from "base/header/header"
  import Scroll from "base/scroll/scroll"

  export default {
    props: {
      relType: {
        type: Number,
        default: 0
      }
    },
    methods: {
      back(){
        this.$emit("relBack");
      },
      submitCanteen(){
        let reg = /\d/;
        let canteen = document.querySelector("#canteen").value;
        let checkFood = document.querySelector("#checkFood").value;
        let addressCanteen = document.querySelector("#addressCanteen").value;
        let remarkCanteen = document.querySelector("#remarkCanteen").value;
        let hideCanteen = document.querySelector("#hideCanteen").value;
        let priceCanteen = document.querySelector("#priceCanteen").value;
        if (canteen === '' || checkFood === '' || addressCanteen === '' || remarkCanteen === '' || hideCanteen === '') {
          console.log("不能为空");
          return;
        }
        if (!reg.test(priceCanteen)) {
          console.log("价格必须是数字");
          return;
        }
        this.$emit("subCanteen", canteen, checkFood, addressCanteen, remarkCanteen, hideCanteen, priceCanteen);
      }
    },
    components: {
      VHeader,
      Scroll
    }
  }
</script>

<style lang="less" scoped>
  @import "~common/style/index";

  .reltype {
    .type-page {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: @tabBackground;
      .icon-jiantouicon {
        padding: 12px;
        position: absolute;
        top: 0;
        left: 0;
        .box-sizing;
        text-decoration: none;
        color: @tabBackground;
      }
      .details {
        height: @tabHeight/2;
        line-height: @tabHeight/2;
        text-align: center;
        color: #000;
        .border-1px(#000);
      }
      .canteen-wrapper {
        position: absolute;
        top: @tabHeight + @tabHeight/2-10px;
        bottom: @tabHeight;
        left: 0;
        right: 0;
        overflow: hidden;
      }
      .wrapper-form {
        li {
          padding: 14px 20px;
          .border-1px(@divisionLine);
          .box-sizing;
        }
        input {
          padding: 8px;
          background-color: transparent;
          border: none;
          border-bottom: 1px solid #000;
        }
        .desc {
          margin: 10px 0;
          text-align: center;
          color: @mainTextColor;
        }
        .price {
          height: 150px;
          line-height: 150px;
          text-align: center;
          font-size: @maxFontSize;
          color: @priceColor;
          input {
            font-size: @maxFontSize;
            color: @priceColor;
          }
        }
      }
      .footer {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: @tabHeight;
        a {
          display: block;
          height: @tabHeight;
          line-height: @tabHeight;
          text-align: center;
          text-decoration: none;
          background-color: @mainBackground;
          color: @tabBackground;
          font-size: @maxFontSize;
          font-weight: bold;
        }
      }
    }
  }

</style>
