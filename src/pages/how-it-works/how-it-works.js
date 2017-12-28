import Toolbar from '~/components/toolbar'
export default {
  name: 'HowItWorksPage',
  components: {
    Toolbar
  },
  data () {
    return {
      toolbarProps: {
        title: {
          text: 'How It Works',
          position: 'left'
        },
        leftAction: {
          icon: 'menu',
          method: () => this.$emit('toggleSidebar')
        }
      }
    }
  }
}
