export default {
  name: 'app-entry',
  data () {
    return {
      showSidebar: true
    }
  },
  components: {
    Sidebar: () => import(/* webpackChunkName: 'component-sidebar' */ '../components/sidebar')
  },
  watch: {
    '$route' () {
      this.showSidebar = false
    }
  }
}
