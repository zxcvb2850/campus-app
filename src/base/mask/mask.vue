<template>
  <div class="mask" v-show="isFilter" @click="hideMask"></div>
</template>

<script>
  export default {
    props: {
      isFilter: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      hideMask(){
        this.$emit('clickMask', this.isFilter);
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "~common/style/mixin";

  .mask {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 999;
    background-color: @maskBackground;
  }
</style>
