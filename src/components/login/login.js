/* @flow */
// import {bus} from '~/app'
export default {
  name: 'LoginComponent',
  props: ['mode'],
  data () {
    return {
      // mutableQuantity: this.quantity
      userIntension: this.mode,
      phone: null,
      email: null,
      password: null
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
    handleModeChange () {
      this.userIntension === 'login'
        ? (this.userIntension = 'signup')
        : (this.userIntension = 'login')
    },
    doLogin () {
      let { User } = this.$store.state
      const userCredentials = {
        phone: this.phone,
        password: this.password
      }
      User.loginUser(userCredentials).then((res) => {
        this.$emit('loginSuccess', userCredentials)
      })
    },
    doSignUp () {
      let { User } = this.$store.state
      const userInfo = {
        email: this.email,
        phone: this.phone,
        password: this.password
      }
      User.signupUser(userInfo).then((res) => {
        this.$emit('signupSuccess', userInfo)
      })
    }
  }
}
