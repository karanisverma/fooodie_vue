<template>
  <div class="home-page">
    <download-banner v-bind="bannerProps" />
    <Toolbar
      v-bind="toolbarProps"
      @toggleSidebar="$emit('toggleSidebar');"/>
    <div class="home-banner">
        <h2>Why sleep hungry?</h2>
        <h1>Delicious food all night in Bhilai!</h1>
        <div class="menu-search">
           <router-link
              :to="{ name: 'MenuList', params: { categoryId: 0 }}">
              <div class="menu-box">
                <p>Order Now
                  <i class="material-icons">keyboard_arrow_right</i>
                </p>
              </div>
            </router-link>
        </div>
    </div>

    <!-- Offer Section -->
    <!-- <div class="web-wrapper">
      <h3>Offers</h3>
      <div class="offer-wrapper">
        <div class="offer"  v-for="item in allNewItems">
              <router-link
                :to="{ name: 'ProductDescription',
                params: {productId: item.product_id} } ">
                <img :src="item.img">
              </router-link>
        </div>
      </div>
    </div> -->
    <!-- <img src="../../assets/logo.png"> -->
    <div class="web-wrapper">
      <div class="featured-products">
          <h3>Featured Product</h3>
          <div class="new-products">
          	<div class="product" v-for="item in allNewItems" v-if="item.is_featured">
              <!-- <img :src="item.image"> -->
              <router-link
                :to="{ name: 'ProductDescription',
                params: {productId: item.product_id} } ">
                <img v-lazy="'https://api.fooodie.store/'+item.image">
              </router-link>
          	</div>
          </div>
      </div>
    </div>
    <!-- Testimonial -->
    <!-- <div class="web-wrapper">
      <h3>Our Reviews</h3>
      <div class="testimonial">
        <carousel :perPage = "1" :autoplay = "true" :minSwipeDistance = "3" :autoplayTimeout = "5000" :autoplayHoverPause = "true"
        :navigationEnabled = "true">

          <slide>
            <div class="label">
              <div class="slide-two">
                <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Ftushar.sahu.399%2Fposts%2F1527883627322256%3A0&width=500" width="500" height="409" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
              </div>
            </div>
          </slide>

          <slide>
            <div class="label">
              <div class="slide-two">
                <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fhrg281196%2Fposts%2F1611919082248736%3A0&width=500" width="500" height="390" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
              </div>
            </div>
          </slide>
          <slide>
            <div class="label">
              <div class="slide-one">
                 <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FAgrawal07mudit%2Fposts%2F1588895457868122%3A0&width=500" width="250" height="373" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>
              </div>
            </div>
          </slide>
          <slide>
            <div class="label">
              <div class="slide-two">
                <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmayank.verma.77%2Fposts%2F1813211222054414%3A0&width=500" width="500" height="334" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
              </div>
            </div>
          </slide>
          <slide>
            <div class="label">
              <div class="slide-three">
                <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fvinayfns%2Fposts%2F1611081485590429%3A0&width=500" width="250" height="373" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>
              </div>
            </div>
          </slide>
          <slide>
            <div class="label">
              <div class="slide-four">
                <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fshuklasiddhartha12%2Fposts%2F1694981723908243%3A0&width=500" width="250" height="411" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>
              </div>
            </div>
          </slide>
          <slide>
            <div class="label">
              <div class="slide-five">
               <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fsaurabh.banerjee123%2Fposts%2F10212172118670693%3A0&width=500" width="250" height="373" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>
              </div>
            </div>
          </slide>

        </carousel>
      </div>
    </div> -->

    <!-- <div class="order-now-below">
      <h3>Order Now</h3>
       <router-link
          :to="{ name: 'MenuList', params: { categoryId: 0 }}">
          <div class="menu-box">
            <p>Menu
              <i class="material-icons">keyboard_arrow_right</i>
            </p>
          </div>
        </router-link>
    </div> -->
  </div>
</template>

<script>
  import './home.scss'

  import HomePage from './home'
  export default HomePage
</script>