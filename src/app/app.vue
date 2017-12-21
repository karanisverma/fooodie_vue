<template>
  <div id="app">
  	<div class="web-header">Hello header</div>
    <router-view @toggleSidebar="showSidebar = !showSidebar" @toggleCartSidebar ="showCartSidebar = !showCartSidebar"></router-view>
    <sidebar :show.sync="showSidebar"/>
    <cart :show.sync="showCartSidebar"/>
  </div>
</template>

<script>
import './app.scss'
import app from './app'
export default app
</script>