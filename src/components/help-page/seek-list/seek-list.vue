<template>
  <div class="seek-list">
    <div class="filter-part">
      <p class="filter">发布</p>
    </div>
    <div class="seek-add" v-show="!seekList.length">
      <div class="seek-add-wrapper">
        <div class="seek-add-btn" @click="release">+</div>
        <p class="desc">你还没有发不过求助，快来发布吧</p>
      </div>
    </div>
    <scroll class="help-wrapper" v-show="seekList.length>0">
      <ul>
        <li class="help-item">
          <div class="center">
            <div class="user-icon"><img src="../../../assets/logo.png" alt=""></div>
            <div class="demand">
              <h3 class="title">取快递</h3>
              <p class="address">地址：<span>东十C335</span></p>
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
        <li class="help-item">
          <div class="center">
            <div class="user-icon"><img src="../../../assets/logo.png" alt=""></div>
            <div class="demand">
              <h3 class="title">取快递</h3>
              <p class="address">地址：<span>东六223</span></p>
              <p class="desc">简述：<span>帮我送到寝室</span></p>
              <p class="complete icon icon-iconcompleted" v-show="!isComplete"></p>
            </div>
            <div class="price"><span>3</span>￥</div>
          </div>
          <div class="footer">
            <div class="sex"><span class="icon icon-boy"></span>网名</div>
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
  import Login from "base/login/login"
  import loginPage from "components/login-page/login-page"

  export default {
    data(){
      return {
        seekList: [1],
        isComplete: true
      }
    },
    methods: {
      clickLogin(){
        this.setLoginPage(true)
      },
      release(){
        this.$router.push("seekList/release")
      },
    },
    components: {
      Scroll,
      VMask,
      Login,
      loginPage
    }
  }
</script>

<style lang="less" scoped>
  @import "~common/style/index";

  .seek-list {
    .filter-part {
      position: relative;
      top: 0;
      bottom: 0;
      right: 20px;
      .filter {
        position: absolute;
        top: -50px;
        right: 0;
        font-size: @titleFontSize;
        font-weight: normal;
        color: @headerColor;
      }
    }
    .go-login {
      margin: 30px auto;
      width: 100%;
      .desc {
        margin-bottom: 30px;
        text-align: center;
        color: @mainTextColor;
        font-size: @mainFontSize;
      }
      .login-btn {
        text-align: center;
        a {
          display: block;
          margin: 0 auto;
          width: 80%;
          height: @headerHeight;
          line-height: @headerHeight;
          -webkit-border-radius: 10px;
          -moz-border-radius: 10px;
          border-radius: 10px;
          text-decoration: none;
          color: @tabBackground;
          background-color: @mainBackground;
        }
      }
    }
    .seek-add {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 1;
      .seek-add-wrapper {
        position: absolute;
        top: 40%;
        left: 50%;
        display: block;
        transform: translate(-50%, -50%);
      }
      .seek-add-btn {
        margin: 0 auto 10px;
        width: 100px;
        height: 100px;
        line-height: 100px;
        text-align: center;
        .bor-radius(50%);
        font-size: 120px;
        background-color: @filterBackground;
        color: @tabBackground;
      }
      .desc {
        text-align: center;
        line-height: @mainLineHeight;
        font-size: @mainFontSize;
      }
    }
    .help-wrapper {
      height: 100%;
      overflow: hidden;
      .help-item {
        padding: 10px;
        .border-1px(@divisionLine);
        .box-sizing;
        &:last-child {
          .border-none;
        }
        .center {
          display: flex;
          align-items: center;
          .box-sizing;
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
          flex: 50px 0 0;
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
            .icon {
              padding-right: 10px;
              &.icon-girl {
                color: #dc4883;
              }
              &.icon-boy {
                color: #487ef8;
              }
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
