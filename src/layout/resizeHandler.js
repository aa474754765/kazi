import store from '@/store'

const { body } = document
const WIDTH = 768 // split point be

export default {
  beforeMount() {
    window.addEventListener('resize', this.$_resizeHandler)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.$_resizeHandler)
  },
  mounted() {
    const isMobile = this.$_isMobile()
    if (isMobile) {
      store.dispatch('app/toggleDevice', 'mobile')
    }
  },
  methods: {
    $_isMobile() {
      const rect = body.getBoundingClientRect()
      return rect.width - 1 < WIDTH
    },
    $_resizeHandler() {
      const isMobile = this.$_isMobile()
      this.$store.dispatch('app/toggleDevice', isMobile ? 'mobile' : 'desktop')
    }
  }
}
