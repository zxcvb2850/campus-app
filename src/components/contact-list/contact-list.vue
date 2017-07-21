<template>
  <div class="cont-wrapper">
    <v-header>联系人</v-header>
    <div class="back" @click="contactBack">
      <i class="icon icon-jiantouicon"></i>
    </div>
    <scroll @scroll="scroll"
            :listen-scroll="listenScroll"
            :probe-type="probeType"
            :data="contacts"
            class="listview"
            ref="listview">
      <ul>
        <li v-for="items in contacts" class="list-group" ref="listGroup">
          <h2 class="list-group-title">{{items.title}}</h2>
          <uL>
            <li @click="selectItem(item)" v-for="item in items.items" class="list-group-item">
              <span class="name">{{item.name}}</span>
            </li>
          </uL>
        </li>
      </ul>
      <div class="list-shortcut" @touchstart.stop.prevent="onShortcutTouchStart"
           @touchmove.stop.prevent="onShortcutTouchMove"
           @touchend.stop>
        <ul>
          <li v-for="(item, index) in shortcutList" :data-index="index" class="item"
              :class="{'current':currentIndex===index}">{{item}}
          </li>
        </ul>
      </div>
      <div class="list-fixed" ref="fixed" v-show="fixedTitle">
        <h1 class="fixed-title">{{fixedTitle}} </h1>
      </div>
    </scroll>
  </div>
</template>

<script>
  import VHeader from "base/header/header"
  import Scroll from "base/scroll/scroll"
  import {getData} from 'common/js/dom'

  const TITLE_HEIGHT = 20;
  const ANCHOR_HEIGHT = 18;

  export default {
    props: {
      contacts: {
        type: Array,
        default: []
      }
    },
    data(){
      return {
        scrollY: -1,
        currentIndex: 0,
        diff: -1
      }
    },
    created(){
      this.touch = {};
      this.listenScroll = true;
      this.listHeight = [];
      this.probeType = 3
    },
    methods: {
      contactBack(){
        this.$emit("contactBack")
      },
      onShortcutTouchStart(e) {
        let anchorIndex = getData(e.target, 'index');
        let firstTouch = e.touches[0];
        this.touch.y1 = firstTouch.pageY;
        this.touch.anchorIndex = anchorIndex;
        this._scrollTo(anchorIndex);
      },
      onShortcutTouchMove(e) {
        let firstTouch = e.touches[0];
        this.touch.y2 = firstTouch.pageY;
        let delta = (this.touch.y2 - this.touch.y1) / ANCHOR_HEIGHT | 0;
        let anchorIndex = parseInt(this.touch.anchorIndex) + delta;
        this._scrollTo(anchorIndex);
      },
      scroll(pos) {
        this.scrollY = pos.y;
      },
      _calculateHeight() {
        this.listHeight = [];
        const list = this.$refs.listGroup;
        let height = 0;
        this.listHeight.push(height);
        for (let i = 0; i < list.length; i++) {
          let item = list[i];
          height += item.clientHeight;
          this.listHeight.push(height)
        }
      },
      _scrollTo(index) {
        if (!index && index !== 0) {
          return;
        }
        if (index < 0) {
          index = 0;
        }
        if (index > this.listHeight.length - 2) {
          index = this.listHeight.length - 2
        }
        this.scrollY = -this.listHeight[index];
        this.$refs.listview.scrollToElement(this.$refs.listGroup[index], 0)
      }
    },
    watch: {
      scrollY(newY){
        this._calculateHeight();
        const listHeight = this.listHeight;
        //当滚动到顶部时,newY>0
        if (newY > 0) {
          this.currentIndex = 0;
          return;
        }
        //在中间部分;
        for (let i = 0; i < listHeight.length - 1; i++) {
          let height1 = listHeight[i];
          let height2 = listHeight[i + 1];
          if (-newY >= height1 && -newY < height2) {
            this.currentIndex = i;
            this.diff = height2 + newY;
            return;
          }
        }
        //当滚动到底部;且-newY>最后一个的上限
        this.currentIndex = listHeight.length - 2
      },
      diff(newVal) {
        let fixedTop = (newVal > 0 && newVal < TITLE_HEIGHT) ? newVal - TITLE_HEIGHT : 0
        if (this.fixedTop === fixedTop) {
          return
        }
        this.fixedTop = fixedTop
        this.$refs.fixed.style.transform = `translate3d(0,${fixedTop}px,0)`
      }
    },
    computed: {
      shortcutList(){
        return this.contacts.map((items) => {
          return items.title.substr(0, 1)
        })
      },
      fixedTitle() {
        if (this.scrollY > 0) {
          return '';
        }
        return this.contacts[this.currentIndex] ? this.contacts[this.currentIndex].title : '';
      }
    },
    components: {
      VHeader,
      Scroll
    }
  }
</script>

<style lang="less" scoped>
  @import "~common/style/index";

  .cont-wrapper {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10;
    background-color: #fff;
    .back {
      position: absolute;
      top: 0;
      left: 0;
      width: 40px;
      height: @headerHeight;
      line-height: @headerHeight;
      text-align: center;
      color: #fff;
    }
    .listview {
      position: absolute;
      top: @headerHeight;
      bottom: 0;
      width: 100%;
      overflow: hidden;
      .list-group {
        .list-group-title {
          height: @headerHeight/2;
          line-height: @headerHeight/2;
          padding-left: 20px;
          font-size: @mainFontSize;
          color: #000;
          background-color: #dedede;
        }
        .list-group-item {
          display: flex;
          height: 30px;
          line-height: 30px;
          align-items: center;
          .border-1px(@divisionLine);
        }
        .name {
          margin-left: 40px;
          line-height: 20px;
          color: #000;
          font-size: 12px;
        }
      }
      .list-shortcut {
        position: absolute;
        z-index: 30;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 20px;
        padding: 20px 0;
        border-radius: 10px;
        text-align: center;
        background-color: #dedede;
        .item {
          padding: 3px;
          line-height: 1;
          color: #000;
          font-size: @mainFontSize;
          &.current {
            color: #f00;
          }
        }
      }
      .list-fixed {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        .fixed-title {
          height: @headerHeight/2;
          line-height: @headerHeight/2;
          padding-left: 20px;
          font-size: @mainFontSize;
          color: #000;
          background-color: #dedede;
        }
      }
    }
  }
</style>
