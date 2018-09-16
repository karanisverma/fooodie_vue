import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

class HomeState {
  constructor () {
    this.name = 'Home'
    this.allNewCategory = []
    this.allProductDescription = []
  }
  // Fetching data for new category
  // getFeaturedProducts () {
  //   return fetch('https://fooodie.store/assets/js/feature_products.json', {
  //     method: 'GET'
  //   })
  // }

  productDescription () {
    return fetch(`https://fooodie.store/assets/js/product-description.json`, {
      method: 'GET'
    })
  }
}

export default new Vuex.Store({
  state: new HomeState()
})

// const state = {
//   count: 2,
//   wiki: 'pagal',
//   products: {}
// }

// // const getters = {
// //   evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd',
// //   yOrn: state => state.count % 2 === 0 ? 'y' : 'n'
// // }

// const mutations = {
//   increment (state) {
//     state.count++
//   },
//   decrement (state) {
//     state.count--
//   },
//   updateProducts (state, payload) {
//     console.log('updateing products')
//     state.products = payload
//   }
// }

// const actions = {
//   increment: ({ commit }) => commit('increment'),
//   decrement: ({ commit }) => commit('decrement'),
//   incrementIfOdd ({ commit, state }) {
//     if ((state.count + 1) % 2 === 0) {
//       commit('increment')
//     }
//   },
//   incrementAsync ({ commit }) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         commit('increment')
//         resolve()
//       }, 1000)
//     })
//   },
//   newCategory ({ data }) {
//     return new Promise((resolve, reject) => {
//       fetch('https://fooodie.store/static/js/category.json', {mode: 'no-cors'})
//         .then((response) => {
//           commit('updateProducts', response)
//           console.log('response.body', response)
//           resolve()
//         })
//         .catch(error => {
//           console.log(error.statusText)
//         })
//     })
//   },
//   getProducts2 ({ commit }) {
//     return new Promise((resolve, reject) => {
//       fetch('https://fooodie.store/static/js/products.json', {mode: 'no-cors'})
//         .then((response) => {
//           commit('updateProducts', response)
//           console.log('response.body', response)
//           resolve()
//         })
//         .catch(error => {
//           console.log(error.statusText)
//         })
//     })
//   }
// }

// export default new Vuex.Store({
//   state,
//   getters,
//   mutations,
//   actions
// })
