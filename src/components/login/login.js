/* @flow */
// import {bus} from '~/app'
export default {
  name: 'LoginComponent',
  props: ['mode'],
  data () {
    return {
      // mutableQuantity: this.quantity
    }
  },
  computed: {
    mutableQuantity: {
      get: function () {
        this.quantity = parseInt(this.quantity)
        return this.quantity
      },
      set: function (q) {
        this.quantity = q
      }
    }
  },
  methods: {
    doLogin (phoneNumber, password) {
      const userCredentials = {phoneNumber, password}
      this.$emit('loginUser', userCredentials)
    },
    doSignUp (email, phoneNumber, password) {
      const userInfo = {email, phoneNumber, password}
      this.$emit('signupUser', userInfo)
    },
    addToCart (q, type = '') {
      this.mutableQuantity = q
      var productInfo = {
        productId: this.productId,
        quantity: this.mutableQuantity,
        type: type
      }
      this.$emit('UpdateProductsQuantity', productInfo)
    }
  }
}
