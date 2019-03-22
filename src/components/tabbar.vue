<template>
  <div  class="wrapper-tab">
    <div @click="tabchange(0)" class="left-tab tab-item" :class="active === 0 ? 'active' : ''">
      <span class="iconfont icon-home"></span>
      <span class="text tab-home">首页</span>
    </div>
    <div @click="tabchange(1)" class="right-tab tab-item" :class="active === 1 ? 'active' : ''">
      <span class="iconfont icon-mine"></span>
      <span class="text tab-mine">我的</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  props: ["active"],
  methods: {
    tabchange (index) {
      this.$emit("tabchange", index)
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper-tab
  display flex
  width 100vw
  .tab-item
    box-shadow rgba(0, 0, 0, .1) 0px -2px 7px 0px
    display flex 
    flex-direction column
    justify-content center
    align-items center
    flex 1 0 10px
    height 43px
    background-color #ffffff
    .iconfont
      font-size 20px
    .text
      font-size 10px
    &.active
      .iconfont,.text
        color #D86468
  .left-tab
    position relative    
    border-radius 0px 6px 0px 0px
    // border-right 1px solid #D8D8D8
    // &::after
    //   position absolute
    //   top 0
    //   right 0
    //   content ''
    //   display block
    //   height 43px
    //   width 10px 
    //   border-radius 0 6px 0 0 
  .right-tab
    border-radius 6px 0px 0px 0px
    // border-left 1px solid #D8D8D8
    // &::after
    //   position absolute
    //   top 0
    //   left 0
    //   content ''
    //   display block
    //   height 43px
    //   width 10px 
    //   border-radius 6px 0 0 0
</style>