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
    <div class="web-wrapper web-view">
      <div class="testimonial">
        <input type="radio" name="image-slider" class="to-one" checked>
        <input type="radio" name="image-slider" class="to-two">
        <input type="radio" name="image-slider" class="to-three">
        <input type="radio" name="image-slider" class="to-four">
        <div class="images">
          <div class="slide-one">
            <img src="../../assets/reviewer/akanksha.jpg">
            <p>It's good to have such kind of service in our home town, delicious food, punctual delivery, thanks foodie, even my parents liked the food. Keep growing .</p>
            <p>- Akansha Shrivastava</p>
            <p>Student</p>
          </div>
          <div class="slide-two">
            <img src="../../assets/reviewer/Paromita_Patra.jpg">
            <p>Getting this kind of doorstep service in our little town is such a delight.. The food quality is as good as we get in any other restaurant in town.. The best part is their punctual delivery.. I hope you guys keep up your standards.. All the best</p>
            <p>Dr.Paromita Patra</p>
            <p>Doctor</p>
          </div>
          <div class="slide-three">
            <img src="../../assets/reviewer/rahul_pandey.jpg">
            <p>Good job guys..the food is good and the rate is great too. Wish u success ahead!!</p>
            <p>Rahul Pandey</p>
            <p>Engineer</p>
          </div>
          <div class="slide-four">
            <img src="../../assets/reviewer/akanksha_kashyap.jpg">
            <p>Amazing food again...your making me addicted towards you guys... love the cooking.... God bless you...</p>
            <p>Akanksha Kashyap</p>
            <p>Professor</p>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import './home.scss'

  import HomePage from './home'
  export default HomePage
</script>