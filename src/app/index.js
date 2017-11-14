// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/**
 * SmoothScroll-polyfill
 * https://developer.mozilla.org/en/docs/Web/CSS/scroll-behavior
 */
// require('smoothscroll-polyfill').polyfill()

import Vue from 'vue'
import App from './app.vue'
import router from '~/router'
import store from '~/store/store.js'

Vue.config.productionTip = false
Vue.performance = true

/* eslint-disable no-new */

Promise.resolve(window.fetch).then(() => {
  new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
  })
})
// new Vue(App).$mount('#app')
