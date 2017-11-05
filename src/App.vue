<template>
  <div id="app">
  {{ $store.state.count }}

  <!-- {{evenOrOdd}} -->
  <!-- {{yOrn}} -->
    <img src="./assets/logo.png">
    <HomePage v-if="true"></HomePage>
    <!-- <Menu></Menu> -->
    <router-view/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import HomePage from './components/home/home'
import Menu from './components/Menu'
export default {
  name: 'app',
  components: {
    HomePage,
    Menu
  },
  computed: mapGetters([
    'evenOrOdd',
    'yOrn'
  ])
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
