<template>
  <div class="wrapper-new">
    <div class="input-area">
      <ul class="input-list">
        <li class="input-item">
          <div class="input-name">活动标题</div>
          <input v-model="title" type="text" class="input">
        </li>
        <li class="input-item">
          <div class="input-name">活动副标题</div>
          <input v-model="subtitle" type="text" class="input">
        </li>
        <li class="input-item">
          <div class="input-name">举办方名称</div>
          <input v-model="organizer" type="text" class="input">
        </li>
        <li class="input-item">
          <div class="input-name">活动地点</div>
          <input v-model="location" type="text" class="input">
        </li>
        <li class="input-item">
          <div class="input-name">开始时间</div>
          <input v-model="start_time" type="text" class="input">
        </li>
        <li class="input-item">
          <div class="input-name">人数上限</div>
          <input v-model="totalNumber" type="number" class="input">
        </li>
      </ul>
      <ul class="text-list">
        <li class="input-item">
          <div class="input-name">活动介绍</div>
          <textarea v-model="intro" type="text" class="input"></textarea>
        </li>
      </ul>
      <div class="picture-pick">
        <div class="name">选择图片</div>
        <div class="pic">
          <div v-if="poster" class=" poster">
            <img class="img" :src="poster" alt="">
          </div>
          <div @click="chooseImage" v-else class="pick">
            +
          </div>
        </div>
      </div>
    </div>
    <div class="tab">
      <scan-tab @tabchange="tabchange" :active="2"></scan-tab>
    </div>
  </div>
</template>

<script>
import scanTab from '@/components/scanTab'
import {route} from '@/utils/page'
import service from '@/utils/service'
export default {
  data() {
    return {
      poster: '',
      title: '喜希希',
      subtitle: '是希希呀',
      organizer: '希希',
      location: '希希家',
      start_time: '5-31 13:00',
      totalNumber: 100,
      intro: '希希好好'
    }
  },
  methods: {
    updateInput(e, type) {
      console.log(this.title)
      // this[type] = e.target.value
    },
    tabchange(index) {
      if(index === 0) {
        route.to('released')
      } else if (index === 1) {
        this.submit()
      }
    },
    submit() {
      let data = {
        title: this.title,
        subtitle: this.subtitle,
        organizer: this.organizer,
        location: this.location,
        start_time: this.start_time,
        totalNumber: this.totalNumber,
        intro: this.intro
      }
      service.release(this.poster, data).then(console.log).catch(console.log)
    },
    chooseImage() {
      mpvue.chooseImage({
          count: 1,
          sizeType: ['original', 'compressed'],
          sourceType: ['album', 'camera'],
          success: (res) => {
            // tempFilePath可以作为img标签的src属性显示图片
            const filePath = res.tempFilePaths[0]
            this.poster = filePath
          }
      })
    }
  },
  components: {
    scanTab
  }
}
</script>

<style lang="stylus" scoped>
@import './new.styl'
</style>