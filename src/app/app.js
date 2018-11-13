export default {
  name: 'app-entry',
  data () {
    return {
      showSidebar: false,
      loginModel: false,
      showCartSidebar: false,
      showModal: false,
      infoMessage: 'We will be back on Monday! (18 June 2018)'
    }
  },
  created () {
    this.getAllProducts()
  },
  computed: {
    isLogin () {
      const { User } = this.$store.state
      return User.isLogin
    }
  },
  methods: {
    getAllProducts () {
      let { Products } = this.$store.state
      let { Cart } = this.$store.state
      Cart.items = JSON.parse(localStorage.getItem('Cart')) || {}
      Products.getAllProduct().then(res => {
        Products.allProducts = res
        Object.keys(Cart.items).forEach(function (cartProduct) {
          Products.allProducts.forEach(function (product) {
            if (product.product_id === cartProduct) {
              product.quantity = Cart.items[cartProduct]
            }
          })
        })
      })
    },
    sendGetWellSoon () {
      window.open(
        'https://api.whatsapp.com/send?phone=919111351935&text=get%20will%20soon%20Tikesh',
        '_blank' // <- This is what makes it open in a new window.
      )
    }
  },
  components: {
    Sidebar: () =>
      import(/* webpackChunkName: 'component-sidebar' */ '../components/sidebar'),
    Cart: () =>
      import(/* webpackChunkName: 'component-sidebar' */ '../components/cart'),
    Login: () =>
      import(/* webpackChunkName: 'component-sidebar' */ '../components/login')
  },
  watch: {
    $route () {
      this.showSidebar = false
    }
  }
}
