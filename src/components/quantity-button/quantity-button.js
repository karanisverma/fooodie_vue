/* @flow */
// import {bus} from '~/app'
export default {
  name: 'QuantityButtonComponent',
  props: ['productId', 'quantity'],
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
    addToCart (q, type = '') {
      console.log('added to cart', q)
      this.mutableQuantity = q
      var productInfo = {
        productId: this.productId,
        quantity: this.mutableQuantity,
        type: type
      }
      this.$emit('UpdateProductsQuantity', productInfo)
    }
    // addToCart (q, type = '') {
    //   console.log('ADDDDDDD TOOOOOO CART--------------------------------------->')
    //   if (type === 'add') {
    //     bus.$emit('showAddNotification', type)
    //   } else if (type === 'remove') {
    //     bus.$emit('showAddNotification', type)
    //   }
    //   const {User} = this.$store.state
    //   // console.log('User.info-->', User.info)
    //   const { Cart } = this.$store.state
    //   if (User.info.isLogin) {
    //     Cart.list[this.productId] = q
    //     this.mutableQuantity = q
    //     if (q === 0) {
    //       delete Cart.list[this.productId]
    //       // console.log('ZERO hain!', Cart.list)
    //       this.setCookie('cartList', JSON.stringify(Cart.list))
    //       // return
    //       Cart.deleteFromCart(Cart.shoppingCart[this.productId].itemId, Cart.shoppingCart[this.productId].shopping_cart_id).then((res) => {
    //         console.log('DELETED!------> ', res)
    //       })
    //     } else {
    //       // console.log('Product id from componenet-> ', this.quantity)
    //       // console.log('cartList-->', Cart.list)
    //       // console.log('setting cookie....')
    //       this.setCookie('cartList', JSON.stringify(Cart.list))
    //       Cart.addToCart(this.productId, q).then(res => {
    //         // console.log('add to cart res--> ', res)
    //         var cartInfo = {
    //           itemId: res.item_id,
    //           shopping_cart_id: res.shopping_cart_id
    //         }
    //         Cart.shoppingCart[this.productId] = cartInfo
    //         Cart.setCookie('shoppingCart', JSON.stringify(Cart.shoppingCart))
    //       })
    //     } this.$emit('updateQuantity')
    //   } else {
    //     bus.$emit('askLogin')
    //   }
    // },
    // setCookie (cname, cvalue) {
    //   var d = new Date()
    //   d.setTime(d.getTime() + (60 * 60 * 1000))
    //   var expires = 'expires=' + d.toUTCString()
    //   document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/'
    // }
  }
}
