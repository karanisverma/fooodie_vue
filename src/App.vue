<template>
  <div id="app">
  <!-- {{ $store.state.count }} -->

  <!-- {{evenOrOdd}} -->
  <!-- {{yOrn}} -->
    <!-- <img src="./assets/logo.png"> -->
    <!-- <HomePage></HomePage> -->
    <!-- <Menu></Menu> -->
    <router-view/>
  </div>
</template>

<script>
import './app.scss'
// import { mapGetters } from 'vuex'
import HomePage from './components/home/home'
import Menu from './components/Menu'
export default {
  name: 'app',
  components: {
    HomePage,
    Menu
  }
  // ,
  // computed: mapGetters([
  //   'evenOrOdd',
  //   'yOrn'
  // ])
}
</script>