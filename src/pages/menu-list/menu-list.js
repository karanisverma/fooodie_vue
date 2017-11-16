import Toolbar from '~/components/toolbar'
export default {
  name: 'MenuList',
  data () {
    return {
      toolbarProps: {
        title: {
          text: 'hello',
          position: 'left'
        },
        leftAction: {
          icon: 'arrow_back'
          // icon: 'arrow_back'
          // method: () => this.$router.back()
        }
      }
    }
  },
  components: {
    Toolbar
  }
}
