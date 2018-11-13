import Toolbar from '~/components/toolbar'
import Login from '~/components/login'
import DownloadBanner from '~/components/download-banner'
import { Carousel, Slide } from 'vue-carousel'
export default {
  name: 'HomePage',
  components: {
    Toolbar,
    Carousel,
    Slide,
    Login,
    DownloadBanner
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
      },
      bannerProps: {
        bannerTitle: 'Download the Fooodie App',
        bannerInfo: 'Order food online!'
      }
    }
  },
  computed: {
    allNewItems () {
      let { Products } = this.$store.state
      return Products.allProducts
    }
  }
}
