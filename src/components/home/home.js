// import HomePage from './home.vue'
// export default HomePage

// import store from './store/store'
export default {
  name: 'HomePage',
  // data () {

  // },
  // computed: {
  //   allNewItems () {

  //   }
  // },
  created () {
    this.getAllNewItems()
  },
  methods: {
    getAllNewItems () {
      const {Item} = this.$store.state
      console.log('itemmmm')
      Item.newCategory().then(res => {
        let data = res.json()
        console.log('dataaaaaaa', data)
        return Promise.resolve(data)
      })
      .then(data => {
        if (data) {
          // Item.allTripDetails = data;
          console.log('data==>', data)
        }
      })
    }
  }
}

// export default
// {
//   name: 'HomePage',
//   components: {
//     HomePage
//   },
//   method: {

//   }
// }
