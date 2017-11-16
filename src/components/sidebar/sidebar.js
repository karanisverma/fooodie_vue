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
    }
    // menuList() {
    //   this.$router.push({
    //     name: 'MenuList'
    //   })
    // }
  }
}
