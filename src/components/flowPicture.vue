<template>
  <div class="banner-wrap">
    <div class="list-wrap">
      <ul
      @click="flash"
      @transitionend="bannerTransitionEnd" 
      :style="transformPic" 
      :class="withTransition" 
      class="banner-list"
      >
        <block  v-for="(item, index) in bannerList" :key="index">
          <li class="banner-item">
            <img :src="item.url" alt="">
          </li>
        </block>
        <li class="banner-item">
          <img :src="bannerList[0].url" alt="">
        </li>
      </ul>
    </div>
    <div class="spot">
      <ul class="spot-list">
        <li v-for="(item, index) in bannerList" 
        :key="index" class="spot-item" 
        :class="bannerIndex === index || (index === 0 && bannerIndex === bannerList.length)? 'active' : ''">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bannerIndex: 0,
      bannerLock: false
    }
  },
  props: ["bannerList"],
  methods: {
    flash(direction) {
      if(this.bannerLock) {
        return false
      }
      if(!direction) { //right
        this.bannerIndex ++
      } else {//left
        this.bannerIndex --
      }  
    },
    bannerTransitionEnd() {
      this.bannerLock = false
      if(this.bannerIndex === this.bannerList.length) {
        this.bannerIndex = 0
      }
    }
  },
  computed: {
    transformPic () {
      return `transform: translateX(-${this.bannerIndex*94}vw);`
    },
    withTransition () {
      // console.log('cha',Math.abs(this.bannerLastIndex - this.bannerIndex))
      // if(Math.abs(this.bannerLastIndex - this.bannerIndex) > 1) {
      //   return ''
      // } else {
      //   this.bannerLock = true
      //   return 'banner-with-transition'
      // }
      if(this.bannerIndex === 0) {
        return ''
      } else {
        return 'banner-with-transition'

      }
    }
  },
  created() {
    setInterval(() => {
      this.flash()
    }, 2000)
  }
}
</script>

<style lang="stylus" scoped>
.banner-wrap
  .list-wrap
    // transform translateX(94vw)
    .banner-list
      display flex
      height 100%
      &.banner-with-transition
        transition transform .2s linear
      .banner-item
        flex 0 0 86vw
        background #d9daea
        margin-right 8vw
        border-radius 7px
        height 190px
        overflow hidden
        img 
          width 100%
          height 100%
  .spot 
    margin-top 5px
    .spot-list
      display flex
      justify-content center
      .spot-item
        width 4px
        height 4px
        margin 0 1px
        background-color #bfbfbf
        border-radius 2px
        transition width .2s linear
        &.active
          width 11px
</style>