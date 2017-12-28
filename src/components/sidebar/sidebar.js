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
        params: {categoryId: 0}
      })
      this.$emit('update:show', !this.show)
    },
    openTermsConditions () {
      this.$router.push({
        name: 'TermsAndConditions'
      })
    },
    openHowItWorks () {
      this.$router.push({
        name: 'HowItWorksPage'
      })
    }
    // termsAndConditions() {
    //   this.$router.push({
    //     name: 'termsConditions'
    //   })
    // }
  }
}
