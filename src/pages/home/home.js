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
          text: 'hello',
          position: 'left'
        },
        leftAction: {
          icon: 'arrow_back'
          // method: () => this.$router.back()
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
      Home.newCategory().then(res => {
        let data = res.json()
        return Promise.resolve(data)
      })
      .then(data => {
        if (data) {
          Home.allNewCategory = data
          // console.log('data==>', data)
        }
      })
    }
  }
}
