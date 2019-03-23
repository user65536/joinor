<template>
  <div class="wrapper-scantab">
    <div class="bg-wrap">
      <img src="../../static/images/bar.png" alt="" class="bg">
      <div class="content-wrap">
        <div @click="tabchange(0)" class="left tab-item" :class="active === 0 ? 'active' : ''">
          <div class="icon">
            <span class="iconfont icon-liebiao"></span>
          </div>
          <div class="name">已发布</div>
        </div>
        <div class="middle">
          <div @click="tabchange(1)" class="btn">
            <span class="iconfont icon-saomiao"></span>
          </div>
        </div>
        <div @click="tabchange(2)" class="right tab-item" :class="active === 2 ? 'active' : ''">
          <div class="icon">
            <span class="iconfont icon-bianji1"></span>
          </div>
          <div class="name">新建</div>
        </div>
      </div>
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
      this.$emit('tabchange', index)
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper-scantab
  .bg-wrap
    position relative
    display flex
    flex-direction column-reverse
    width 100vw
    height 55px
    img 
      position absolute
      z-index -2
      top 0
      left 0
      width 100%
      height 55px
    .content-wrap
      display flex
      height 44px
      justify-content space-between
      .left
        flex 1 0 41vw
      .middle
        flex 0 0 18vw
        .btn
          width 40px
          height 40px
          margin 0 auto
          border-radius 50%
          transform translateY(-21px)
          background-image: linear-gradient(-139deg, #FCA8AC 4%, #E76A6A 96%);
          box-shadow: 0 0 13px 0 rgba(0,0,0,0.16);
          text-align center
          .iconfont
            line-height 40px
            color #ffffff
            font-size 20px
      .right 
        flex 1 0 41vw
      .tab-item
        display flex
        flex-direction column
        justify-content flex-end
        align-items center
        .icon
          .iconfont
            font-size 20px
            color #b8b2b3
        .name
          font-size 10px
          color #b8b2b3
          padding-bottom 2px
        &.active
          .iconfont, .name
            color #D86468
</style>