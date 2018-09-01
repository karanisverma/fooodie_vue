<template>
  <div class="product-description" v-if="allProductDesc">
    <Toolbar v-bind="toolbarProps"/>
    <div class="web-wrapper">

    <div class="product-img">
      <img :src="'https://api.fooodie.store/'+allProductDesc.image">

      <div class="product-info-overlay">
        <div class="product-name">
          {{allProductDesc.name}}
        </div>
        <div class="product-price">
          ₹ {{allProductDesc.price}}/-
        </div>
        <div class="web-view">
          <div class="desc-ingre-content">
            <div id="item-description">
              <p>{{allProductDesc.detail}}</p>
            </div>
          </div>
        </div>

        <div class="desc-add-to-cart web-view" style="position: relative; right: 0;">
          <QuantityButtonComponent :product-id="allProductDesc.product_id" :status ="allProductDesc.status" :quantity="allProductDesc.quantity"
            @UpdateProductsQuantity="updateQuantity"
            ></QuantityButtonComponent>
        </div>
      </div>
    </div>

    <div class="product-desc-ingredients">
      <input id="description" type="radio" name="tabs" checked>
      <label for="description">Description</label>

      <div class="desc-ingre-content">
        <div id="item-description">
          <p>{{allProductDesc.detail}}</p>
        </div>

       <!--  <div id="item-ingredient">
          <p>{{allProductDesc.ingredients}}</p>
        </div> -->
      </div>

      <div class="desc-add-to-cart">
      <QuantityButtonComponent :product-id="allProductDesc.product_id" :status ="allProductDesc.status" :quantity="allProductDesc.quantity"
        @UpdateProductsQuantity="updateQuantity"
        ></QuantityButtonComponent>
    </div>

    </div>

  </div>
  </div>
</template>

<script>
import './product-description.scss'
import ProductDecription from './product-description'
export default ProductDecription
</script>
