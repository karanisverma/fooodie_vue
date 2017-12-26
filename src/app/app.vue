<template>
  <div id="app">
    <div class="web-view">
      <div class="web-header">
        <img src="../assets/logo.png">
        <ul>
          <li>Menu</li>
          <li>About Us</li>
          <li>How it Works</li>
          <li>Terms and Conditions</li>
        </ul>
      </div>
    </div>
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