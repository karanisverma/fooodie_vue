/* @flow */
import AddressPicker from '~/components/address-picker'
export default {
  name: 'CheckOut',
  components: {
    AddressPicker
  },
  data () {
    return {
      contactNumber: '',
      addressTitle: 'Choose a delivery address',
      addressSubTitle: 'Select the location where you want this order to be delivered'
    }
  },
  computed: {
    userLocations () {
      const { User } = this.$store.state
      return User.info.address
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
      this.addressSubTitle = 'Select the location where you want this order to be delivered'
    }
  },
  mounted () {
    const { User } = this.$store.state
    this.contactNumber = User.info.phone
  }
}
