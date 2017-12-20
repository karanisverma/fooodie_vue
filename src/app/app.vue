<template>
  <div id="app">
    <router-view @toggleSidebar="showSidebar = !showSidebar" @toggleCartSidebar ="showCartSidebar = !showCartSidebar"></router-view>
  <!-- {{ $store.state.count }} -->

  <!-- {{evenOrOdd}} -->
  <!-- {{yOrn}} -->
    <!-- <Menu></Menu> -->
    <!-- <router-view/> -->
    <sidebar :show.sync="showSidebar"/>
    <cart :show.sync="showCartSidebar"/>
  </div>
</template>

<script>
import './app.scss'
import app from './app'
export default app
// import { mapGetters } from 'vuex'
// import HomePage from '~/pages/home'
// export default {
//   name: 'app'
//   // ,
//   // computed: mapGetters([
//   //   'evenOrOdd',
//   //   'yOrn'
//   // ])
// }
</script>