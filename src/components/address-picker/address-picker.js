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
      this.$emit('addressSelection', address)
    },
    handleAddressChange () {
      this.isAddressSelected = false
      this.selectedAddress = {}
      this.$emit('addressChange')
    }
  },
  mounted () {
    let selectedAddress = localStorage.getItem('selectedAddress')
    if (selectedAddress) {
      this.selectedAddress = JSON.parse(selectedAddress)
      this.isAddressSelected = true
    }
  }
}
