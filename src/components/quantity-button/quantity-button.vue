<template>
<div class="quantity-button-component">
  <div class="add-to-cart-button out-of-stock" v-if="status=='oos'">
    <button>Out of Stock</button>
  </div>
  <div class="add-to-cart-button" v-if="mutableQuantity==0 && status!='oos'">
    <button @click="addToCart(1, 'add')">Add</button>
  </div>
  <div v-if="mutableQuantity>0 && status!='oos'" class="quantity-button">
    <p href="" class="minus-sign" @click="addToCart(mutableQuantity-1, 'remove')"><i class="material-icons">remove</i></p>
    <p class="quantity-buy">{{mutableQuantity}}</p>
    <!-- <p href="" class="add-sign" @click="addToCart(mutableQuantity+1, 'add')">+</p> -->
    <p href="" class="add-sign" @click="addToCart(mutableQuantity+1, 'add')"><i class="material-icons">add</i></p>
  </div>
</div>
</template>

<script>
import './quantity-button.scss'

import QuantityButtonComponent from './quantity-button'
export default QuantityButtonComponent
</script>
