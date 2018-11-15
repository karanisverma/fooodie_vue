<template>
  <div class="cart-sidebar-wrapper no-select animate">
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
          <p class="cart-item-cost">{{item.price * item.quantity}}</p>
        </div>
        <div v-if="showDelviery && totalCost !== 0" class="cart-item-row delivery-charge">
          <p class="cart-item-name">Delivery Charge</p>
          <p class="cart-item-cost">{{deliveryCharge}}</p>
          <span class="delivery-text">Free delivery on order above ₹399</span>
        </div>
        <div v-if="!showDelviery && totalCost !== 0" class="cart-item-row delivery-charge">
          <p class="cart-item-name">Delivery Charge</p>
          <p class="cart-item-cost">0</p>
          <span class="delivery-text">Enjoy Free Delivery</span>
        </div>
      </div>
      <div class="footer-note" v-if="totalCost>0">
        <div class="total-cost" v-if="totalCost>0" >
          <span id="total-cost-lable">Total</span>
          <span class="total-cost-amount">{{totalCost}}</span>
        </div>
        <button @click="placeOrder" v-if="totalCost>0 && !showMinimumOrderWarning" id="checkOut">
          Check Out</button>
        <button v-else id="disabledcheckOut">
          Minimum Order of ₹199
          <br/>
          <p style="width: 100%; font-size: 14px; margin: 0;">(Excluding delivery charge)</p>
        </button>
      </div>
    </div>
</template>

<script>
import './cart.scss'

import Cart from './cart'
export default Cart
</script>







