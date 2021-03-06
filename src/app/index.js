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
import VueCarousel from 'vue-carousel'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false
Vue.performance = true

Vue.use(Vuex)
Vue.use(VueCarousel)

var VueTouch = require('vue-touch')
VueTouch.config.swipe = {
  direction: 'horizontal'
  // threshold: 150
}
Vue.use(VueTouch, { name: 'v-touch' })
/* eslint-disable no-new */

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'https://fooodie.store/assets/img/fooodie_loading_5.gif',
  loading: 'https://fooodie.store/assets/img/fooodie_loading_5.gif',
  attempt: 1
})

Promise.resolve(window.fetch).then(() => {
  new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
  })
})
