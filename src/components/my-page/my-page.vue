<template>
  <div class="my-page" ref="myPage">
    <div class="my-wrapper">
      <div class="header" ref="header">
        <div class="back" ref="back">
          <i class="icon icon-xue"></i>
          <h2 class="title" v-show="showTitle" ref="title">我的详情</h2>
          <router-link to="/system" class="icon icon-setup" tag="i"></router-link>
        </div>
        <div class="filter" :style="bgStyle"></div>
        <router-link to="/myInfo" class="user-info" tag="div">
          <div class="user-data">
            <div class="icon-wrapper"><img
              src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=403143490,1710226245&fm=117&gp=0.jpg"
              alt=""></div>
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
          <h1 class="username">海棠花的美</h1>
          <p class="autograph">我是来自南方的一匹狼</p>
        </router-link>
      </div>
      <div class="bg-layer" ref="layer"></div>
      <scroll :probe-type="probeType" :listen-scroll="listenScroll" @scroll="scroll" class="nav" ref="nav">
        <div>
          <ul class="nav-wrapper">
            <li class="nav-item"><i class="icon icon-order"></i><span>订单</span></li>
            <li class="nav-item"><i class="icon icon-daijinquan"></i><span>赏金卷</span></li>
            <li class="nav-item"><i class="icon icon-yinxiang"></i><span>印象</span></li>
            <li class="nav-item"><i class="icon icon-fankui"></i><span>反馈</span></li>
          </ul>
          <div class="my-nav">
            <a href="javascript:void(0)" class="nav-item" @click.stop="currentClick(0)"
               :class="{'active':currentIndex === 0}">我的动态</a>
            <a href="javascript:void(0)" class="nav-item" @click.stop="currentClick(1)"
               :class="{'active':currentIndex === 1}">课程表</a>
          </div>
          <div class="content" ref="contentWrapper">
            <div class="content-wrapper" ref="wrapper">
              <div class="item">
                <ul class="item-wrapper">
                  <li class="record-item"><img src="../../assets/1.jpg" alt=""></li>
                  <li class="record-item"><img src="../../assets/1.jpg" alt=""></li>
                </ul>
              </div>
              <div class="item">
                <h2 class="title">我的课程表</h2>
                <ul class="item-wrapper">
                  <li class="record-item"><img src="../../assets/schedule.jpg" alt=""></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </scroll>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
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
    },
    created(){
      this.probeType = 3;
      this.listenScroll = true;
      setTimeout(() => {
        let height = this.$refs.wrapper.clientHeight;
        this.$refs.contentWrapper.style.height = `${height}px`;
        this.$refs.nav.refresh();
        this._initSliderWidth();
        this.contentWrapper.refresh();
      }, 100)
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
      this.headerHeight = this.$refs.header.clientHeight;
      this.minTranslateY = -this.headerHeight + HEAD_HEIGHT;
      if (this.headerHeight > 300) {
        this.$refs.nav.$el.style.top = '300px';
      } else {
        this.$refs.nav.$el.style.top = `${this.headerHeight - 0.5}px`;
      }
    },
    methods: {
      scroll(pos){
        this.scrollY = pos.y;
      },
      clickLogin(){
        this.setLoginPage(true)
      },
      currentClick(index){
        if (this.currentIndex === index) {
          return;
        }
        this.currentIndex = index;
        this.contentWrapper.goToPage(this.currentIndex, 0);
      },
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

        if (this.headerHeight > 300) {
          if (newY < this.minTranslateY) {
            zIndex = 10
            this.$refs.header.style.paddingTop = 0
            this.$refs.header.style.height = `${HEAD_HEIGHT}px`
          } else {
            this.$refs.header.style.paddingTop = '300px'
            this.$refs.header.style.height = 0
          }
        } else {
          if (newY < this.minTranslateY) {
            zIndex = 10
            this.$refs.header.style.paddingTop = 0
            this.$refs.header.style.height = `${HEAD_HEIGHT}px`
          } else {
            this.$refs.header.style.paddingTop = '70%'
            this.$refs.header.style.height = 0
          }
        }

        const percent = Math.abs(newY / this.headerHeight);
        if (newY > 0) {
          scale = 1 + percent;
          zIndex = 10
        }
        this.$refs.header.style['transform'] = `scale(${scale})`;
        this.$refs.header.style['webkitTransform'] = `scale(${scale})`;
        this.$refs.header.style.zIndex = zIndex;
      }
    },
    components: {
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
    z-index: 0;
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
        z-index: 2;
        transition: all .3s;
        .icon {
          display: block;
          padding: 10px;
          font-size: @maxIconFontSize;
          color: @tabBackground;
          &.icon-setup {
            position: absolute;
            top: 0;
            right: 0;
          }
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
          max-height: 300px;
        }
        .user-info {
          position: absolute;
          top: 50px;
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
        background-color: @headerColor;
      }
      .nav {
        position: fixed;
        top: 0;
        bottom: @tabHeight;
        left: 0;
        right: 0;
        background-color: @headerColor;
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
          line-height: @maxIconFontSize;
          i {
            font-size: @maxFontSize;
          }
          &:nth-child(even) i {
            color: @iconColorEven;
          }
          &:nth-child(odd) i {
            color: @iconColorOdd;
          }
        }
      }
      .my-nav {
        position: absolute;
        display: flex;
        height: 40px;
        line-height: 40px;
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
        position: relative;
        overflow: hidden;
        .content-wrapper {
          position: absolute;
          .item {
            //position: absolute;
            float: left;
            height: 100%;
            .title {
              padding: 20px 0;
              text-align: center;
            }
            img {
              width: 100%;
            }
          }
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
