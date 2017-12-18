<template>
  <div class="page-menu-list">
  	<Toolbar v-bind="toolbarProps"/>
     <!-- <div class="menu-scrollbar">
      <ul>
        <li>BreakFast</li>
        <li>Lunch</li>
        <li>Snacks</li>
        <li>Dinner</li>
        <li>Dinner1</li>
        <li>Dinner2</li>
      </ul>
     </div> -->
<v-touch
  @panright="slideMenu"
  @panleft="slideMenu"
  >
  <nav>
    <button @click="goTo(0)" class="active-category" id='category-1'>Snacks</button>
    <button @click="goTo(1)" id='category-2'>Rice & Biriyani</button>
    <button @click="goTo(2)" id='category-3'>Curry</button>
    <button @click="goTo(3)" id='category-4'>Rolls & Prathas</button>
    <button @click="goTo(4)" id='category-5'>Drink & Desserts</button>
  </nav>
  <div class="menu-slider-wrapper">
      <div class="menu-slider">
          <section class="menu-category">
              <div class="product" style="opacity:0">
                  <div class="crop">
                      <!-- <img src='./fooodie_menu/alloo_gobi.jpg'> -->
                  </div>
                  <h3>Product Name</h3>
                  <p>&#8377;50</p>
              </div>
              
              <div class="product">
                  <div class="crop">
                          <!-- <img src='./fooodie_menu/alloo_sandwich.JPG'> -->
                  </div>
                  <h3>Product Name</h3>
                  <p>&#8377;50</p>
              </div>
              
              <div class="product">
                      <div class="crop">
                              <!-- <img src='./fooodie_menu/dum_biriysni.jpg'> -->
                      </div>
                      <h3>Product Name</h3>
                      <p>&#8377;50</p>
                  </div>
          
              <div class="product">
                      <div class="crop">
                              <!-- <img src='./fooodie_menu/egg_biriyani.jpg'> -->
                      </div>
                      <h3>Product Name</h3>
                      <p>&#8377;50</p>
                  </div>
      
              <div class="product">
                      <div class="crop">
                              <!-- <img src='./fooodie_menu/chicken_roll.jpg'> -->
                      </div>
                      <h3>Product Name</h3>
                      <p>&#8377;50</p>
                  </div>
          
              <div class="product">
                      <div class="crop">
                              <!-- <img src='./fooodie_menu/egg_chowmein.jpg'> -->
                      </div>
                      <h3>Product Name</h3>
                      <p>&#8377;50</p>
                  </div>

              <div class="product">
                      <div class="crop">
                              <!-- <img src='./fooodie_menu/jira_rice.png'> -->
                      </div>
                      <h3>Product Name</h3>
                      <p>&#8377;50</p>
                  </div>
          </section>
          <section class="menu-category">
                  <div class="product">
                          <h3>Product Name</h3>
                      </div>
                      <div class="product">
                          <h3>Product Name</h3>
                      </div>
                      <div class="product">
                          <h3>Product Name</h3>
                      </div>
                      <div class="product">
                          <h3>Product Name</h3>
                      </div>
                      <div class="product">
                          <h3>Product Name</h3>
                      </div>
                      <div class="product">
                          <h3>Product Name</h3>
                      </div>
                      <div class="product">
                          <h3>Product Name</h3>
                      </div>
                      <div class="product">
                          <h3>Product Name</h3>
                      </div>
                      <div class="product">
                          <h3>Product Name</h3>
                      </div>
                      <div class="product">
                          <h3>Product Name</h3>
                      </div>
                      <div class="product">
                          <h3>Product Name</h3>
                      </div>
                      <div class="product">
                          <h3>Product Name</h3>
                      </div>
                      <div class="product">
                          <h3>Product Name</h3>
                      </div>
                      <div class="product">
                          <h3>Product Name</h3>
                      </div>
                      <div class="product">
                          <h3>Product Name</h3>
                      </div>
                      <div class="product">
                          <h3>Product Name</h3>
                      </div>
                      <div class="product">
                          <h3>Product Name</h3>
                      </div>
                      <div class="product">
                          <h3>Product Name</h3>
                      </div>
                      <div class="product">
                          <h3>Product Name</h3>
                      </div>
                      <div class="product">
                          <h3>Product Name</h3>
                      </div>
          </section>
          <section class="menu-category">
                  <div class="product">
                          <h3>Product Name</h3>
                      </div>
                      <div class="product">
                          <h3>Product Name</h3>
                      </div>
                      <div class="product">
                          <h3>Product Name</h3>
                      </div>
                      <div class="product">
                          <h3>Product Name</h3>
                      </div>
                      <div class="product">
                          <h3>Product Name</h3>
                      </div>
                      <div class="product">
                          <h3>Product Name</h3>
                      </div>
                      <div class="product">
                          <h3>Product Name</h3>
                      </div>
                      <div class="product">
                          <h3>Product Name</h3>
                      </div>
                      <div class="product">
                          <h3>Product Name</h3>
                      </div>
                      <div class="product">
                          <h3>Product Name</h3>
                      </div>
                      <div class="product">
                          <h3>Product Name</h3>
                      </div>
                      <div class="product">
                          <h3>Product Name</h3>
                      </div>
                      <div class="product">
                          <h3>Product Name</h3>
                      </div>
                      <div class="product">
                          <h3>Product Name</h3>
                      </div>
                      <div class="product">
                          <h3>Product Name</h3>
                      </div>
                      <div class="product">
                          <h3>Product Name</h3>
                      </div>
                      <div class="product">
                          <h3>Product Name</h3>
                      </div>
                      <div class="product">
                          <h3>Product Name</h3>
                      </div>
                      <div class="product">
                          <h3>Product Name</h3>
                      </div>
                      <div class="product">
                          <h3>Product Name</h3>
                      </div>
          </section>
          <section class="menu-category">
                  <div class="product">
                          <h3>Product Name</h3>
                      </div>
                      <div class="product">
                          <h3>Product Name</h3>
                      </div>
                      <div class="product">
                          <h3>Product Name</h3>
                      </div>
                      <div class="product">
                          <h3>Product Name</h3>
                      </div>
                      <div class="product">
                          <h3>Product Name</h3>
                      </div>
                      <div class="product">
                          <h3>Product Name</h3>
                      </div>
                      <div class="product">
                          <h3>Product Name</h3>
                      </div>
                      <div class="product">
                          <h3>Product Name</h3>
                      </div>
                      <div class="product">
                          <h3>Product Name</h3>
                      </div>
                      <div class="product">
                          <h3>Product Name</h3>
                      </div>
                      <div class="product">
                          <h3>Product Name</h3>
                      </div>
                      <div class="product">
                          <h3>Product Name</h3>
                      </div>
                      <div class="product">
                          <h3>Product Name</h3>
                      </div>
                      <div class="product">
                          <h3>Product Name</h3>
                      </div>
                      <div class="product">
                          <h3>Product Name</h3>
                      </div>
                      <div class="product">
                          <h3>Product Name</h3>
                      </div>
                      <div class="product">
                          <h3>Product Name</h3>
                      </div>
                      <div class="product">
                          <h3>Product Name</h3>
                      </div>
                      <div class="product">
                          <h3>Product Name</h3>
                      </div>
                      <div class="product">
                          <h3>Product Name</h3>
                      </div>
          </section>
          <section class="menu-category">
                  <div class="product">
                          <h3>Product Name</h3>
                      </div>
                      <div class="product">
                          <h3>Product Name</h3>
                      </div>
                      <div class="product">
                          <h3>Product Name</h3>
                      </div>
                      <div class="product">
                          <h3>Product Name</h3>
                      </div>
                      <div class="product">
                          <h3>Product Name</h3>
                      </div>
                      <div class="product">
                          <h3>Product Name</h3>
                      </div>
                      <div class="product">
                          <h3>Product Name</h3>
                      </div>
                      <div class="product">
                          <h3>Product Name</h3>
                      </div>
                      <div class="product">
                          <h3>Product Name</h3>
                      </div>
                      <div class="product">
                          <h3>Product Name</h3>
                      </div>
                      <div class="product">
                          <h3>Product Name</h3>
                      </div>
                      <div class="product">
                          <h3>Product Name</h3>
                      </div>
                      <div class="product">
                          <h3>Product Name</h3>
                      </div>
                      <div class="product">
                          <h3>Product Name</h3>
                      </div>
                      <div class="product">
                          <h3>Product Name</h3>
                      </div>
                      <div class="product">
                          <h3>Product Name</h3>
                      </div>
                      <div class="product">
                          <h3>Product Name</h3>
                      </div>
                      <div class="product">
                          <h3>Product Name</h3>
                      </div>
                      <div class="product">
                          <h3>Product Name</h3>
                      </div>
                      <div class="product">
                          <h3>Product Name</h3>
                      </div>
          </section>
      </div>
  </div>
</v-touch>
  </div>
</template>

<script>
  import './menu-list.scss'
  import MenuList from './menu-list'
  export default MenuList
</script>
