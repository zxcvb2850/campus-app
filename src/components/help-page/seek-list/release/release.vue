<template>
  <div class="release">
    <v-header>求助</v-header>
    <div class="release-type">
      <p class="select-type">选择类型</p>
      <ul class="item-wrapper">
        <li class="re-item" :class="{'active':index === cur}" v-for="(item,index) in releases"
            @click="select(item,index)"><i class="icon" :class="item.icon"></i><span>{{item.text}}</span>
        </li>
      </ul>
    </div>
    <div class="footer">
      <a href="javascript:void(0)" @click="releaseBack">取消</a>
      <a href="javascript:void(0)" :class="{'next':!isNext}" @click="formFilling">下一步</a>
    </div>
    <rel-type :relType="postId" v-show="postId>0" @relBack="relBack"></rel-type>
  </div>
</template>

<script>
  import VHeader from "base/header/header"
  import relType from "base/reltype/reltype"
  import {mapGetters} from "vuex"

  export default {
    data(){
      return {
        releases: [
          {
            "id": 1,
            "icon": "icon-setup",
            "text": "食堂餐"
          },
          {
            "id": 2,
            "icon": "icon-icon-yxj-express",
            "text": "取快递"
          },
          {
            "id": 3,
            "icon": "icon-shoppingcart2",
            "text": "帮购物"
          },
          {
            "id": 4,
            "icon": "icon-snacks",
            "text": "周边小吃"
          },
          {
            "id": 5,
            "icon": "icon-upload-demo",
            "text": "帮摄影"
          },
          {
            "id": 6,
            "icon": "icon-other",
            "text": "其他"
          },
        ],
        cur: null,
        itemId: null,
        postId: 0,
        isNext: false
      }
    },
    created(){
      this._showRel();
    },
    methods: {
      _showRel(){
        if (this.isLogin) {
          return;
        }
        this.$router.back();
      },
      releaseBack(){
        this.$router.back();
      },
      select(item, index){
        this.cur = index;
        this.itemId = item.id;
        this.isNext = true;
      },
      formFilling(){
        if (!this.isNext) {
          this.postId = 0;
        } else {
          this.postId = this.itemId;
        }
      },
      relBack(){
        this.postId = 0;
      }
    },
    computed: {
      ...mapGetters([
        "isLogin"
      ])
    },
    components: {
      VHeader,
      relType
    },
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
        margin: 0 auto;
        width: 80%;
        text-align: center;
        font-size: 0;
        overflow: hidden;
      }
      .re-item {
        float: left;
        padding: 20px;
        .box-sizing;
        .dis-flex;
        width: 33%;
        line-height: @maxFontSize;
        text-align: center;
        font-size: 14px;
        i {
          margin-bottom: 10px;
          width: @tabHeight;
          height: @tabHeight;
          line-height:@tabHeight;
          text-align: center;
          border-radius: 50%;
          border: 1px solid @importantColor;
          font-size: @maxIconFontSize;
        }
        &.active {
          color: @tabBackground;
          background-color: @filterBackground;
          i{
            border-color: #fff;
            color: #fff;
          }
        }
      }
    }
    .footer {
      display: flex;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: @tabHeight;
      line-height: @tabHeight;
      a {
        flex: 1;
        font-size: @maxFontSize;
        font-weight: bold;
        text-align: center;
        text-decoration: none;
        background-color: @mainBackground;
        color: @headerColor;
        .box-sizing;
        &.next {
          background-color: transparent;
          color: #000;
        }
        &:first-child {
          border-right: 1px solid @mainTextColor;
        }
        &:last-child {
          border-left: 1px solid @mainTextColor;
        }
      }
    }
  }
</style>
