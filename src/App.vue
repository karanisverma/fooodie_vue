<template>
  <div id="app">
  {{ $store.state.count }}

  {{evenOrOdd}}
  {{yOrn}}
    <img src="./assets/logo.png">
    <Menu></Menu>
    <router-view/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Menu from './components/Menu'
export default {
  name: 'app',
  components: {
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
