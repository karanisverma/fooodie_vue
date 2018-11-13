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
      <input  v-if="userIntension=='signup'" placeholder="Email" type="email" />
      <input placeholder="Password" type="password" />
      <button class="cta" v-if="userIntension=='login'">
        Login
      </button>
      <button class="cta" v-if="userIntension=='signup'">
        Signup
      </button>
      <p v-if="userIntension=='login'">dont't have an account? <span class='switch-mode' @click="handleModeChange">Singup here</span></p>
      <p v-if="userIntension=='login'">forgot password</span></p>
      <p v-if="userIntension=='signup'">already a user? <span class='switch-mode' @click="handleModeChange">Login here</span></p>
      
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
