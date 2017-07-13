<template>
  <div class="reltype" v-show="relType>0">
    <div class="type-page" v-show="relType === 1">
      <v-header>食堂餐</v-header>
      <p class="details">填写详情</p>
      <ul class="wrapper-form">
        <li>食堂: <input type="text"></li>
        <li>菜品: <input type="text"></li>
      </ul>
    </div>
    <div class="type-page" v-show="relType === 2">2</div>
    <div class="type-page" v-show="relType === 3">3</div>
    <div class="type-page" v-show="relType === 4">4</div>
    <div class="type-page" v-show="relType === 5">5</div>
    <div class="type-page" v-show="relType === 6">6</div>
  </div>
</template>

<script>
  import VHeader from "base/header/header"

  export default {
    props: {
      relType: {
        type: Number,
        default: 0
      }
    },
    components: {
      VHeader
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
      .details {
        height: 25px;
        line-height: 25px;
        text-align: center;
        color: #000;
        .border-1px(#000);
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
      }
    }
  }

</style>
