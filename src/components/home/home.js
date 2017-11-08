// import HomePage from './home.vue'
// export default HomePage

export default {
  name: 'HomePage',
  // data () {

  // },
  computed: {
    allNewItems () {
      const Item = this.$store.state
      return Item.allNewCategory
    }
  },
  created () {
    this.getAllNewItems()
  },
  methods: {
    getAllNewItems () {
      // const {Item} = this.$store.state
      const Item = this.$store.state
      console.log('itemmmm', Item)
      Item.newCategory().then(res => {
        let data = res.json()
        console.log('dataaaaaaa', data)
        return Promise.resolve(data)
      })
      .then(data => {
        if (data) {
          Item.allNewCategory = data
          console.log('data==>', data)
        }
      })
    }
  }
}
