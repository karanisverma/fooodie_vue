import Toolbar from '~/components/toolbar'
export default {
  name: 'HomePage',
  components: {
    Toolbar
  },
  data () {
    return {
      toolbarProps: {
        title: {
          text: 'Fooodie',
          position: 'left'
        },
        leftAction: {
          icon: 'menu',
          method: () => this.$emit('toggleSidebar')
        }
      }
    }
  },
  computed: {
    allNewItems () {
      const {Home} = this.$store.state
      return Home.allNewCategory
    }
  },
  created () {
    this.getAllNewItems()
  },
  methods: {
    getAllNewItems () {
      const {Home} = this.$store.state
      Home.getFeaturedProducts().then(res => {
        let data = res.json()
        return Promise.resolve(data)
      })
      .then(data => {
        if (data) {
          Home.allNewCategory = data
          // console.log('data==>', data);
        }
      })
    }
  }
}
