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
    },
    totalCost () {
      let cost = 0
      let {Products} = this.$store.state
      for (var i = 0; i < Products.allProducts.length; i++) {
        cost += parseInt(Products.allProducts[i].cost) * parseInt(Products.allProducts[i].quantity)
      }
      return cost
    }
  },
  components: {
    QuantityButtonComponent
  },
  methods: {
    placeOrder () {
      console.log('placeOrder is clicked')
      const {Products} = this.$store.state
      Products.allProducts.forEach(function (product) {
        '{0}({1})   : {3}'.format(product.name, product.quantity, product.quantity * product.cost)
      })
    },
    // *Order*:
    // ProductName Quantity Cost
    // _Biriyani     1       100_
    //
    toggleSidebar () {
      this.$emit('update:show', !this.show)
    },
    updateQuantity (updatedProductInfo) {
      const {Products} = this.$store.state
      const {Cart} = this.$store.state
      for (let i = 0; i < Products.allProducts.length; i++) {
        if (Products.allProducts[i].product_id === updatedProductInfo.productId) {
          Products.allProducts[i].quantity = updatedProductInfo.quantity
          Cart.items[updatedProductInfo.productId] = updatedProductInfo.quantity
          localStorage.setItem('Cart', JSON.stringify(Cart.items))
        }
      }
    }
  }
}
