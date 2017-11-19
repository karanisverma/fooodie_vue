<template>
  <div class="home-page">
    <Toolbar
      v-bind="toolbarProps"
      @toggleSidebar="$emit('toggleSidebar');"/>
    <div class="home-banner">
        <h1>Why sleep hungry?</h1>
    </div>
    <!-- <img src="../../assets/logo.png"> -->
    <div class="featured-products">
        <h3>Featured Product</h3>
        <div class="new-products">
        	<div class="product" v-for="item in allNewItems">
                <img :src="item.image">
        	</div>
        </div>
    </div>
    <!-- previous products -->
    <div class="featured-products">
      <h3>Previous Order</h3>
      <div class="new-products">
        <div class="product" v-for="item in allNewItems">
          <img :src="item.image">
        </div>
      </div>
    </div>
    <!-- all category -->
    <div class="all-category">
      
    </div>
  </div>
</template>

<script>
  import './home.scss'

  import HomePage from './home'
  export default HomePage
</script>