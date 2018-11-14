export default {
  name: 'address-picker',
  data () {
    return {
      isAddressSelected: false,
      selectedAddress: null
    }
  },
  props: ['addresses'],
  methods: {
    handleAddressSelection (address) {
      this.selectedAddress = address
      this.isAddressSelected = true
      this.$emit('addressSelection')
    },
    handleAddressChange () {
      this.isAddressSelected = false
      this.selectedAddress = {}
      this.$emit('addressChange')
    }
  },
  mounted () {

  }
}
