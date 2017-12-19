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
        }
      }
    }
  },
  computed: {
    allProductDesc () {
      const {Products} = this.$store.state
      var urlId = window.location.pathname.split('/')[3]
      var result = Products.allProducts.filter(function (obj) {
        return parseInt(obj.product_id) === parseInt(urlId)
      })
      console.log('result--->', Products.allProducts)
      console.log('result--->', result)
      return result[0]
    }
  },
  created () {
    // this.allProductsDesc()
  },
  methods: {
    allProductsDesc () {
      const {Home} = this.$store.state
      Home.productDescription().then(res => {
        let data = res.json()
        return Promise.resolve(data)
      })
      .then(data => {
        if (data) {
          Home.allProductDescription = data
          console.log('data==>', data)
        }
      })
    }
  }
}
