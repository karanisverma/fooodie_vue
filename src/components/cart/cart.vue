<template>
  <div class="cart-sidebar-wrapper no-select" :class="{'pe-n': !show}">
    <!-- slider background overlay -->
    <div class="cart-sidebar-overlay"
      @click.prevent="toggleSidebar"
      :class="{visible: show}"
    />
    <!-- slider animation effect -->
    <div class="sidebar animate of-a d-f fd-c jc-sb"
      :style="{transform: `translate3d(${this.show ? 0:120}%,0,0)`}"
    >
      <div class="user">
        <div class="user-icon"></div>
        <!-- <i class="material-icons">account_circle</i> -->
        <span>Food</span>
      </div>

      <div class="footer-note">
        © Copyright 2017 Food. All rights reserved.
      </div>
    </div>
  </div>
</template>

<script>
import './cart.scss'

import Cart from './cart'
export default Cart
</script>







