<template>
  <div class="checkout">
			<div class="modal-wrapper" v-if="showModal">
				<div class="modal">
					<div class="overlay"></div>
					<div class="loader" v-if="isLoading">
						<div class="lds-ring" v-if="isLoading"><div></div><div></div><div></div><div></div></div>
						<h2>Placing your order</h2>
						<p>Please wait, Kyu ki sabar kaa fal spicy hota hain 😂. This may take few seconds</p>
					</div>
					<div class="order-placement-message">
						<div class="success" v-if="isOrderPlaced && !isLoading">
							<h2>Your order has been placed successfully! 👍🏼</h2>
							<p>Please make sure that you have your contact number: {{contactNumber}} reachable, 
								we will call you for order confirmation. If it's not reachable we will not be able to accept your order.</p>
							<router-link 
								:to="{name: 'Profile', query: { activeTab: 'upcomingOrder' } }">
									<button>Track Your Order</button>
							</router-link>
						</div>
						<div class="fail" v-if="!isOrderPlaced && !isLoading">
							<h2>Oh! Something went wrong 🙄</h2>
							<p>Your order is not placed due to some technical issue 🙄, we are sorry that you have to see this 😔. Please try again.</p>
							<button @click="placeOrder">Try Again</button>
						</div>
					</div>
				</div>
			</div>
		<div class="wrapper">
			<section class="address-and-payment">
				<section>
					<!-- adress -->
					<h2>{{addressTitle}}</h2>
					<p>{{addressSubTitle}}</p>
					<AddressPicker 
						:addresses="userLocations" 
						@addressSelection="handleAddressSelection" 
						@addressChange="handleAddressChange"
					/>
				</section>
				<section class="contact-wrapper">
					<!-- phone number -->
					<h2>Contact number</h2>
					<p>We will contact you on this number at the time of order confirmation and delivery</p>
					<input type="phone" class="contact-number" v-model="contactNumber"  max="10">
					
				</section>
				<section class="payment-wrapper">
					<!-- payment -->
					<h2>Payment Method</h2>
					<p>We currently support BHIM, Paytm, Google Pay and COD</p>
					<div class="payment-options">
						<input type="radio" class="payment-option" id="cod" checked="checked"> 
						<label for="cod">BHIM, Paytm, Google Pay or COD On Delivery</label>
					</div>
				</section>
					<!-- <button class="place-order"> Place Order (₹ {{totalCost}})</button> -->
			</section>
			<aside>
				<!-- cart -->
				<h2>Cart</h2>
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
        <div v-if="showDelviery & totalCost !== 0" class="cart-item-row delivery-charge">
          <p class="cart-item-name">Delivery Charge</p>
          <p class="cart-item-cost">{{deliveryCharge}}</p>
          <span class="delivery-text">Free delivery on order above ₹399</span>
        </div>
        <div v-if="!showDelviery & totalCost !== 0" class="cart-item-row delivery-charge">
          <p class="cart-item-name">Delivery Charge</p>
          <p class="cart-item-cost">0</p>
          <span class="delivery-text">Enjoy Free Delivery</span>
        </div>
				        <div class="total-cost" v-if="totalCost>0" >
          <span id="total-cost-lable">Total</span>
          <span class="total-cost-amount">{{totalCost}}</span>
        </div>
				<button class="place-order" @click="placeOrder"> Place Order By COD (₹ {{totalCost}})</button>
      </div>
			</aside>
		</div>
  </div>
</template>

<script>
import './checkout.scss'

import CheckOut from './checkout'
export default CheckOut
</script>