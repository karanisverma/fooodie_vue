export default {
  name: 'SearchComponent',
  data () {
    return {
      query: ''
    }
  },
  created () {
    this.getUrlQuery()
  },
  methods: {
    searchMutualFunds () {
      const { Funds } = this.$store.state
      this.$router.push({ path: 'search', query: { query: this.query } })
      Funds.searchMutualFunds(this.query).then(res => {
        Funds.searchResults = res
      })
    },
    getUrlQuery () {
      const { Funds } = this.$store.state
      if (Funds.shortListedMutualFunds.length === 0) {
        if (
          this.$route.fullPath.split('=').length === 2 &&
          this.$route.fullPath.split('=')[1].length > 0
        ) {
          this.query = decodeURIComponent(this.$route.fullPath.split('=')[1])
          this.searchMutualFunds()
        }
      }
    }
  }
}
