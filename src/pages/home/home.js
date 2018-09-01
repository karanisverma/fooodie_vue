import Toolbar from '~/components/toolbar'
import { Carousel, Slide } from 'vue-carousel'
export default {
  name: 'HomePage',
  components: {
    Toolbar,
    Carousel,
    Slide
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
      // const { Home } = this.$store.state
      // return Home.allNewCategory
      let { Products } = this.$store.state
      return Products.allProducts
    }
  },
  created () {
    // this.getAllNewItems()
  },
  methods: {
    // getAllNewItems () {
    //   const { Home } = this.$store.state
    //   Home.getFeaturedProducts()
    //     .then(res => {
    //       let data = res.json()
    //       return Promise.resolve(data)
    //     })
    //     .then(data => {
    //       if (data) {
    //         Home.allNewCategory = data
    //       }
    //     })
    // }
  }
}
