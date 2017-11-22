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
          text: 'Terms and Conditions',
          position: 'left'
        },
        leftAction: {
          icon: 'arrow_back'
          // method: () => this.$router.back()
        }
      }
    }
  }
}
