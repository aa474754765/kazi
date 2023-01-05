<template>
  <div id="map-container" v-loading="loading" element-loading-background="rgba(0,0,0,0.1)">
    <baidu-map class="map" ak="MaolzgcBamBYiOotVV2bTgl68uhkgppn" :center="center" :zoom="zoom" :scroll-wheel-zoom="true"
      @ready="handler" @click="click">
      <div class="local-search">
        <bm-local-search v-show="displaySearchPanel" class="search-result" :keyword="keyword"
          :auto-viewport="true"></bm-local-search>
        <el-input class="search-input" placeholder="搜索地点" v-model="keyword" @input="displaySearchPanel = true">
          <i class="el-input__icon" :class="'el-icon-' + (displaySearchPanel ? 'arrow-down' : 'arrow-up')" slot="suffix"
            @click="displaySearchPanel = !displaySearchPanel">
          </i>
        </el-input>
      </div>
      <bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']" anchor="BMAP_ANCHOR_TOP_LEFT"></bm-map-type>
      <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
      <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
    </baidu-map>
  </div>
</template>

<script>
import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
import BmNavigation from 'vue-baidu-map/components/controls/Navigation.vue'
import BmGeolocation from 'vue-baidu-map/components/controls/Geolocation.vue'
import BmMapType from 'vue-baidu-map/components/controls/MapType.vue'
import BmLocalSearch from 'vue-baidu-map/components/search/LocalSearch.vue'

export default {
  name: '',
  components: {
    BaiduMap,
    BmNavigation,
    BmGeolocation,
    BmMapType,
    BmLocalSearch
  },
  data() {
    return {
      center: { lng: 116.4, lat: 39.9 },
      zoom: 12,
      keyword: '',
      displaySearchPanel: true,
      loading: true
    }
  },
  mounted() {
  },
  methods: {
    handler({ BMap }) {
      const geolocation = new BMap.Geolocation()
      geolocation.getCurrentPosition((res) => {
        this.loading = false
        this.center.lng = res.point.lng
        this.center.lat = res.point.lat
      })
    },
    click({ point }) {
      this.center.lng = point.lng
      this.center.lat = point.lat
      this.zoom = 18
    }
  }
}

</script>
<style lang="scss" scoped>
@import "~@/styles/variables.scss";

#map-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.map {
  width: 100%;
  height: 100%;
}

.local-search {
  position: absolute;
  top: 48px;
  left: 16px;
  width: 300px;

  .el-icon-close {
    cursor: pointer;
  }

  .search-result {
    position: absolute;
    top: 40px;
    max-height: 400px;
    overflow-y: scroll;
  }
}
</style>
