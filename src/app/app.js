export default {
  name: 'app-entry',
  data () {
    return {
      showSidebar: false,
      showCartSidebar: false,
      showModal: false,
      infoMessage: "As you know we have been working 7 days a week & that's why we are taking a 'Day Off' Today. We will be back with 7 days a week routine from tomorrow :)"
    }
  },
  created () {
    this.getAllProducts()
  },
  methods: {
    getAllProducts () {
      let { Products } = this.$store.state
      let { Cart } = this.$store.state
      console.log('Products-->', Products)
      Cart.items = JSON.parse(localStorage.getItem('Cart')) || {}
      Products.getAllProduct().then(res => {
        Products.allProducts = res
        // console.log('Object.keys(Cart.items)', Object.keys(Cart.items))
        Object.keys(Cart.items).forEach(function (cartProduct) {
          Products.allProducts.forEach(function (product) {
            if (product.product_id === parseInt(cartProduct)) {
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
      import(/* webpackChunkName: 'component-sidebar' */ '../components/cart')
  },
  watch: {
    $route () {
      this.showSidebar = false
    }
  }
}
