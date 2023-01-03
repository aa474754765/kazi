<template>
  <ul class="infinite-list" v-infinite-scroll="load" infinite-scroll-distance="10" style="overflow:auto">
    <li v-for="(item, index) in displayData" :key="index" class="infinite-list-item">{{ item.name }}</li>
  </ul>
</template>

<script>
import { getUsers } from '@/api/list'

export default {
  name: '',
  data() {
    return {
      listData: [],
      displayData: [],
      count: 10
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      getUsers().then(response => {
        this.listData = response
        this.displayData = this.listData.slice(0, this.count)
      })
    },
    load() {
      this.displayData = this.listData.slice(0, this.displayData.length + this.count)
    }
  }
}

</script>
<style lang="scss" scoped>
@import "~@/styles/variables.scss";

.infinite-list {
  height: 500px;
  padding: 0;
  margin: 0;
  list-style: none;
}

.infinite-list .infinite-list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background: $blue;
  margin: 10px;
  color: #fff;
}
</style>
