export default {
  name: 'HomePage',
  // data () {

  // },
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
