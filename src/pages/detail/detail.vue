<template>
  <div class="wrapper-detail">
    <div class="ticket-wrap">
      <div class="slot"></div>
      <div class="ticket">
        <div class="ticket-content">
          <div class="top-wrap">
            <div class="img">
              <img :src="detail.poster" alt="">
            </div>
            <div class="title-wrap">
              <div class="title">{{detail.title}}</div>
              <div class="vice-title">{{detail.subtitle}}</div>
            </div>
          </div>
          <div class="middle-wrap">
            <div class="line line-f">
              <div class="item">
                <div class="name">活动时间</div>
                <div class="content">{{detail.start_time}}</div>
              </div>
              <div class="item">
                <div class="name">活动地点</div>
                <div class="content">{{detail.location}}</div>
              </div>
            </div>
            <div class="line line-s">
              <div class="item">
                <div class="name">报名人数</div>
                <div class="content">{{detail.currentNumber}}/{{detail.totalNumber}}</div>
              </div>
              <div class="item">
                <div class="name">举办方</div>
                <div class="content">{{detail.organizer}}</div>
              </div>
            </div>
          </div>
          <div class="bottom-wrap">
            {{detail.intro}}
          </div>
        </div>
        <div class="ticket-vice">
          <div @click="signUp" v-if="state == -3" class="join">立即报名</div>
          <div v-else class="code">
            <div class="qrcode">
              <img src="https://www.meansky.cn/picture/qr.png" alt="">
            </div>
            <div class="barcode">
              <div class="bar-img">
                <img src="https://www.meansky.cn/picture/bar.jpg" alt="">
              </div>
              <div class="number">1903181439</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import service from '../../utils/service'
export default {
  data() {
    return {
      detail: {
      },
      state: -3
    }
  },
  methods: {
    signUp() {
      const {id} = (this.$root.$mp.query)
      service.signUp(id).then(res => {
        console.log(res)
      })
    }
  },
  mounted () {
    const {id} = (this.$root.$mp.query)
    service.getActionDetail(id).then(({detail, state}) => {
      this.detail = detail;
      this.state = state
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>

<style lang="stylus" scoped>
@import './detail.styl'
</style>
