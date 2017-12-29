<template>
  <div class="sidebar-wrapper no-select" :class="{'pe-n': !show}">
    <!-- slider background overlay -->
    <div class="sidebar-overlay"
      @click.prevent="toggleSidebar"
      :class="{visible: show}"
    />
    <!-- slider animation effect -->
    <div class="sidebar animate of-a fd-c jc-sb"
      :style="{transform: `translate3d(${this.show ? 0:-100}%,0,0)`}"
    >

      <div class="user" @click="toggleSidebar">
      <router-link
        :to="{ name: 'HomePage' } ">
        <div class="user-icon"> <img src="https://s3.amazonaws.com/aws-website-fooodiestore-s7bs1/static/img/fooodie_dark_logo.png"></div>
        <!-- <i class="material-icons">account_circle</i> -->
        <span>Fooodie</span>
        </router-link>
      </div>

      <nav class="all-list f-1">
        <!-- <div class="item d-f ai-c" @click="openMyTrips"> -->
        <div class="item" @click="openMenuList">
          <div class="icon">
            <i class="material-icons">restaurant_menu</i>
          </div>
          <div class="item-name">Menu</div>
        </div>
        <div class="item" @click="openHowItWorks">
          <div class="icon">
            <!-- <i class="material-icons">work</i> -->
            <i class="material-icons">directions_run</i>
          </div>
          <div class="item-name">How It Works</div>
        </div>
        <div class="item" @click="openTermsConditions">
          <div class="icon">
            <i class="material-icons">help</i>
          </div>
          <div class="item-name">Terms & Conditions</div>
        </div>
      </nav>

      <div class="footer-note">
        © Copyright 2017 Food. All rights reserved.
      </div>
    </div>
  </div>
</template>

<script>
import './sidebar.scss'

import Sidebar from './sidebar'
export default Sidebar
</script>
