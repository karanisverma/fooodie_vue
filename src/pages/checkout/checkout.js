/* @flow */
import AddressPicker from '~/components/address-picker'
import QuantityButtonComponent from '~/components/quantity-button'
export default {
  name: 'CheckOut',
  components: {
    AddressPicker,
    QuantityButtonComponent
  },
  data () {
    return {
      contactNumber: '',
      addressTitle: 'Choose a delivery address',
      addressSubTitle:
        'Select the location where you want this order to be delivered',
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
    userLocations () {
      const { User } = this.$store.state
      return User.info.address
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
  methods: {
    handleNumberChange () {
      const { User } = this.$store.state
      User.info.phone = this.contactNumber
    },
    handleAddressSelection () {
      this.addressTitle = 'Delivery Address'
      this.addressSubTitle = 'We will delivery your order to the address below'
    },
    handleAddressChange () {
      this.addressTitle = 'Choose a delivery address'
      this.addressSubTitle =
        'Select the location where you want this order to be delivered'
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
  },
  mounted () {
    const { User } = this.$store.state
    this.contactNumber = User.info.phone
  }
}
