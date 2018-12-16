import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

class UserState {
  constructor () {
    this.name = 'User'
    this.info = {}
    this.isLogin = false
    this.APIHOST = 'http://35.154.40.23'
  }
  loginUser (userCredentials) {
    return fetch(`${this.APIHOST}/api/v1/user/login/`, {
      method: 'POST',
      body: JSON.stringify(userCredentials),
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    })
  }
  signupUser (userCredentials) {
    return fetch(`${this.APIHOST}/api/v1/user/register/`, {
      method: 'POST',
      body: JSON.stringify(userCredentials),
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    })
  }
  getOrders (phoneNumber, key) {
    return fetch(`${this.APIHOST}/api/v1/order/list/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Authorization': `ApiKey ${phoneNumber}:${key}`
      }
    })
  }
}

export default new Vuex.Store({
  state: new UserState()
})
