<template>
  <div class="wrapper-enroll">
    <ul class="enroll-list">
      <li v-for="(item, index) in enrollList" :key="index" class="enroll-item">
        <div class="main-ticket">
          <div class="poster">
            <img :src="item.img" alt="">
          </div>
          <div class="content-wrap">
            <div class="title">{{item.title}}</div>
            <div class="info-wrap">
              <div class="location">{{item.location}}</div>
              <div class="time">{{item.time}}</div>
            </div>
          </div>
          <div class="mask">
            <div class="border"></div>
          </div>
        </div>
        <div @click="navigate(`detail`, item.id)" class="vice-ticket">
          <div class="check">
            <span>立即验票</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import {route} from '@/utils/page'
export default {
  data() {
    return {
      enrollList: [
        { 
          id: '0',
          img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553165620324&di=f9d506fff3f67563309f4e40bbd20984&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fb90e7bec54e736d1707aa12f91504fc2d56269af.jpg",
          title: "青春心向党，建功新时代",
          location: "沙河校区小广场",
          time: "3-08 12:00"
        },
        {
          id: '1',
          img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553165620324&di=f9d506fff3f67563309f4e40bbd20984&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fb90e7bec54e736d1707aa12f91504fc2d56269af.jpg",
          title: "青春心向党，建功新时代",
          location: "沙河校区小广场",
          time: "3-08 12:00"
        },
        {
          id: '2',
          img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553165620324&di=f9d506fff3f67563309f4e40bbd20984&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fb90e7bec54e736d1707aa12f91504fc2d56269af.jpg",
          title: "青春心向党，建功新时代",
          location: "沙河校区小广场",
          time: "3-08 12:00"
        }
      ]
    }
  },
  methods: {
    navigate(page, id) {
      route.queryTo(page, {id})
    }
  }
}
</script>

<style lang="stylus" scoped>
@import './enrolled.styl'
</style>