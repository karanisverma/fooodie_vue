import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

class CartState {
  constructor () {
    this.name = 'Cart'
    this.items = {}
  }
}

export default new Vuex.Store({
  state: new CartState()
})
