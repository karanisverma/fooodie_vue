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
              <div class="product" v-for="(product, i) in allProducts" v-if="product.category=='snacks'">
                <div class="crop">
                <router-link
                :to="{ name: 'ProductDescription',
                params: {productId: product.product_id} } ">
                <img :src="product.img">
                </router-link>  
                </div>  
                <h3>{{product.name}}</h3>
                <p>&#8377;{{product.cost}}</p>
              </div>
          </section>

          <section class="menu-category">
              <div class="product" v-for="(product, i) in allProducts" v-if="product.category=='rice_and_biriyani'">
                <div class="crop">
                    <router-link
                    :to="{ name: 'ProductDescription',
                    params: {productId: product.product_id} } ">
                    <img :src="product.img">
                    </router-link>  
                </div>  
                <h3>{{product.name}}</h3>
                <p>&#8377;{{product.cost}}</p>
              </div>
          </section>

          <section class="menu-category">
              <div class="product" v-for="(product, i) in allProducts" v-if="product.category=='curry'">
                <div class="crop">
                    <router-link
                    :to="{ name: 'ProductDescription',
                    params: {productId: product.product_id} } ">
                    <img :src="product.img">
                    </router-link>  
                </div>  
                  <h3>{{product.name}}</h3>
                  <p>&#8377;{{product.cost}}</p>
              </div>
          </section>

          <section class="menu-category">
              <div class="product" v-for="(product, i) in allProducts" v-if="product.category=='rolls_and_paratha'">
                <div class="crop">
                    <router-link
                    :to="{ name: 'ProductDescription',
                    params: {productId: product.product_id} } ">
                    <img :src="product.img">
                    </router-link>  
                </div>  
                  <h3>{{product.name}}</h3>
                  <p>&#8377;{{product.cost}}</p>
              </div>
          </section>

          <section class="menu-category">
              <div class="product" v-for="(product, i) in allProducts" v-if="product.category=='drink_and_dessert'">
                <div class="crop">
                    <router-link
                    :to="{ name: 'ProductDescription',
                    params: {productId: product.product_id} } ">
                    <img :src="product.img">
                    </router-link>  
                </div>  
                  <h3>{{product.name}}</h3>
                  <p>&#8377;{{product.cost}}</p>
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
