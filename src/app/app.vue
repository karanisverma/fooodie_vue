<template>
  <div id="app">

    <transition name="modal" v-if="showModal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-body">
              <slot name="footer">
                <!-- default footer -->
                <button class="modal-default-button" @click="showModal = false">
                  Close
                </button>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </transition>


    <div class="web-view">
      <div class="web-header">
        <div class="circle">
        <router-link
          :to="{ name: 'HomePage'}">
          <img src="../assets/logo.png">
        </router-link>
        </div>
        <ul>
          <li>
            <router-link
              :to="{ name: 'MenuList', params: { categoryId: 0 }}">
                Menu
            </router-link>
          </li>
          <li>
          <router-link
            :to="{ name: 'HowItWorksPage'}">
            How it Works
          </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: 'TermsAndConditions'}">
              Help And Support
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <router-view @toggleSidebar="showSidebar = !showSidebar" @toggleCartSidebar ="showCartSidebar = !showCartSidebar"></router-view>
    <sidebar :show.sync="showSidebar"/>
    <cart :show.sync="showCartSidebar"/>

    <footer class="web-view">
      <div class="web-wrapper">
        <div class="footer-title">
          <ul>
            <li>
              <router-link
                :to="{ name: 'HomePage'}">
                Home
              </router-link>
            </li>
            <li>
              <router-link
              :to="{ name: 'HowItWorksPage'}">
                How It Works
              </router-link>
            </li>
            <li>
              <router-link
              :to="{ name: 'MenuList', params: { categoryId: 0 }}">
                Menus
              </router-link>
            </li>
            <li>
            <router-link
              :to="{ name: 'TermsAndConditions'}">
              Help and Support
            </router-link>
          </li>
          </ul>
        </div>
        <div class="copyright-social">
          <div class="copyright">© Copyright 2017 All Rights Reserved by Fooodie and powered by
            <a href="http://www.googlewiki.in" target="_blank"> Googlewiki.in</a></div>
          <div class="social-links">
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
            <!-- <div class="social">
              <a href="#" target="_blank">
                <svg style="width:20px;height:20px" viewBox="0 0 24 24">
                  <path fill="#fff" d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z" />
                </svg>
              </a>
            </div> -->
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import './app.scss'
import app from './app'
export default app
</script>