import Toolbar from '~/components/toolbar'
export default {
  name: 'TermsAndConditions',
  components: {
    Toolbar
  },
  data () {
    return {
      toolbarProps: {
        title: {
          text: 'Terms & Conditions',
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
