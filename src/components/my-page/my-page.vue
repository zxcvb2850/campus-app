<template>
  <div class="my-page">
    <login v-show="!isLogin" @clickLogin="clickLogin"></login>
    <login-page></login-page>
    <div class="my-wrapper" v-show="isLogin">
      <div class="header" ref="header">
        <div class="back" ref="back">
          <i class="icon icon-jiantouicon icon-back"></i>
          <h2 class="title" v-show="showTitle" ref="title">我的详情</h2>
        </div>
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
      <div class="bg-layer" ref="layer"></div>
      <scroll :probe-type="probeType" :listen-scroll="listenScroll" @scroll="scroll" class="nav" ref="nav">
        <div>
          <ul class="nav-wrapper">
            <li class="nav-item">订单</li>
            <li class="nav-item">赏金卷</li>
            <li class="nav-item">印象</li>
            <li class="nav-item">反馈</li>
          </ul>
          <div class="user-dynamic">
            <div class="dynamic-nav">
              <router-link to="dynamic" class="nav-item">我的动态
              </router-link>
              <router-link to="schedule" class="nav-item">课程表
              </router-link>
            </div>
          </div>
          <div class="content" ref="content">
            <router-view></router-view>
          </div>
        </div>
      </scroll>
    </div>
  </div>
</template>

<script>
  import Login from 'base/login/login'
  import LoginPage from 'components/login-page/login-page'
  import {mapGetters, mapMutations} from 'vuex'
  import BScroll from 'better-scroll'
  import Scroll from 'base/scroll/scroll'

  const HEAD_HEIGHT = 40;

  export default {
    props: {
      bgImage: {
        type: String,
        default: ''
      }
    },
    data(){
      return {
        currentIndex: 0,
        scrollY: 0,
        showTitle: false
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
    created(){
      this.probeType = 3;
      this.listenScroll = true;
    },
    mounted(){
      this.headerHeight = this.$refs.header.clientHeight;
      this.minTranslateY = -this.headerHeight + HEAD_HEIGHT;
      this.$refs.nav.$el.style.top = `${this.headerHeight - 0.5}px`;
    },
    methods: {
      scroll(pos){
        this.scrollY = pos.y;
      },
      clickLogin(){
        this.setLoginPage(true)
      },
      ...mapMutations({
        setLoginPage: "SET_LOGINPAGE"
      })
    },
    watch: {
      scrollY(newY){
        let translateY = Math.max(this.minTranslateY, newY);
        let zIndex = 0;
        let scale = 1;
        if (translateY <= this.minTranslateY) {
          this.$refs.back.style.backgroundColor = '#2e9fff';
          this.showTitle = true;
        } else {
          this.$refs.back.style.backgroundColor = '';
          this.showTitle = false;
        }
        this.$refs.layer.style['transform'] = `translate3d(0,${translateY}px,0)`;
        this.$refs.layer.style['webkitTransform'] = `translate3d(0,${translateY}px,0)`;

        if (newY < this.minTransalteY) {
          zIndex = 10
          this.$refs.header.style.paddingTop = 0
          this.$refs.header.style.height = `${HEAD_HEIGHT}px`
        } else {
          this.$refs.header.style.paddingTop = '70%'
          this.$refs.header.style.height = 0
        }

        const percent = Math.abs(newY / this.headerHeight);
        if (newY > 0) {
          scale = 1 + percent;
        }
        this.$refs.header.style['transform'] = `scale(${scale})`;
        this.$refs.header.style['webkitTransform'] = `scale(${scale})`;
      }
    },
    components: {
      Login,
      LoginPage,
      Scroll
    }
  }
</script>

<style lang="less" scoped>
  @import '~common/style/index';

  .my-page {
    position: fixed;
    top: 0;
    bottom: @tabHeight;
    left: 0;
    right: 0;
    z-index: 100;
    overflow: hidden;
    .my-wrapper {
      position: relative;
      height: 100%;
      overflow: hidden;
      .back {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: @headerHeight;
        z-index: 50;
        transition: all .3s;
        .icon-back {
          display: block;
          padding: 10px;
          font-size: @itemTitleFontSize;
          color: @tabBackground;
        }
        .title {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          line-height: @headerHeight;
          text-align: center;
        }
      }
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
      .bg-layer {
        position: relative;
        height: 100%;
        background-color: @tabBackground;
      }
      .nav {
        position: fixed;
        top: 0;
        bottom: @tabHeight;
        left: 0;
        right: 0;
        background-color: @tabBackground;
        /*overflow: hidden;*/
      }
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
      .user-dynamic {
        width: 100%;
        .dynamic-nav {
          display: flex;
          width: 100%;
          height: @headerHeight;
          line-height: @headerHeight;
          text-align: center;
          border-bottom: 1px solid @maskBackground;
          .nav-item {
            flex: 1;
            text-decoration: none;
            color: #000;
            &.active {
              color: @importantColor;
              border-bottom: 1px solid @filterBackground;
            }
          }
        }
      }
      .content {
        width: 100%;
      }
    }
  }
</style>
