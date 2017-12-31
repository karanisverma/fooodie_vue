import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
class ProductState {
  constructor () {
    this.name = 'Products'
    this.allProducts = {}
    this.quantity = 0
    this.APIHOST = 'https://fooodie.store'
    this.header = {'Content-Type': 'application/json'}
  }
  getAllProduct () {
    // https://fooodie.store/static/js/category.json
    return new Promise((resolve, reject) => {
      fetch(this.APIHOST + '/assets/js/products.json', {
        method: 'GET'
      }).then(res => res.json())
        .then((response) => {
          resolve(response)
        })
        .catch(error => {
          console.log(error)
        })
    })
  }
  // getAllProduct2 () {
  //   return fetch(`https://s3.amazonaws.com/aws-website-fooodiestore-s7bs1/static/js/products.json`, {
  //     method: 'GET',
  //     mode: 'cors'
  //   })
  // }
}

export default new Vuex.Store({
  state: new ProductState()
})
