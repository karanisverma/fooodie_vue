// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/**
 * SmoothScroll-polyfill
 * https://developer.mozilla.org/en/docs/Web/CSS/scroll-behavior
 */
// require('smoothscroll-polyfill').polyfill()

import Vue from 'vue'
import Vuex from 'vuex'
import App from './app.vue'
import store from '~/store'
import router from '~/router'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false
Vue.performance = true

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'https://fooodie.store/static/img/loading/fooodie_loading_big.gif',
  loading: 'https://fooodie.store/static/img/loading/fooodie_loading_big.gif',
  attempt: 1
})
Vue.use(Vuex)

var VueTouch = require('vue-touch')
Vue.use(VueTouch, { name: 'v-touch' })
/* eslint-disable no-new */

Promise.resolve(window.fetch).then(() => {
  new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
  })
})
