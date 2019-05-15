<template>
  <div class="wrapper-released">
    <ul class="release-list">
      <li v-for="(item, index) in releaseList" :key="index" class="release-item">
        <div class="poster">
          <img :src="item.img" alt="">
        </div>
        <div class="info-wrap">
          <div class="title">{{item.title}}</div>
          <div class="time-loc">
            <div class="location">{{item.location}}</div>
            <div class="time">{{item.time}}</div>
          </div>
        </div>
        <div class="icon">
          <span class="iconfont icon-right1"></span>
        </div>
      </li>
    </ul>
    <div class="tab">
      <scan-tab @tabchange="tabchange" :active="0"></scan-tab>
    </div>
  </div>
</template>

<script>
import scanTab from '@/components/scanTab'
export default {
  data() {
    return {
      releaseList: [
        {
          img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553165620324&di=f9d506fff3f67563309f4e40bbd20984&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fb90e7bec54e736d1707aa12f91504fc2d56269af.jpg",
          title: "青春心向党，建功新时代",
          location: "沙河校区小广场",
          time: "3-08 12:00"
        },
        {
          img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553165620324&di=f9d506fff3f67563309f4e40bbd20984&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fb90e7bec54e736d1707aa12f91504fc2d56269af.jpg",
          title: "青春心向党，建功新时代",
          location: "沙河校区小广场",
          time: "3-08 12:00"
        },
        {
          img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553165620324&di=f9d506fff3f67563309f4e40bbd20984&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fb90e7bec54e736d1707aa12f91504fc2d56269af.jpg",
          title: "青春心向党，建功新时代",
          location: "沙河校区小广场",
          time: "3-08 12:00"
        }
      ]
    }
  },
  methods: {
    tabchange (index) {
      console.log(index)
      const distPage = [null, null, null]
    }
  },
  components: {
    scanTab
  }
}
</script>

<style lang="stylus" scoped>
@import './released.styl'
</style>