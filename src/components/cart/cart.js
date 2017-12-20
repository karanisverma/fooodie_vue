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
      let {Cart} = this.$store.state
      return Cart.items
    }
  },
  components: {
    QuantityButtonComponent
  },
  methods: {
    toggleSidebar () {
      this.$emit('update:show', !this.show)
    }
  }
}
