export default {
  name: 'download-banner',
  data () {
    return {
      showBanner: true
    }
  },
  props: {
    bannerTitle: '',
    bannerInfo: '',
    close: true
  },
  methods: {
    create (name, value, days) {
      let expires = ''
      if (days) {
        const date = new Date()
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
        expires = '; expires=' + date.toUTCString()
      }
      document.cookie =
        name +
        '=' +
        value +
        expires +
        '; path=/; domain=' +
        `${process.env.COOKIE_DOMAIN};`
    },
    read (name) {
      const nameEQ = name + '='
      const ca = document.cookie.split(';')
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i]
        while (c.charAt(0) === ' ') c = c.substring(1, c.length)
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length)
      }
      return null
    },
    closeBanner () {
      let count = 0
      if (this.read('appBanner')) {
        count = parseInt(this.read('appBanner'))
        // console.log('count---->>>>', count)
      }
      count = count + 1
      this.create('appBanner', count)
      this.showBanner = false
    }
  },
  mounted () {
    let appBanner = parseInt(this.read('appBanner')) || 0
    // console.log('appBanner=====>>>>', appBanner)
    if (appBanner === 3) {
      this.showBanner = false
    }
  }
}
