<template>
  <div>
    <el-row>
      <i :class="'el-icon-' + (action === 'create' ? 'minus' : 'plus')" @click="newClicked()"></i><span
        v-if="cardCount === 0">{{ $t('page.create_your_day') }}</span>
      <i :class="'el-icon-' + (inEditMode ? 'check' : 'edit')" @click="editClicked()"></i>
    </el-row>
    <div class="card-container">
      <div v-if="action" class="edit-form">
        <card-edit :type="action" :formData="currentData" @create="createCard($event)" @update="updateCard($event)"
          @close="action = ''; reloadCards(); inEditMode = false"></card-edit>
      </div>
      <el-row :gutter="32">
        <draggable v-model="cards" chosen-class="chosen" force-fallback="true" group="people" animation="300"
          :disabled="!inEditMode" @end="onDragEnd">
          <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8" v-for="c in cards" :key="c.id">
            <card :attr="c" :inEdit="inEditMode" @edit="editCard($event)" @remove="removeCard($event)"></card>
          </el-col>
        </draggable>
      </el-row>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import Card from './Card'
import CardEdit from './CardEdit'

import { addArrayStorage, updateArrayStorage, deleteArrayStorage, getStorage, setStorage } from '@/utils/storage'
import { deepClone } from '@/utils/common'

const storageKey = 'memory'

export default {
  name: '',
  components: {
    Card,
    CardEdit,
    draggable
  },
  data() {
    return {
      action: '',
      cards: [],
      currentData: null,
      inEditMode: false
    }
  },
  mounted() {
    this.reloadCards()
  },
  computed: {
    cardCount() {
      return this.cards.length
    }
  },
  methods: {
    newClicked() {
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
    editClicked() {
      this.inEditMode = !this.inEditMode
      if (!this.inEditMode) {
        this.action = ''
      }
    },
    editCard(data) {
      this.action = 'update'
      this.currentData = deepClone(data)
    },
    createCard(data) {
      addArrayStorage(storageKey, data)
      this.reloadCards()
    },
    updateCard(data) {
      updateArrayStorage(storageKey, data.id, data)
      this.reloadCards()
    },
    removeCard(data) {
      this.$confirm(this.$t(`message.confirm_delete_days`), this.$t(`message.info`), {
        confirmButtonText: this.$t(`button.confirm`),
        cancelButtonText: this.$t(`button.cancel`),
        type: 'warning'
      }).then(() => {
        deleteArrayStorage(storageKey, data.id)
        this.reloadCards()
        this.$message({
          type: 'success',
          message: this.$t(`message.delete_success`)
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: this.$t(`message.delete_cancel`)
        })
      })
    },
    reloadCards() {
      this.cards = getStorage(storageKey) || []
    },
    onDragEnd() {
      setStorage(storageKey, this.cards)
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
    color: $blue;
    margin-left: -12px;
    margin-right: 16px;
  }
}

.card-container {
  display: flex;
  flex-wrap: wrap;

  &>div {
    flex-grow: 1;
    min-width: 240px;
  }

  .edit-form {
    box-sizing: border-box;
    padding: 32px 32px 32px 0;
    width: 240px;
    max-width: 240px;
  }
}
</style>
