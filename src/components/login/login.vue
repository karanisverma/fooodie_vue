<template>
<div class="login">
<div class="overlay"></div>
<div class="wrapper">
  <div class="banner">
    <!-- <img>banner image will show here -->
  </div>
  <div class="form">
    <div class="logo-wrapper">
    <img src="https://fooodie.store/static/img/logo.15604cd.png" alt="" class="logo">
      <p>FOOODIE</p>
    </div>
    
    <div class="input-wrapper">
      <input placeholder="Phone number" type="phone" />
      <input placeholder="Email" type="email" />
      <input placeholder="Password" type="password" />
      <button class="cta">
        Login
      </button>
      <p>dont't have an account? <span class='switch-mode'>Singup here</span></p>
    </div>
  </div>
</div>
</div>

</div>
</template>

<script>
import './login.scss'

import LoginComponent from './login'
export default LoginComponent
</script>
