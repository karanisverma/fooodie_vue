<template>
  <div class="checkout">
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
					<input type="phone" class="contact-number" v-model="contactNumber"  max="10" @keyup="handleNumberChange">
					
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
					<button class="place-order"> Place Order </button>
			</section>
			<aside>
				<!-- cart -->
			</aside>
		</div>
  </div>
</template>

<script>
import './checkout.scss'

import CheckOut from './checkout'
export default CheckOut
</script>