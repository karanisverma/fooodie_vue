/* @flow */

export default {
  name: 'sidebar',
  props: {
    show: {
      required: true,
      type: Boolean
    }
  },
  data () {
    return {}
  },
  methods: {
    toggleSidebar () {
      this.$emit('update:show', !this.show)
    },
    openMenuList () {
      this.$router.push({
        name: 'MenuList',
        params: { categoryId: 0 }
      })
      this.$emit('update:show', !this.show)
    },
    openTermsConditions () {
      this.$router.push({
        name: 'TermsAndConditions'
      })
      this.$emit('update:show', !this.show)
    },
    openPrivacyPolicy () {
      this.$router.push({
        name: 'PrivacyPolicyPage'
      })
      this.$emit('update:show', !this.show)
    },
    openHowItWorks () {
      this.$router.push({
        name: 'HowItWorksPage'
      })
      this.$emit('update:show', !this.show)
    }
    // termsAndConditions() {
    //   this.$router.push({
    //     name: 'termsConditions'
    //   })
    // }
  }
}
