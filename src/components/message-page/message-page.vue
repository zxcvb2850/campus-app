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
      <div class="filter-part">
        <p class="contacts" @click="contact">联系人</p>
        <p class="add-user" @click="addUser">添加</p>
      </div>
      <div class="content" ref="contentWrapper">
        <div class="content-wrapper" ref="wrapper">
          <div class="item">
            <li class="record-item">
              <div class="icon"><img src="../../assets/logo.png" alt=""></div>
              <div class="info">
                <h3 class="alias">xxxx</h3>
                <p class="last-record">xxxxx</p>
              </div>
              <div class="num-time">
                <p class="num">3</p>
                <p class="time">MM:ss</p>
              </div>
            </li>
            <li class="record-item">
              <div class="icon"><img src="../../assets/logo.png" alt=""></div>
              <div class="info">
                <h3 class="alias">xxxx</h3>
                <p class="last-record">xxxxx</p>
              </div>
              <div class="num-time">
                <p class="num">0</p>
                <p class="time">MM:ss</p>
              </div>
            </li>
          </div>
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
      <contact-list :contacts="contacts" v-show="isShow"></contact-list>
    </div>
  </div>
</template>

<script>
  import VHeader from "base/header/header"
  import BScroll from "better-scroll"
  import Scroll from "base/scroll/scroll"
  import Login from "base/login/login"
  import LoginPage from "components/login-page/login-page"
  import ContactList from "components/contact-list/contact-list"
  import {mapGetters, mapMutations} from "vuex"

  const ERR_OR = 0;

  export default {
    data(){
      return {
        currentIndex: 0,
        isOne: true,
        isShow: false,
        contacts: []
      }
    },
    mounted(){
      if (!this.isLogin) {
        this.$router.push('/loginPage');
      }
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
      contact(){
        this.$http.get("/api/data").then((res) => {
          res = res.data;
          if (res.error === ERR_OR) {
            this.isShow = !this.isShow
            this.contacts = this._normalizeSinger(res.data.list);
            console.log(this.contacts)
          }
        }).catch((err) => {
          console.log(err)
        })
      },
      _normalizeSinger(list){
        let map = {};
        list.forEach((item) => {
          const key = item.Findex;
          if (!map[key]) {
            map[key] = {
              title: key,
              items: []
            }
          }
          map[key].items.push({
            name: item.Fsinger_name
          })
        })

        //为了得到有序列表，我们需要处理map
        let ret = [];
        for (let key in map) {
          let val = map[key];
          if (val.title.match(/[a-zA-Z]/)) {
            ret.push(val);
          }
        }
        ret.sort((a, b) => {
          return a.title.charCodeAt(0) - b.title.charCodeAt(0)
        })
        return ret;
      },
      addUser(){
        console.log(2)
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
      LoginPage,
      ContactList
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
    .filter-part {
      width: 100%;
      .contacts, .add-user {
        position: absolute;
        top: 0;
        height: @headerHeight;
        line-height: @headerHeight;
      }
      .contacts {
        left: 10px;
      }
      .add-user {
        right: 10px;
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
