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
            <!-- <img :src="item.image"> -->
            <router-link
              :to="{ name: 'ProductDescription',
              params: {faq_id: 1} } ">
              <img :src="item.image">
            </router-link>
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
    <!-- <div class="all-category">
      <div class="category-info">
        <img class="category-img" src="../../assets/egg_roll.jpg">
        <p class="category-name">Egg Roll</p>
      </div>
      <div class="category-info">
        <img class="category-img" src="../../assets/egg_sandwich.jpg">
        <p class="category-name">Egg Sandwich</p>
      </div>
      <div class="category-info">
        <img class="category-img" src="../../assets/jira_rice.jpg">
        <p class="category-name">Jira Rice</p>
      </div>
      <div class="category-info">
        <img class="category-img" src="../../assets/logo.png">
        <p class="category-name">Logo</p>
      </div>
      <div class="category-info">
        <img class="category-img" src="../../assets/tawa_roti.jpg">
        <p class="category-name">Tawa Roti</p>
      </div>
    </div> -->
  </div>
</template>

<script>
  import './home.scss'

  import HomePage from './home'
  export default HomePage
</script>