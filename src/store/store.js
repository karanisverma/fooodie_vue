import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  count: 2,
  wiki: 'pagal',
  products: {}
}

const getters = {
  evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd',
  yOrn: state => state.count % 2 === 0 ? 'y' : 'n'
}

const mutations = {
  increment (state) {
    state.count++
  },
  decrement (state) {
    state.count--
  },
  updateProducts (state, payload) {
    console.log('updateing products')
    state.products = payload
  }
}

const actions = {
  increment: ({ commit }) => commit('increment'),
  decrement: ({ commit }) => commit('decrement'),
  incrementIfOdd ({ commit, state }) {
    if ((state.count + 1) % 2 === 0) {
      commit('increment')
    }
  },
  incrementAsync ({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('increment')
        resolve()
      }, 1000)
    })
  },
  getProducts2 ({ commit }) {
    return new Promise((resolve, reject) => {
      fetch('https://fooodie.store/static/js/products.json', {mode: 'no-cors'})
        .then((response) => {
          commit('updateProducts', response)
          console.log('response.body', response)
          resolve()
        })
        .catch(error => {
          console.log(error.statusText)
        })
    })
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
