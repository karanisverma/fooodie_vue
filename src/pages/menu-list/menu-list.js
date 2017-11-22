import Toolbar from '~/components/toolbar'
export default {
  name: 'MenuList',
  data () {
    return {
      toolbarProps: {
        title: {
          text: 'Menu',
          position: 'left'
        },
        leftAction: {
          icon: 'menu',
          method: () => this.$emit('toggleSidebar')
        }
      }
    }
  },
  components: {
    Toolbar
  }
}
