import Toolbar from '~/components/toolbar'
import DownloadBanner from '~/components/download-banner'
export default {
  name: 'HowItWorksPage',
  components: {
    Toolbar,
    DownloadBanner
  },
  data () {
    return {
      toolbarProps: {
        title: {
          text: 'How It Works',
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
  }
}
