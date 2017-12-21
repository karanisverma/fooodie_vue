<template>
  <div class="product-description" v-if="allProductDesc">
    <Toolbar v-bind="toolbarProps"/>
    <div class="product-img">
      <!-- <img src="../../assets/img/img1.jpg"> -->
      <img :src="allProductDesc.img">

      <div class="product-info-overlay">
        <div class="product-name">
          {{allProductDesc.name}}
        </div>
        <div class="product-price">
          ₹ {{allProductDesc.cost}}/-
        </div>
      </div>
    </div>

    <div class="product-desc-ingredients">
      <input id="description" type="radio" name="tabs" checked>
      <label for="description">Description</label>
      <input id="ingredients" type="radio" name="tabs">
      <label for="ingredients">Ingredients</label>

      <div class="desc-ingre-content">
        <div id="item-description">
          <p>{{allProductDesc.detail}}</p>
        </div>
        <div id="item-ingredient">
          <p>{{allProductDesc.ingredients}}</p>
        </div>
      </div>

    </div>
    <div class="desc-add-to-cart">
      <QuantityButtonComponent :product-id="allProductDesc.product_id" :quantity="allProductDesc.quantity"
        @UpdateProductsQuantity="updateQuantity"
        ></QuantityButtonComponent>
    </div>
  </div>
</template>

<script>
import './product-description.scss'
import ProductDecription from './product-description'
export default ProductDecription
</script>
