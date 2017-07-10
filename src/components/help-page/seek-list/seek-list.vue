<template>
  <div class="seek-list">
    <div class="filter-part">
      <p  class="filter" @click="filterBtn">发布</p>
    </div>
  </div>
</template>

<script>
  import Scroll from "base/scroll/scroll"
  import VMask from "base/mask/mask"
  import {mapGetters} from "vuex"

  export default {
    data(){
      return {
        isFilter: false
      }
    },
    created(){
    },
    methods: {
      filterBtn(){
        console.log(this.username)
      },
      ...mapGetters([
        'username'
      ])
    },
    components: {
      Scroll,
      VMask
    }
  }
</script>

<style lang="less" scoped>
  @import "~common/style/index";

  .seek-list {
    position: absolute;
    top: @tabHeight/2;
    bottom: 0;
    left: 0;
    right: 0;
    .filter-part {
      position: relative;
      top: 0;
      bottom: 0;
      right: 20px;
      .filter {
        position: absolute;
        top: -50px;
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
  }
</style>
