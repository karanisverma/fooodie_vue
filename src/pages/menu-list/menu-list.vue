<template>
  <div class="page-menu-list">
  	<Toolbar v-bind="toolbarProps"/>
    <h1>Hellllloooo</h1>
     <div class="reddit-list">
       <p>We are testing if compoenent works?---> {{message}}</p>
     </div>
  </div>
</template>

<script>
  import './menu-list.scss'
  import MenuList from './menu-list'
  export default MenuList
</script>
