/* @flow */
// import {bus} from '~/app'
export default {
  name: 'Cart',
  props: {
    show: {
      required: true,
      type: Boolean
    }
  },
  data () {
    return {}
  },
  computed: {
  },
  methods: {
    toggleSidebar () {
      this.$emit('update:show', !this.show)
    }
  }
}
