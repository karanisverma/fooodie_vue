<template>
  <div id="app">
  	<div class="web-header">Hello header</div>
    <router-view @toggleSidebar="showSidebar = !showSidebar"></router-view>
  <!-- {{ $store.state.count }} -->

  <!-- {{evenOrOdd}} -->
  <!-- {{yOrn}} -->
    <!-- <Menu></Menu> -->
    <!-- <router-view/> -->
    <sidebar :show.sync="showSidebar"/>
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