<template>
  <div class="news-page">
    <v-header>消息</v-header>
    <div>
      <div class="nav">
        <a href="javascript:void(0)" class="nav-item" @click="currentClick(0)"
           :class="{'active':currentIndex === 0}">附近</a>
        <a href="javascript:void(0)" class="nav-item" @click="currentClick(1)"
           :class="{'active':currentIndex === 1}">消息</a>
      </div>
      <div class="content" ref="contentWrapper">
        <div class="content-wrapper" ref="wrapper">
          <div class="item">1</div>
          <div class="item">
            <scroll class="item-wrapper">
              <ul>
                <li class="record-item">
                  <div class="icon"><img src="../../assets/logo.png" alt=""></div>
                  <div class="info">
                    <h3 class="alias">xxxx</h3>
                    <p class="last-record">xxxxx</p>
                  </div>
                  <div class="num-time">
                    <p class="num">2</p>
                    <p class="time">MM:ss</p>
                  </div>
                </li>
              </ul>
            </scroll>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import VHeader from "base/header/header"
  import BScroll from "better-scroll"
  import Scroll from "base/scroll/scroll"
  import Login from "base/login/login"
  import LoginPage from "components/login-page/login-page"
  import {mapGetters, mapMutations} from "vuex"

  export default {
    data(){
      return {
        currentIndex: 0,
        isOne: true
      }
    },
    mounted(){
      this.$nextTick(() => {
        this._initSliderWidth();
        this._initSlider();
      })
      window.addEventListener('resize', () => {
        if (!this.contentWrapper) {
          return;
        }
        this._initSliderWidth();
        this.contentWrapper.refresh();
      })
    },
    methods: {
      _initSliderWidth(){
        this.children = this.$refs.wrapper.children;

        let width = 0;
        let contentWidth = this.$refs.contentWrapper.clientWidth;
        for (let i = 0; i < this.children.length; i++) {
          let child = this.children[i];
          child.style.width = contentWidth + 'px';
          width += contentWidth;
        }

        this.$refs.wrapper.style.width = width + 'px';

      },
      _initSlider(){
        this.contentWrapper = new BScroll(this.$refs.contentWrapper, {
          scrollX: true,
          scrollY: false,
          momentum: false,
          snap: true,
          snapLoop: false,
          bounce: false,
          click: true
        })

        this.contentWrapper.on('scrollEnd', () => {
          let pageIndex = this.contentWrapper.getCurrentPage().pageX;
          this.currentIndex = pageIndex;
        })
      },
      currentClick(index){
        if (this.currentIndex === index) {
          return;
        }
        this.currentIndex = index;
        this.contentWrapper.goToPage(this.currentIndex, 0);
      },
      clickLogin(){
        this.setLoginPage(true);
      },
      ...mapMutations({
        setLoginPage: "SET_LOGINPAGE"
      })
    },
    computed: {
      ...mapGetters([
        'isLogin'
      ])
    },
    components: {
      VHeader,
      Scroll,
      Login,
      LoginPage
    }
  }
</script>

<style lang="less" scoped>
  @import "~common/style/index";

  .news-page {
    .nav {
      display: flex;
      height: @tabHeight/2;
      line-height: @tabHeight/2;
      .border-1px(@divisionLine);
      .nav-item {
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
    .content {
      position: absolute;
      top: @headerHeight + @tabHeight/2;
      bottom: @headerHeight;
      left: 0;
      right: 0;
      overflow: hidden;
      .content-wrapper {
        position: relative;
        height: 100%;
        .item {
          position: relative;
          float: left;
          height: 100%;
        }
        .item-wrapper {
          position: absolute;
          top: 0;
          bottom: 10px;
          left: 0;
          right: 0;
          overflow: hidden;
        }
      }
      .record-item {
        display: flex;
        padding: 10px;
        height: 40px;
        .border-1px(@divisionLine);
        .icon {
          margin: 0 6px;
          flex: 0 0 40px;
          height: 40px;
          border-radius: 50%;
          overflow: hidden;
          img {
            width: 100%;
          }
        }
        .info {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-width: 1px;
          .alias {
            font-size: @titleFontSize;
          }
          .last-record {
            .no-wrap;
          }
        }
        .num-time {
          flex: 60px 0 0;
          .num {
            display: block;
            position: absolute;
            bottom: 50%;
            right: 10px;
            width: 20px;
            height: 20px;
            line-height: 20px;
            text-align: center;
            font-weight: bold;
            border-radius: 50%;
            background-color: @priceColor;
            color: @tabBackground;
          }
          .time {
            position: absolute;
            bottom: 6px;
            right: 10px;
          }
        }
      }
    }
  }
</style>
