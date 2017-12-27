<template>
  <div class="home-page">

    <Toolbar
      v-bind="toolbarProps"
      @toggleSidebar="$emit('toggleSidebar');"/>
    <div class="home-banner">
        <h1>Why sleep hungry?</h1>
        <div class="web-view menu-search">
           <router-link
              :to="{ name: 'TermsAndConditions'}">
              <div class="menu-box">
                <p>Check Your Menu
                  <i class="material-icons">keyboard_arrow_right</i>
                </p>
              </div>
            </router-link>
        </div>
    </div>

    <!-- Offer Section -->
    <div class="web-wrapper">
      <h3>Offers</h3>
      <div class="offer-wrapper">
        <div class="offer"  v-for="item in allNewItems">
          <img :src="item.image">
        </div>
      </div>
    </div>
    <!-- <img src="../../assets/logo.png"> -->
    <div class="web-wrapper">
      <div class="featured-products">
          <h3>Featured Product</h3>
          <div class="new-products">
          	<div class="product" v-for="item in allNewItems">
              <!-- <img :src="item.image"> -->
              <router-link
                :to="{ name: 'ProductDescription',
                params: {faq_id: 1} } ">
                <img :src="item.image">
              </router-link>
          	</div>
          </div>
      </div>
    </div>
    <!-- previous products -->
    <div class="web-wrapper">
      <div class="featured-products">
        <h3>Previous Order</h3>
        <div class="new-products">
          <div class="product" v-for="item in allNewItems">
            <router-link
                :to="{ name: 'ProductDescription',
                params: {faq_id: 1} } ">
            <img :src="item.image">
          </router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- Testimonial -->

    <div class="testimonial">
      <p>testimonial will come here</p>
    </div>
  </div>
</template>

<script>
  import './home.scss'

  import HomePage from './home'
  export default HomePage
</script>