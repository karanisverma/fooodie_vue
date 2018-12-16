import Toolbar from '~/components/toolbar'
export default {
  name: 'Profile',
  components: {
    Toolbar
  },
  mounted () {
    const { User } = this.$store.state
    if (this.$route.query && this.$route.query.activeTab) {
      this.activeTab = this.$route.query.activeTab
    }
    let userInfo = localStorage.getItem('user')
    if (userInfo) {
      User.info = JSON.parse(userInfo)
      User.isLogin = true
      User.getOrders(User.info.phone, User.info.key)
      .then(res => res.json())
      .then((res) => {
        User.orders = res.orders
      })
    }
  },
  computed: {
    pendingOrders () {
      const { User } = this.$store.state
      return User.orders.filter(o => o.status === 'Pending' || o.status === 'Accepted')
    },
    previousOrders () {
      const { User } = this.$store.state
      return User.orders.filter(o => o.status !== 'Pending' && o.status !== 'Accepted')
    },
    addresses () {
      const { User } = this.$store.state
      return User.info.address
    }
  },
  data () {
    return {
      activeTab: 'savedAddress',
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
  },
  methods: {
    switchTab (selectedTab) {
      this.activeTab = selectedTab
      let query = Object.assign({}, this.$route.query, {
        activeTab: this.activeTab
      })
      this.$router.push({ query })
    }
  }
}
