<template>
  <div class="wrapper-released">

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
      
    }
  },
  methods: {
    tabchange (index) {
      console.log(index)
    }
  },
  components: {
    scanTab
  }
}
</script>

<style lang="stylus" scoped>
.wrapper-released
  .tab
    position fixed
    bottom 0
</style>