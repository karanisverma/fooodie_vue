/* @flow */
// import {bus} from '~/app'
import QuantityButtonComponent from '~/components/quantity-button'
export default {
  name: 'Cart',
  props: {
    show: {
      required: true,
      type: Boolean
    }
  },
  data () {
    return {

    }
  },
  computed: {
    cartItems () {
      let {Products} = this.$store.state
      return Products.allProducts
    }
  },
  components: {
    QuantityButtonComponent
  },
  methods: {
    toggleSidebar () {
      this.$emit('update:show', !this.show)
    },
    updateQuantity (updatedProductInfo) {
      console.log('dkjasgdjkgdjksaghdjkhsa dsukadgsiadyas ', updatedProductInfo)
      const {Products} = this.$store.state
      for (let i = 0; i < Products.allProducts.length; i++) {
        if (Products.allProducts[i].product_id === updatedProductInfo.productId) {
          Products.allProducts[i].quantity = updatedProductInfo.quantity
        }
      }
    }
  }
}
