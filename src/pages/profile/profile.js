import Toolbar from '~/components/toolbar'
export default {
  name: 'Profile',
  components: {
    Toolbar
  },
  mounted () {
    const {
      User
    } = this.$store.state
    let userInfo = localStorage.getItem('user')
    if (userInfo) {
      User.info = JSON.parse(userInfo)
      User.isLogin = true
    }
  },
  computed: {
    addresses () {
      const { User } = this.$store.state
      return User.info.address
    }
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
