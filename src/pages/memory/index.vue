<template>
  <div>
    <el-row>
      <i class="el-icon-plus" @click="newClicked()"></i><span v-if="cardCount === 0">快来添加你的第一个纪念日吧！</span>
    </el-row>
    <div class="card-container">
      <div v-if="action" class="edit-form">
        <card-edit :type="action" :formData="currentData" @create="createCard($event)" @update="updateCard($event)" @close="action = ''"></card-edit>
      </div>
      <el-row :gutter="32">
        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8" v-for="c in cards" :key="c.id">
          <card :attr="c" @edit="editCard($event)"></card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import Card from './Card'
import CardEdit from './CardEdit'

import { addArrayStorage, updateArrayStorage, getStorage } from '@/utils/storage'
import { deepClone } from '@/utils/common'

const storageKey = 'memory'

export default {
  name: '',
  components: {
    Card,
    CardEdit
  },
  data () {
    return {
      action: '',
      cards: [],
      currentData: null
    }
  },
  mounted () {
    this.reloadCards()
  },
  computed: {
    cardCount () {
      return this.cards.length
    }
  },
  methods: {
    newClicked () {
      this.action = 'create'
      this.currentData = {
        name: '',
        date: '',
        type: '',
        textColor: '#FFFFFF',
        background: '135deg, rgb(206, 253, 206), rgb(211, 207, 252)',
        calculateType: false
      }
    },
    editCard (data) {
      this.action = 'update'
      this.currentData = deepClone(data)
    },
    createCard (data) {
      addArrayStorage(storageKey, data)
      this.reloadCards()
    },
    updateCard (data) {
      updateArrayStorage(storageKey, data.id, data)
      this.reloadCards()
    },
    reloadCards () {
      this.cards = getStorage(storageKey) || []
      this.action = ''
    }
  }
}

</script>
<style lang="scss" scoped>
i {
  cursor: pointer;
  font-size: 18px;
  vertical-align: bottom;

  &+span {
    font-size: 12px;
  }
}

.card-container {
  display: flex;

  &>div {
    flex-grow: 1;
  }

  .edit-form {
    box-sizing: border-box;
    padding: 32px 32px 32px 0;
    width: 240px;
    max-width: 240px;
  }
}
</style>
