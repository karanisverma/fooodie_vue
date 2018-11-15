import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

class CartState {
  constructor () {
    this.name = 'Cart'
    this.items = {}
    this.deliveryAddress = {}
    this.APIHOST = 'http://35.154.40.23'
  }
  placeOrder (order, authToken) {
    return fetch(`${this.APIHOST}/api/v1/order/place/`, {
      method: 'POST',
      body: JSON.stringify(order),
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: authToken
      }
    })
  }
}

export default new Vuex.Store({
  state: new CartState()
})
