/* @flow */

export default {
  name: 'toolbar',
  props: {
    theme: {
      type: String,
      default: 'dark'
    },
    title: {
      type: Object,
      default: {
        text: 'Food',
        position: 'center'
      }
    },
    leftAction: {
      type: Object
    },
    rightActions: {
      type: Array
    }
  },
  data () {
    return {}
  }
}
