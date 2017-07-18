<template>
  <transition name="slide">
    <div class="help-disc">
      <div><span class="icon icon-jiantouicon" @click="back"></span></div>
    </div>
  </transition>
</template>

<script>
  export default {
    methods: {
      back(){
        this.$router.back();
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "~common/style/index";

  .help-disc {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: @mainTextColor;
  }

  .slide-enter-active, .slide-leave-active {
    transition: all .3s;
  }

  .slide-enter, .slide-leave-to {
    transform: translate3D(100%, 0, 0);
  }
</style>
