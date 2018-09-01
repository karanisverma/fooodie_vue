<template>
  <div class="terms-conditions">
    <Toolbar v-bind="toolbarProps"/>
    <div class="web-wrapper">
      <div class="t-n-c">
        <input id="tab-one" type="checkbox" name="tabs">
        <label for="tab-one">What is the minimum order I can place?</label>
        <div class="tab-content">
          <p>We accept minimum order of &#8377; 200 or above.</p>
        </div>
      </div>

      <div class="t-n-c">
        <input id="tab-two" type="checkbox" name="tabs">
        <label for="tab-two">Is there any additional charges?</label>
        <div class="tab-content">
          <p>Packaging & Delivery is free under 9 km range from Vaishali Nagar. Delivery charge is 40 for range of 9-13km from Our location.</p>
        </div>
      </div>

      <div class="t-n-c">
        <input id="tab-three" type="checkbox" name="tabs">
        <label for="tab-three">How can I order from fooodie?</label>
        <div class="tab-content">
          <p>You can directly order from phone and whatsapp.</p>
        </div>
      </div>

      <div class="t-n-c">
        <input id="tab-four" type="checkbox" name="tabs">
        <label for="tab-four">What are the payment mode accepted?</label>
        <div class="tab-content">
          <p>We are accepting Paytm and Cash on Delivery(under 1000).</p>
        </div>
      </div>

      <div class="t-n-c">
        <input id="tab-five" type="checkbox" name="tabs">
        <label for="tab-five"> What if I want to modify my order?</label>
        <div class="tab-content">
          <p>To modify your order, you can call us within 10 minutes after placing order.</p>
        </div>
      </div>

      <div class="t-n-c">
        <input id="tab-six" type="checkbox" name="tabs">
        <label for="tab-six">What if I want to cancel my order?</label>
        <div class="tab-content">
          <p>You can cancel your order within 15 minutes after placing order.</p>
        </div>
      </div>

     <!--  <div class="t-n-c">
        <input id="tab-seven" type="checkbox" name="tabs">
        <label for="tab-seven">What if I don't have whatsapp account?</label>
        <div class="tab-content">
          <p>You can directly call us on +91 9111351935.</p>
        </div>
      </div> -->

      <div class="t-n-c">
        <input id="tab-eight" type="checkbox" name="tabs">
        <label for="tab-eight">What if I can't share my exact(GPS) location?</label>
        <div class="tab-content">
          <p>No Worries, you can share nearby landmark. We will call you once we reach there, you can pick your order from same landmark.</p>
        </div>
      </div>

      <div class="t-n-c">
        <input id="tab-nine" type="checkbox" name="tabs">
        <label for="tab-nine">What if Fooodie contact number is not reachable?</label>
        <div class="tab-content">
          <p>If Fooodie contact number is not reachable then you can reach us on +91 9993312277.</p>
        </div>
      </div>
      </div>
  </div>
</template>

<script>
import './terms-conditions.scss'
import TermsAndConditions from './terms-conditions'
export default TermsAndConditions
</script>
