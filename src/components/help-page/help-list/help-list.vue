<template>
  <div class="help-list">
    <div class="filter-part">
      <p class="filter" @click="filterBtn">筛选</p>
      <transition name="slide">
        <div class="filter-condition" v-show="isFilter">
          <scroll class="filter-wrapper" ref="filterWrapper">
            <div>
              <p>筛选条件</p>
            </div>
          </scroll>
        </div>
      </transition>
    </div>
    <v-mask @clickMask="hideMask" :isFilter="isFilter"></v-mask>
    <scroll class="help-wrapper" :data="helps">
      <ul>
        <li class="help-item" @click="helpDetails(help)" v-for="(help,index) in helps">
          <div class="center">
            <div class="user-icon"><img :src="help.userIcon" alt=""></div>
            <div class="demand">
              <h3 class="title" v-html="helpType(help.type)"></h3>
              <p class="address">{{help.address}}</p>
              <p class="desc">简述：<span>{{help.desc}}</span></p>
              <p class="complete icon icon-iconcompleted" v-show="help.complete"></p>
            </div>
            <div class="price"><span>{{help.price}}</span>￥</div>
          </div>
          <div class="footer">
            <div class="sex"><span class="icon"
                                   :class="help.sex === 1?'icon-boy':'icon-girl'"></span><span>{{help.username}}</span>
            </div>
            <div class="time">发布时间:<span>{{help.releaseTime}}</span></div>
          </div>
        </li>
      </ul>
    </scroll>
    <router-view></router-view>
  </div>
</template>

<script>
  import {mapGetters, mapMutations} from "vuex"
  import Scroll from "base/scroll/scroll"
  import VMask from "base/mask/mask"
  import {transformType} from "common/js/transform"

  export default {
    data(){
      return {
        isFilter: false,
        helps: [
          {
            id: 1973574,                     //唯一标示
            userIcon: require('../../../assets/icon-1.jpg'),
            type: 1,                    //单子类型1为快递
            address: "武汉职业技术学院东十A",     //地址
            desc: "无",                //简述
            complete: true,           //次单子是否已完成
            price: 3,
            sex: 2,                   //性别1为男，2为女
            username: "醉雨非烟",         //发布者的网名
            releaseTime: "7月7日"     //发布时间
          },
          {
            id: 45784535,                     //唯一标示
            userIcon: require('../../../assets/icon-2.jpg'),
            type: 2,                    //单子类型1为快递
            address: "武汉职业技术学院东十B",     //地址
            desc: "挑选一下，谢谢",                //简述
            complete: false,           //次单子是否已完成
            price: 3,
            sex: 1,                   //性别1为男，2为女
            username: "像早晨一样清白",         //发布者的网名
            releaseTime: "7月6日"     //发布时间
          },
          {
            id: 72578541,
            userIcon: require('../../../assets/icon-3.jpg'),
            type: 3,
            address: "武汉职业技术学院东六",
            desc: "不要辣，不要辣，不要辣",
            complete: false,
            price: 3,
            sex: 1,
            username: "网名",
            releaseTime: "7月5日"
          },
          {
            id: 18635484,
            userIcon: require('../../../assets/icon-4.jpg'),
            type: 4,
            address: "武汉职业技术学院东五",
            desc: "我要美美哒",
            complete: true,
            price: 3,
            sex: 1,
            username: "期待丶下一季",
            releaseTime: "7月4日"
          },
          {
            id: 15815348,
            userIcon: require('../../../assets/icon-5.jpg'),
            type: 5,
            address: "武汉职业技术学院东一",
            desc: "来组队啊",
            complete: true,
            price: 3,
            sex: 1,
            username: "淡淡の、花香",
            releaseTime: "7月3日"
          }
        ]
      }
    },
    methods: {
      _refreshFilter(){
        if (this.isFilter) {
          this.$refs.filterWrapper.refresh();
        }
      },
      filterBtn(){
        this.isFilter = true;
        this._refreshFilter();
      },
      hideMask(isShow){
        this.isFilter = !isShow;
      },
      helpType(type){
        return transformType(type);
      },
      helpDetails(item){
        this.setDetail(item);
        this.$router.push({
          path: `/helpPage/helpList/${item.id}`
        });
      },
      ...mapMutations({
        setDetail: 'SET_DETAIL'
      })
    },
    components: {
      Scroll,
      VMask
    }
  };
</script>

<style lang="less" scoped>
  @import "~common/style/index";

  .help-list {
    .filter-part {
      position: relative;
      top: 0;
      bottom: 0;
      right: 20px;
      .filter {
        position: absolute;
        top: -@tabHeight;
        bottom: 0;
        right: 0;
        font-size: @titleFontSize;
        font-weight: normal;
        color: @headerColor;
      }
      .filter-condition {
        padding: 0 20px;
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        z-index: 1000;
        background-color: @tabBackground;
        .filter-wrapper {
          height: 100%;
          overflow: hidden;
        }
      }
      .slide-enter-active, .slide-leave-active {
        transition: all .3s;
      }
      .slide-enter, .slide-leave-to {
        transform: translate3d(100%, 0, 0);
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
          flex: 0 0 60px;
          margin-right: 20px;
          width: 60px;
          height: 60px;
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
          min-width: 1px;
          .title {
            font-size: @itemTitleFontSize;
            color: @importantColor;
          }
          .address {
            font-size: @titleFontSize;
            .no-wrap;
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
            .icon-girl {
              color: #dc4883;
            }
            .icon-boy {
              color: #487ef8;
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
