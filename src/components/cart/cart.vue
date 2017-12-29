<template>
  <div class="cart-sidebar-wrapper no-select animate"  v-if="totalCost>0" :style="{transform: `translate3d(0,${this.show ? 0:91}%,0)`}">
    <!-- slider background overlay -->
    <div class="cart-sidebar-overlay"
      @click.prevent="toggleSidebar"
      :class="{visible: show}"
    />
    <!-- slider animation effect -->
    <div class="sidebar of-a d-f fd-c jc-sb"

    >
      <div class="user">
        <!-- <div class="user-icon"></div> -->
        <i class="material-icons" v-if="this.show" @click="toggleSidebar">arrow_back</i>
        <span @click="toggleSidebar">Checkout(₹{{totalCost}})</span>
      </div>
      <div class="item-wrapper">
        <div class="empty-cart" v-if="totalCost===0">
        <img class="empty-cart-img" src="../../assets/empty_cart/010-dishes.svg">
        <p>Your cart is empty</p>
        </div>
        <div class="cart-item-row" v-for="item in cartItems" v-if="item.quantity>0">
          <p class="cart-item-name">{{item.name}}</p>
          <p class="cart-item-quantity">
            <QuantityButtonComponent :product-id="item.product_id" :quantity="item.quantity"
              @UpdateProductsQuantity="updateQuantity"
            ></QuantityButtonComponent>
          </p>
          <p class="cart-item-cost">{{item.cost * item.quantity}}</p>
        </div>
        <div v-if="showDelviery" class="cart-item-row delivery-charge">
          <p class="cart-item-name">Delivery Charge</p>
          <p class="cart-item-cost">{{deliveryCharge}}</p>
          <span class="delivery-text">Free delivery on order above ₹150</span>
        </div>
        <div v-else class="cart-item-row delivery-charge">
          <p class="cart-item-name">Delivery Charge</p>
          <p class="cart-item-cost">0</p>
          <span class="delivery-text">Enjoy Free Delivery</span>
        </div>
      </div>
      <div class="footer-note">
        <div class="total-cost" v-if="totalCost>0" >
          <span id="total-cost-lable">Total</span>
          <span class="total-cost-amount">{{totalCost}}</span>
        </div>
        <button @click="placeOrder" v-if="totalCost>0">
          Order Using Whatsapp</button>
        <button @click="toggleSidebar" v-if="totalCost===0" class="">
          Go back to menu</button>
      </div>
    </div>
  </div>
</template>

<script>
import './cart.scss'

import Cart from './cart'
export default Cart
</script>







