import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
class ProductState {
  constructor () {
    this.name = 'Products'
    this.allProducts = {}
    this.quantity = 0
    this.APIHOST = 'https://api.fooodie.store'
    // this.APIHOST = 'http://34.154.40.23'
    this.header = { 'Content-Type': 'application/json' }
  }
  getAllProduct () {
    // https://fooodie.store/static/js/category.json
    return new Promise((resolve, reject) => {
      // fetch(this.APIHOST + '/assets/js/products.json', {
      fetch(this.APIHOST + '/api/v1/products', {
        method: 'GET'
      })
        .then(res => res.json())
        .then(response => {
          let fullProductItem = response.objects.map(product =>
            Object.assign({}, product, { quantity: 0 })
          )
          // console.log('fullProductItem====>', fullProductItem)
          resolve(fullProductItem)
        })
        .catch(error => {
          console.log(error)
        })
    })
  }
}

export default new Vuex.Store({
  state: new ProductState()
})
