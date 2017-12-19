<template>
<div class="quantity-button-component">
  <div class="add-to-cart-button" v-if="mutableQuantity==0">
    <button @click="addToCart(1, 'add')">Add</button>
  </div>
  <div v-else class="quantity-button">
    <p href="" class="minus-sign" @click="addToCart(mutableQuantity-1, 'remove')">-</p>
    <p class="quantity-buy">{{mutableQuantity}}</p>
    <p href="" class="add-sign" @click="addToCart(mutableQuantity+1, 'add')">+</p>
  </div>
</div>
</template>

<script>
import './quantity-button.scss'

import QuantityButtonComponent from './quantity-button'
export default QuantityButtonComponent
</script>
