<template>
  <div class="sidebar-wrapper no-select" :class="{'pe-n': !show}">
    <!-- slider background overlay -->
    <div class="sidebar-overlay"
      @click.prevent="toggleSidebar"
      :class="{visible: show}"
    />
    <!-- slider animation effect -->
    <div class="sidebar animate of-a d-f fd-c jc-sb"
      :style="{transform: `translate3d(${this.show ? 0:-102}%,0,0)`}"
    >

      <div class="user">
        <div class="user-icon"></div>
        <!-- <i class="material-icons">account_circle</i> -->
        <span>Food</span>
      </div>

      <nav class="all-list f-1">
        <!-- <div class="item d-f ai-c" @click="openMyTrips"> -->
        <div class="item" @click="openMenuList">
          <div class="icon">
            <i class="material-icons">restaurant_menu</i>
          </div>
          <div class="item-name">Menu</div>
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
