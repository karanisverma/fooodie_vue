import Toolbar from '~/components/toolbar'
export default {
  name: 'ProductDescription',
  components: {
    Toolbar
  },
  data () {
    return {
      toolbarProps: {
        title: {
          text: 'Product Description',
          position: 'left'
        },
        leftAction: {
          icon: 'menu',
          method: () => this.$emit('toggleSidebar')
          // method: () => this.$router.back()
        }
      }
    }
  },
  computed: {
    allProductDesc () {
      const {Home} = this.$store.state
      return Home.allProductDescription
    }
  },
  created () {
    this.allProductsDesc()
  },
  methods: {
    allProductsDesc () {
      const {Home} = this.$store.state
      Home.productDescription().then(res => {
        let data = res.json()
        return Promise.resolve(data)
      })
      .then(data => {
        if (data) {
          Home.allProductDescription = data
          console.log('data==>', data)
        }
      })
    }
  }
}
