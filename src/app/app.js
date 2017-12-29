export default {
  name: 'app-entry',
  data () {
    return {
      showSidebar: false,
      showCartSidebar: false
    }
  },
  created () {
    this.getAllProducts()
  },
  methods: {
    getAllProducts () {
      let {Products} = this.$store.state
      let {Cart} = this.$store.state
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
    }
    // getAllProducts2 () {
    //   let {Products} = this.$store.state
    //   Products.getAllProduct2().then(res => {
    //     let data = res.json()
    //     return Promise.resolve(data)
    //   })
    //   .then(data => {
    //     if (data) {
    //       Products.allProducts = data
    //     }
    //   })
    // }
  },
  components: {
    Sidebar: () => import(/* webpackChunkName: 'component-sidebar' */ '../components/sidebar'),
    Cart: () => import(/* webpackChunkName: 'component-sidebar' */ '../components/cart')
  },
  watch: {
    '$route' () {
      this.showSidebar = false
    }
  }
}
