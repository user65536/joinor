<template>
  <div class="wrapper">
    <div class="top-bg">
      <img src="../../../static/images/flash-bg.png" alt="">
    </div>
    <div class="bottom-wrap">
      <div class="content-ts">
        <div class="head-wrap">
          <div class="header">
            <div class="location">
              <span class="iconfont icon-dingwei"></span>
              <span class="place">{{place}}</span>
            </div>
            <div class="search">
              <span class="iconfont icon-sousuo"></span>
            </div>
          </div>
          <div class="banner-wrap">
            <flowPicture :bannerList="bannerList"></flowPicture>
          </div>
        </div>
        <div class="activity-wrap">
          <ul class="activity-list">
            <block v-for="(item, index) in activityList" :key="index">
              <li class="activity-item">
                <div class="item-wrap">
                  <div class="left-img">
                    <img :src="item.img" alt="">
                  </div>
                  <div class="right-info">
                    <div class="title-wrap">
                      <p class="title">{{item.title}}</p>
                      <p class="vice-title">{{item.viceTitle}}</p>
                    </div>
                    <div class="else-wrap">
                      <p class="location el-info">{{item.location}}</p>
                      <p class="time el-info">{{item.time}}</p>
                      <p class="host el-info">{{item.host}}</p>
                    </div>
                    <button class="join" @click="add">报名</button>
                  </div>
                </div>
              </li>
            </block>
          </ul>
        </div>
      </div>
    </div>
    <div class="nav-bar"></div>
  </div>
</template>

<script>
import flowPicture from '@/components/flowPicture.vue'
export default {
  data() {
    return {
      place: '北邮沙河',
      bannerIndex: 0,
      bannerLastIndex: 0,
      bannerLock: false,
      bannerList: [
        {
          url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553084644313&di=caac756878930f9c40432818b77a6cde&imgtype=0&src=http%3A%2F%2Fpic2.16pic.com%2F00%2F07%2F65%2F16pic_765502_b.jpg',
          to: ''
        },
        {
          url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1752460159,226752426&fm=26&gp=0.jpg',
          to: ''
        },
        {
          url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553149934565&di=567eed359dcf8551e1c009ad2e4f46d7&imgtype=0&src=http%3A%2F%2F00.minipic.eastday.com%2F20170411%2F20170411212923_f3b93bece00e4178f3bc684240278d9a_5.jpeg',
          to: ''
        },
          {
          url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553172444837&di=2487a11ef717cb5ec00c466e2da28a51&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F8b82b9014a90f6037cb445933312b31bb151edda.jpg',
          to: ''
        }
      ],
      activityList: [
        {
          id: '0',
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553165620324&di=f9d506fff3f67563309f4e40bbd20984&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fb90e7bec54e736d1707aa12f91504fc2d56269af.jpg',
          title: '青春心向党,建功新时代',
          viceTitle: '以团之名,集卡有你',
          location: '沙河小区小广场',
          time: '3-06 12:00',
          host: '女生部',
        },
        {
          id: '1',
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553165620324&di=f9d506fff3f67563309f4e40bbd20984&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fb90e7bec54e736d1707aa12f91504fc2d56269af.jpg',
          title: '青春心向党,建功新时代',
          viceTitle: '以团之名,集卡有你',
          location: '沙河小区小广场',
          time: '3-06 12:00',
          host: '女生部',
        },
        {
          id: '2',
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553165620324&di=f9d506fff3f67563309f4e40bbd20984&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fb90e7bec54e736d1707aa12f91504fc2d56269af.jpg',
          title: '青春心向党,建功新时代',
          viceTitle: '以团之名,集卡有你',
          location: '沙河小区小广场',
          time: '3-06 12:00',
          host: '女生部',
        },
      ]
    }
  },
  components: {
    flowPicture
  }
}
</script>

<style lang="stylus" scoped>
@import './home.styl'
</style>
