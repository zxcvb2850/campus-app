<template>
  <div class="my-page">
    <login v-show="!isLogin" @clickLogin="clickLogin"></login>
    <login-page></login-page>
    <div class="my-wrapper" v-show="isLogin">
      <div class="header">
        <div class="filter" :style="bgStyle"></div>
        <div class="user-info">
          <div class="user-data">
            <div class="icon-wrapper"><img src="../../assets/logo.png" alt=""></div>
            <ul class="data">
              <li>
                <p>段位</p>
                <span>黄金</span>
              </li>
              <li>
                <p>鲜花</p>
                <span>2131</span>
              </li>
              <li>
                <p>好友</p>
                <span>10</span>
              </li>
            </ul>
          </div>
          <h1 class="username">username</h1>
          <p class="autograph">我是来自南方的一匹狼</p>
        </div>
      </div>
      <div class="nav">
        <ul class="nav-wrapper">
          <li class="nav-item">订单</li>
          <li class="nav-item">赏金卷</li>
          <li class="nav-item">印象</li>
          <li class="nav-item">反馈</li>
        </ul>
      </div>
      <div class="user-dynamic">
        <div class="dynamic-nav">
          <a href="javascript:void(0)" class="nav-item">我的动态</a>
          <a href="javascript:void(0)" class="nav-item">课程表</a>
        </div>
        <div class="content">
          <div></div>
        </div>
        <div>我是动态页面</div>
        <div>我是课程表页面</div>
      </div>
    </div>
  </div>
</template>

<script>
  import Login from 'base/login/login'
  import LoginPage from 'components/login-page/login-page'
  import {mapGetters, mapMutations} from 'vuex'

  export default {
    props: {
      bgImage: {
        type: String,
        default: ''
      }
    },
    computed: {
      bgStyle(){
        return `background-image:url("http://img2.imgtn.bdimg.com/it/u=257099789,2726639331&fm=26&gp=0.jpg")`
      },
      ...mapGetters([
        'isLogin'
      ])
    },
    methods: {
      clickLogin(){
        this.setLoginPage(true)
      },
      ...mapMutations({
        setLoginPage: "SET_LOGINPAGE"
      })
    },
    components: {
      Login,
      LoginPage
    }
  }
</script>

<style lang="less" scoped>
  @import '~common/style/index';

  .my-page {
    .my-wrapper {
      .header {
        position: relative;
        width: 100%;
        height: 0;
        padding-top: 70%;
        color: @headerColor;
        overflow: hidden;
        .filter {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          background-color: rgba(100, 100, 100, .6);
          filter: blur(2px);
          transform-origin: top;
          background-size: cover;
        }
        .user-info {
          position: absolute;
          top: 20%;
          left: @tabHeight;
          width: 100%;
        }
        .user-data {
          overflow: hidden;
          .icon-wrapper {
            float: left;
            width: @iconHeight;
            height: @iconHeight;
            border-radius: 50%;
            border: 2px solid @tabBackground;
            overflow: hidden;
            img {
              width: 100%;
            }
          }
          .data {
            display: flex;
            margin-top: @iconHeight/4;
            width: 50%;
            height: @iconHeight/2;
            text-align: center;
            font-size: 0;
            li {
              flex: 1;
              .dis-flex;
              height: 100%;
              border-right: 1px solid @divisionLine;
              font-size: @mainFontSize;
              color: #000;
              p {
                font-size: @titleFontSize;
                color: @tabBackground;
              }
            }
          }
        }
        .username {
          margin: 10px 0;
          font-size: @maxFontSize;
        }
        .autograph {
          display: block;
          padding-left: 10px;
          width: 80%;
          .no-wrap;
        }
      }
      .nav {
        position: relative;
        .nav-wrapper {
          display: flex;
          text-align: center;
          height: @tabHeight;
          .border-1px(@divisionLine);
          .nav-item {
            flex: 1;
            .dis-flex;
          }
        }
      }
      .user-dynamic {
        .dynamic-nav {
          display: flex;
          height: @headerHeight;
          line-height: @headerHeight;
          text-align: center;
          border-bottom: 1px solid @maskBackground;
          .nav-item {
            flex: 1;
            text-decoration: none;
            color: #000;
            &.active{
              color: @importantColor;
              border-bottom: 1px solid @filterBackground;
            }
          }
        }
      }
    }
  }
</style>
