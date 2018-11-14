<template>
  <div class="address-picker">
	  <!-- this component should takes list of address and render it in desied pattern and shoule show selected address and emit the same -->
	  <div v-if="!isAddressSelected" class="address-list">
		<div v-for='(address,i) in addresses' class="address">
			<div class="flat-number">
				{{address.flat_number}}
			</div>
			<div class="landmark">
				{{address.landmark}}
			</div>
			<div class="full-address">
				{{address.google_map_formatted_address}}
			</div>
			<button class="delivery-selector" @click="handleAddressSelection(address)">Deliver Here</button>
		</div>
		<div class="address">
			<div class="flat-number">
				
				Don't have your location saved?
			</div>
			<div class="landmark">
				Add a new address.
				
			</div>
			<div class="full-address">
				Save your location with map marker to ensure your yummy food comes to your place in no time
			</div>
			<button class="delivery-selector">Add New</button>
		</div>
	  </div>
	  <div v-if="isAddressSelected" class="selected-address">
		<div class="address">
			<div class="flat-number">
				{{selectedAddress.flat_number}}
			</div>
			<div class="landmark">
				{{selectedAddress.landmark}}
			</div>
			<div class="full-address">
				{{selectedAddress.google_map_formatted_address}}
			</div>
			<button class="delivery-selector" @click="handleAddressChange(address)">Change</button>
		</div> 
	  </div>
  </div>
</template>

<script>
import './address-picker.scss'

import AddressPicker from './address-picker'
export default AddressPicker
</script>

