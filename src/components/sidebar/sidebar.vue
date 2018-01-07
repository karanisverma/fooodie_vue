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
        <div class="user-icon"> <img v-lazy="https://s3.amazonaws.com/aws-website-fooodiestore-s7bs1/static/img/fooodie_dark_logo.png"></div>
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
          <div class="item-name">Help And Support</div>
        </div>
      </nav>
      <div class="sidebar-footer">
        <div class="social-link">
          <div class="social">
            <a href="https://api.whatsapp.com/send?phone=919111351935&text=I%20would%20like%20to%20place%20my%20order%20%20" target="_blank">
              <svg style="width:24px;height:20px" viewBox="0 0 24 24">
                <path fill="#fff" d="M16.75,13.96C17,14.09 17.16,14.16 17.21,14.26C17.27,14.37 17.25,14.87 17,15.44C16.8,16 15.76,16.54 15.3,16.56C14.84,16.58 14.83,16.92 12.34,15.83C9.85,14.74 8.35,12.08 8.23,11.91C8.11,11.74 7.27,10.53 7.31,9.3C7.36,8.08 8,7.5 8.26,7.26C8.5,7 8.77,6.97 8.94,7H9.41C9.56,7 9.77,6.94 9.96,7.45L10.65,9.32C10.71,9.45 10.75,9.6 10.66,9.76L10.39,10.17L10,10.59C9.88,10.71 9.74,10.84 9.88,11.09C10,11.35 10.5,12.18 11.2,12.87C12.11,13.75 12.91,14.04 13.15,14.17C13.39,14.31 13.54,14.29 13.69,14.13L14.5,13.19C14.69,12.94 14.85,13 15.08,13.08L16.75,13.96M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C10.03,22 8.2,21.43 6.65,20.45L2,22L3.55,17.35C2.57,15.8 2,13.97 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12C4,13.72 4.54,15.31 5.46,16.61L4.5,19.5L7.39,18.54C8.69,19.46 10.28,20 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
              </svg>
            </a>
          </div>
          <div class="social">
            <a href="https://www.facebook.com/fooodie.store/" target="_blank">
              <svg style="width:20px;height:24px" viewBox="0 0 24 24">
                <path fill="#fff" d="M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z" />
              </svg>
            </a>
          </div>
          <div class="social">
            <a href="https://www.instagram.com/fooodie.store/" target="_blank">
              <svg style="width:20px;height:20px" viewBox="0 0 24 24">
                <path fill="#fff" d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
              </svg>
            </a>
          </div>
        </div>
        <div class="footer-note">
          © Copyright 2017 All Rights Reserved by Fooodie and powered by
            <a href="http://www.googlewiki.in" target="_blank"> Googlewiki.in</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import './sidebar.scss'

import Sidebar from './sidebar'
export default Sidebar
</script>
