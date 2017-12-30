<template>
  <div class="how-it-works-page">
    <Toolbar
      v-bind="toolbarProps"
      @toggleSidebar="$emit('toggleSidebar');"/>
    <div class="web-wrapper">
      <div class="how-it-works-1">

      </div>
      <div class="step-1">Step 1</div>
      <div class="how-it-works-2">
        <div class="image">
          <img src="../../assets/how-it-works/how-it-works-1.png">
        </div>
        <div class="content">
          <p>You visit fooodie.store or call us on 9111351935.</p>
        </div>
      </div>
      <div class="step-1 step-2">Step 2</div>
      <div class="how-it-works-3">
        <div class="content">
          <p>Select favourite dish</p>
        </div>
        <div class="image">
          <img src="../../assets/how-it-works/how-it-works-2.png">
        </div>
      </div>
      <div class="step-1 step-3">Step 3</div>
      <div class="how-it-works-2">
        <div class="image">
          <img src="../../assets/how-it-works/how-it-works-3.png">
        </div>
        <div class="content">
           <p>Add items to cart</p>
        </div>
      </div>
      <div class="step-1 step-4">Step 4</div>
      <div class="how-it-works-3">
        <div class="content">
           <p>Order online & can pay by Paytm or COD</p>
        </div>
        <div class="image">
          <img src="../../assets/how-it-works/how-it-works-4.png">
        </div>
      </div>
      <div class="step-1 step-5">Step 5</div>
      <div class="how-it-works-3">
        <div class="image">
          <img src="../../assets/how-it-works/how-it-works-5.png">
        </div>
        <div class="content">
           <p>Food preparation and deliverd in under an hour.</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import './how-it-works.scss'

import HowItWorksPage from './how-it-works'
export default HowItWorksPage
</script>
