<template>
  <div class="wrapper-mine">
    <div class="ava-area">
      <img mode="aspectFill" src="https://www.meansky.cn/picture/ava.jpg" alt="" class="ava-bg">
      <div class="ava-wrap">
        <div class="ava">
          <img mode="" src="https://www.meansky.cn/picture/ava.jpg" alt="" class="ava">
        </div>
        <div class="username">Trage Mo</div>
      </div>
    </div>
    <div class="bottom-wrap">
      <div class="content-wrap">
        <ul class="menu-list">
          <li @click="navigate('enrolled')" class="menu-item">
            <div  class="menu-name">我的报名</div>
            <div class="right-icon">
              <span class="iconfont icon-right1"></span>
            </div>
          </li>
          <li @click="navigate('released')" class="menu-item">
            <div class="menu-name">我是主办方</div>
            <div class="right-icon">
              <span class="iconfont icon-right1"></span>
            </div>
          </li>
          <li class="menu-item">
            <div class="menu-name">联系我们</div>
            <div class="right-icon">
              <span class="iconfont icon-right1"></span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="tab">
      <tab-bar @tabchange="tabchange" :active="index"></tab-bar>
    </div>
  </div>
</template>

<script>
import tabBar from '@/components/tabbar'

import {route} from '@/utils/page'
export default {
  data() {
    return {
      index: 1
    }
  },
  methods: {
    tabchange(e) {
      e == 0 && route.to('home', true)
    },
    navigate(page) {
      route.to(page)
    }
  },
  components: {
    tabBar
  }
}
</script>

<style lang="stylus" scoped>
@import './mine.styl';
</style>