/* @flow */
// import {bus} from '~/app'
import QuantityButtonComponent from '~/components/quantity-button'
export default {
  name: 'Cart',
  props: {},
  data () {
    return {
      minimumOrder: 399,
      deliveryCharge: 49,
      showDelviery: false,
      showMinimumOrderWarning: false
    }
  },
  computed: {
    cartItems () {
      let { Products } = this.$store.state
      return Products.allProducts
    },
    totalCost () {
      let cost = 0
      let { Products } = this.$store.state
      for (var i = 0; i < Products.allProducts.length; i++) {
        cost +=
          parseInt(Products.allProducts[i].price) *
          parseInt(Products.allProducts[i].quantity)
      }
      if (cost < 199) {
        this.showMinimumOrderWarning = true
      } else {
        this.showMinimumOrderWarning = false
      }
      if (cost === 0) {
        return cost
      } else if (cost <= this.minimumOrder) {
        cost = cost + this.deliveryCharge
        this.showDelviery = true
      } else {
        this.showDelviery = false
      }
      return cost
    }
  },
  components: {
    QuantityButtonComponent
  },
  methods: {
    getLocation () {
      if (navigator.geolocation) {
        let vm = this
        navigator.geolocation.getCurrentPosition(function (position) {
          vm.setPosition(position)
        })
        // navigator.geolocation.getCurrentPosition(function (position) { this.setPosition(position) })
      } else {
        console.log('not supported by your browser')
      }
    },
    setPosition (position) {
      return (
        'http://www.google.com/maps/dir/?api=1&destination=' +
        position.coords.latitude +
        ',' +
        position.coords.longitude
      )
    },
    placeOrder () {
      const { Products } = this.$store.state
      let order = []
      let totalCost = '*Total ----> ' + this.totalCost + '*'
      order.push('*Order:*')
      Products.allProducts.forEach(function (product) {
        if (product.quantity > 0) {
          let orderRow =
            '_' +
            product.name +
            '_(' +
            product.quantity +
            ') ----> ' +
            'Rs.' +
            product.quantity * product.price
          order.push(orderRow)
        }
      })
      if (this.showDelviery) {
        order.push('_Delivery Charge_ -----> 49')
      }
      order.push(totalCost)
      // let orderString = order.join('\n')
      // let whatsappOrderUri = encodeURIComponent(orderString)
      // window.open(
      //   'https://api.whatsapp.com/send?phone=919111351935&text=' +
      //     whatsappOrderUri,
      //   '_blank' // <- This is what makes it open in a new window.
      // )
      // localStorage.removeItem('Cart')

      // check if user is login?
      // route it to the login flow
      const { User } = this.$store.state
      if (User.isLogin) {
        this.$router.push({
          name: 'CheckOut'
        })
      } else {
        this.$emit('showLogin')
        console.log('showing login emitted')
      }
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
