<template>
  <div class="page-menu-list">
  	<Toolbar v-bind="toolbarProps"/>
     <div class="menu-scrollbar">
      <ul>
        <li>BreakFast</li>
        <li>Lunch</li>
        <li>Snacks</li>
        <li>Dinner</li>
        <li>Dinner1</li>
        <li>Dinner2</li>
      </ul>
     </div>
  </div>
</template>

<script>
  import './menu-list.scss'
  import MenuList from './menu-list'
  export default MenuList
</script>
