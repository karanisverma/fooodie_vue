<template>
  <div class="cart-sidebar-wrapper no-select" :class="{'pe-n': !show}">
    <!-- slider background overlay -->
    <div class="cart-sidebar-overlay"
      @click.prevent="toggleSidebar"
      :class="{visible: show}"
    />
    <!-- slider animation effect -->
    <div class="sidebar animate of-a d-f fd-c jc-sb"
      :style="{transform: `translate3d(${this.show ? 0:100}%,0,0)`}"
    >
      <div class="user">
        <!-- <div class="user-icon"></div> -->
        <i class="material-icons">shopping_cart</i>
        <span>Shopping Cart</span>
      </div>
      <div class="item-wrapper">
        <div class="cart-item-row" v-for="item in cartItems" v-if="item.quantity>0">
          <p class="cart-item-name">{{item.name}}</p>
          <p class="cart-item-quantity">
            <QuantityButtonComponent :product-id="item.product_id" :quantity="item.quantity"
              @UpdateProductsQuantity="updateQuantity"
            ></QuantityButtonComponent>
          </p>
          <p class="cart-item-cost">{{item.cost * item.quantity}}</p>
        </div>
      </div>
      <div class="footer-note">
        <button> Checkout</button>
      </div>
    </div>
  </div>
</template>

<script>
import './cart.scss'

import Cart from './cart'
export default Cart
</script>







