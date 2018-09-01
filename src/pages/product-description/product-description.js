import Toolbar from '~/components/toolbar'
import QuantityButtonComponent from '~/components/quantity-button'
export default {
  name: 'ProductDescription',
  components: {
    Toolbar,
    QuantityButtonComponent
  },
  data () {
    return {
      toolbarProps: {
        title: {
          text: 'Product Description',
          position: 'left'
        },
        leftAction: {
          icon: 'arrow_back',
          // method: () => this.$emit('toggleSidebar')
          method: () => this.$router.back()
        },
        rightActions: [
          {
            icon: 'shopping_cart',
            method: () => this.$emit('toggleCartSidebar')
          }
        ]
      }
    }
  },
  computed: {
    allProductDesc () {
      const { Products } = this.$store.state
      console.log('products-------iiii-->>>', Products)
      var urlId = window.location.pathname.split('/')[3]
      console.log('urlId==>', urlId)
      if (Products.allProducts && Products.allProducts.length > 0) {
        var result = Products.allProducts.filter(function (obj) {
          return obj.product_id === urlId
          // return parseInt(obj.product_id) === parseInt(urlId)
        })
        console.log('result===>>', result)
        return result[0]
      }
    }
  },
  created () {
    // this.allProductsDesc()
  },
  methods: {
    allProductsDesc () {
      const { Home } = this.$store.state
      Home.productDescription()
        .then(res => {
          let data = res.json()
          return Promise.resolve(data)
        })
        .then(data => {
          if (data) {
            Home.allProductDescription = data
            console.log('data==>', data)
          }
        })
    },
    updateQuantity (updatedProductInfo) {
      const { Products } = this.$store.state
      const { Cart } = this.$store.state
      for (let i = 0; i < Products.allProducts.length; i++) {
        if (
          Products.allProducts[i].product_id === updatedProductInfo.productId
        ) {
          Products.allProducts[i].quantity = updatedProductInfo.quantity
          Cart.items[updatedProductInfo.productId] = updatedProductInfo.quantity
          localStorage.setItem('Cart', JSON.stringify(Cart.items))
        }
      }
    }
  }
}
