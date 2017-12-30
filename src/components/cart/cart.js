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
      minimumOrder: 200,
      deliveryCharge: 40,
      showDelviery: false,
      showMinimumOrderWarning: false
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
      if (cost < 100) {
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
        navigator.geolocation.getCurrentPosition(function (position) { vm.setPosition(position) })
        // navigator.geolocation.getCurrentPosition(function (position) { this.setPosition(position) })
      } else {
        console.log('not supported by your browser')
      }
    },
    setPosition (position) {
      console.log('http://www.google.com/maps/dir/?api=1&destination=' + position.coords.latitude + ',' + position.coords.longitude)
      return 'http://www.google.com/maps/dir/?api=1&destination=' + position.coords.latitude + ',' + position.coords.longitude
    },
    placeOrder () {
      // let userLocation = this.getLocation()
      // console.log('placeOrder is clicked and user location -> ', userLocation)
      const {Products} = this.$store.state
      let order = []
      let totalCost = '*Total ----> ' + this.totalCost + '*'
      order.push('*Order:*')
      Products.allProducts.forEach(function (product) {
        if (product.quantity > 0) {
          let orderRow = '_' + product.name + '_(' + product.quantity + ') ----> ' + 'Rs.' + (product.quantity * product.cost)
          order.push(orderRow)
        }
      })
      if (this.showDelviery) {
        order.push('_Delivery Charge_ -----> 40')
      }
      order.push(totalCost)
      let orderString = order.join('\n')
      console.log('Order string-> ', orderString)
      let whatsappOrderUri = encodeURIComponent(orderString)
      window.open(
        'https://api.whatsapp.com/send?phone=919111351935&text=' + whatsappOrderUri,
        '_blank' // <- This is what makes it open in a new window.
        )
    },
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
