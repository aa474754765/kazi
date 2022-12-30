<template>
  <div>
    <el-row>
      <i :class="'el-icon-' + (action === 'create' ? 'minus' : 'plus')" @click="newClicked()"></i><span v-if="cardCount === 0">快来添加你的第一个纪念日吧！</span>
      <i :class="'el-icon-' + (inEditMode ? 'check' : 'edit')" @click="editClicked()"></i>
    </el-row>
    <div class="card-container">
      <div v-if="action" class="edit-form">
        <card-edit :type="action" :formData="currentData" @create="createCard($event)" @update="updateCard($event)" @close="action = '';reloadCards()"></card-edit>
      </div>
      <el-row :gutter="32">
        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8" v-for="c in cards" :key="c.id">
          <card :attr="c" :inEdit="inEditMode" @edit="editCard($event)" @remove="removeCard($event)"></card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import Card from './Card'
import CardEdit from './CardEdit'

import { addArrayStorage, updateArrayStorage, deleteArrayStorage, getStorage } from '@/utils/storage'
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
      currentData: null,
      inEditMode: false
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
      this.action = this.action === 'create' ? '' : 'create'
      this.inEditMode = false
      this.currentData = {
        name: '',
        date: '',
        type: '',
        textColor: '#FFFFFF',
        background: '135deg, rgb(206, 253, 206), rgb(211, 207, 252)',
        calculateType: false
      }
    },
    editClicked () {
      this.inEditMode = !this.inEditMode
      if (!this.inEditMode) {
        this.action = ''
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
    removeCard (data) {
      deleteArrayStorage(storageKey, data.id)
      this.reloadCards()
    },
    reloadCards () {
      this.cards = getStorage(storageKey) || []
    }
  }
}

</script>
<style lang="scss" scoped>
@import "~@/styles/variables.scss";

i {
  cursor: pointer;
  font-size: 20px;
  vertical-align: bottom;
  margin-right: 16px;

  &:hover {
    color: $blue
  }

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