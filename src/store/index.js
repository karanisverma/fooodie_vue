/* @flow */

import Vue from 'vue'
import Vuex from 'vuex'

import modules from './modules'

Vue.use(Vuex)

export class AppStoreState {
  // online: boolean
  // routeBack: Object
  // constructor() {
  //   this.online = true
  //   this.routeBack = null
  //   this.showMarkerInfo = true
  // }
}

export default new Vuex.Store({
  state: new AppStoreState(),
  modules
})
