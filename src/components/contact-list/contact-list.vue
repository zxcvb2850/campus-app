<template>
  <div class="cont-wrapper">
    <v-header>联系人</v-header>
    <scroll>
      <ul>
        <li v-for="items in contacts" class="list-group">
          <h2 class="list-group-title">{{items.title}}</h2>
          <uL>
            <li @click="selectItem(item)" v-for="item in items.items" class="list-group-item">
              <span class="name">{{item.name}}</span>
            </li>
          </uL>
        </li>
      </ul>
      <!-- <div class="list-shortcut" @touchstart.stop.prevent="onShortcutTouchStart" @touchmove.stop.prevent="onShortcutTouchMove"
            @touchend.stop>
         <ul>
           <li v-for="(item, index) in shortcutList" :data-index="index" class="item"
               :class="{'current':currentIndex===index}">{{item}}
           </li>
         </ul>
       </div>
       <div class="list-fixed" ref="fixed" v-show="fixedTitle">
         <div class="fixed-title">{{fixedTitle}} </div>
       </div>-->
    </scroll>
  </div>
</template>

<script>
  import VHeader from "base/header/header"
  import Scroll from "base/scroll/scroll"

  export default {
    props: {
      contacts: {
        type: Array,
        default: []
      }
    },
    methods: {},
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
    background-color: #000;
    .list-group {
      padding-bottom: 30px;
      .list-group-title {
        height: 30px;
        line-height: 30px;
        padding-left: 20px;
        font-size: 12px;
        color: #000;
        background: #fff;
      }
      .list-group-item {
        display: flex;
        align-items: center;
        /*padding: 20px 0 0 30px;*/
      }
      .name {
        margin-left: 40px;
        line-height: 20px;
        color: #000;
        font-size: 12px;
      }
    }
  }
</style>
