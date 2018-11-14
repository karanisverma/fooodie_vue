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
      password: null,
      isLoading: false
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
      if (this.isLoading) {
        return {}
      }
      let { User } = this.$store.state
      this.isLoading = true
      const userCredentials = {
        phone: this.phone,
        password: this.password
      }
      User.loginUser(userCredentials).then((res) => res.json()).then(res => {
        User.info = res.user
        User.isLogin = true
        this.isLoading = false
        this.$emit('loginSuccess', res)
      })
    },
    doSignUp () {
      if (this.isLoading) {
        return {}
      }
      this.isLoading = true
      let { User } = this.$store.state
      const userInfo = {
        email: this.email,
        phone: this.phone,
        password: this.password
      }
      User.signupUser(userInfo).then(res => {
        User.info = res
        this.isLoading = false
        this.userIntension = 'login'
        this.$emit('signupSuccess', userInfo)
      })
    }
  }
}
