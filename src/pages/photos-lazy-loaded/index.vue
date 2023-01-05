<template>
  <el-row>
    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="6" v-for="p in imgList" :key="p">
      <el-card :body-style="{ padding: '0px' }">
        <img src="https://picsum.photos/200/300/?blur" :real-src="p" class="image">
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import { debounce } from '@/utils/common'

export default {
  name: '',
  data() {
    return {
      imgList: [],
      imgElements: [],
      lastIndex: 0
    }
  },
  created() {
    this.imgList = require('../../api/mock/longlist').imgList
  },
  mounted() {
    this.imgElements = Array.from(document.getElementsByTagName('img'))
    window.addEventListener('scroll', this.onScroll())
    this.lazyLoaded()
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll())
  },
  methods: {
    onScroll() {
      return debounce(this.lazyLoaded, 500)
    },
    lazyLoaded() {
      let viewHeight = document.documentElement.clientHeight
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      let length = this.imgElements.length

      // eslint-disable-next-line no-trailing-spaces
      for (let i = this.lastIndex; i < length; i++) {
        if (this.imgElements[i].offsetTop < viewHeight + scrollTop) {
          if (this.imgElements[i].getAttribute('src').endsWith('blur')) {
            this.imgElements[i].src = this.imgElements[i].getAttribute('real-src')
          }
          this.lastIndex++
        }
      }
    }
  }
}

</script>
<style lang="scss" scoped>
.el-card {
  border-radius: 16px;
}
.image {
  width: 100%;
  height: 200px;
  cursor: pointer;
  vertical-align: bottom;
  transition: 0.5s ease-in-out;
}

.image:hover {
  transform: scale(1.2);
}

.el-col {
  padding: 16px;
}
</style>
