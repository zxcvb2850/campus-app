<template>
  <div class="help-list">
    <scroll class="help-wrapper">
      <ul>
        <li class="help-item">
          <div class="center">
            <div class="user-icon"><img src="https://b-ssl.duitang.com/uploads/item/201606/18/20160618183732_HfmaL.jpeg"
                                        alt=""></div>
            <div class="demand">
              <h3 class="title">取快递</h3>
              <p class="address">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
              <p class="desc">简述：<span>无</span></p>
            </div>
            <div class="price"><span>3</span>￥</div>
          </div>
          <div class="footer">
            <div class="sex"><span class="icon icon-girl"></span>网名</div>
            <div class="time">发布时间:<span>MM-dd HH:MM</span></div>
          </div>
        </li>
      </ul>
    </scroll>
  </div>
</template>

<script>
  import Scroll from "base/scroll/scroll"

  export default {
    components: {
      Scroll
    }
  }
</script>

<style lang="less" scoped>
  @import "~common/style/index";

  .help-list {
    position: absolute;
    top: @tabHeight/2;
    bottom: 0;
    left: 0;
    right: 0;
    .help-wrapper {
      height: 100%;
      overflow: hidden;
      .help-item {
        padding: 10px;
        .border-1px(@divisionLine);
        .center {
          display: flex;
          align-items: center;
          .bor-sizing;
          box-sizing: border-box
        }
        .user-icon {
          flex: 0 0 100px;
          margin-right: 20px;
          width: 100px;
          border-radius: 50%;
          overflow: hidden;
          img {
            width: 100%;
          }
        }
        .demand {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          line-height: 20px;
          overflow: hidden;
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
        }
        .price {
          flex: 20px 0 0;
          text-align: center;
          span {
            font-size: @headerHeight;
            color: #f00;
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
            .icon-boy{
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
