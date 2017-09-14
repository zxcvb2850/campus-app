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
    <scroll class="seek-wrapper" v-show="seekList.length>0">
      <ul>
        <li class="seek-item" @click="seekDetails(item)" v-for="(item,index) in seekList">
          <div class="center">
            <div class="user-icon"><img :src="item.userIcon" alt=""></div>
            <div class="demand">
              <h3 class="title" v-html="helpType(item.type)"></h3>
              <p class="address">{{item.address}}</p>
              <p class="desc">简述：<span>{{item.desc}}</span></p>
              <p class="complete icon icon-iconcompleted" v-show="item.complete"></p>
            </div>
            <div class="price"><span>{{item.price}}</span>￥</div>
          </div>
          <footer class="footer">
            <div class="sex"><span class="icon"
                                   :class="item.sex === 1?'icon-boy':'icon-girl'"></span><span>{{item.username}}</span>
            </div>
            <div class="time">发布时间:<span>{{item.releaseTime}}</span></div>
          </footer>
        </li>
      </ul>
    </scroll>
    <router-view></router-view>
  </div>
</template>

<script>
  import {mapMutations} from "vuex"
  import Scroll from "base/scroll/scroll"
  import VMask from "base/mask/mask"
  import {transformType} from "common/js/transform"

  export default {
    data(){
      return {
        isComplete: true,
        seekList: [
          {
            id: 1973574,                     //唯一标示
            userIcon: require('../../../assets/icon-6.jpg'),
            type: 1,                    //单子类型1为快递
            address: "武汉职业技术学院东十A",     //地址
            desc: "无",                //简述
            complete: true,           //次单子是否已完成
            price: 3,
            sex: 2,                   //性别1为男，2为女
            username: "顾你安稳",         //发布者的网名
            releaseTime: "7月7日"     //发布时间
          },
          {
            id: 45784535,                     //唯一标示
            userIcon: require('../../../assets/icon-7.jpg'),
            type: 2,                    //单子类型1为快递
            address: "武汉职业技术学院东十B",     //地址
            desc: "挑选一下，谢谢",                //简述
            complete: false,           //次单子是否已完成
            price: 3,
            sex: 1,                   //性别1为男，2为女
            username: "回忆，停留。",         //发布者的网名
            releaseTime: "7月6日"     //发布时间
          }
        ]
      }
    },
    methods: {
      release(){
        this.$router.push("seekList/release")
      },
      helpType(type){
        return transformType(type);
      },
      seekDetails(item){
        this.setDetail(item);
        this.$router.push({
          path: `/helpPage/seekList/${item.id}`
        });
      },
      ...mapMutations({
        setDetail: 'SET_DETAIL'
      })
    },
    components: {
      Scroll,
      VMask,
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
        top: -@tabHeight;
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
    .seek-wrapper {
      height: 100%;
      overflow: hidden;
      .seek-item {
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
