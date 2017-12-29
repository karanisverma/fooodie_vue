<template>
  <div class="page-menu-list">
    <Toolbar v-bind="toolbarProps"/>
    <nav>
        <div class="category-header" style=""><span>Category</span></div>
        <button @click="goTo(0)" class="active-category" id='category-1'>
            <span>Snacks</span>
            <i class="material-icons">keyboard_arrow_right</i>
        </button>
        <button @click="goTo(1)" id='category-2'>
            <span>Rice & Biriyani</span>
            <i class="material-icons">keyboard_arrow_right</i>
        </button>
        <button @click="goTo(2)" id='category-3'>
            <span>Curry</span>
            <i class="material-icons">keyboard_arrow_right</i>
        </button>
        <button @click="goTo(3)" id='category-4'>
            <span>Rolls & Prathas</span>
            <i class="material-icons">keyboard_arrow_right</i>
        </button>
        <button @click="goTo(4)" id='category-5'>
            <span>Drink & Desserts</span>
            <i class="material-icons">keyboard_arrow_right</i>
        </button>
    </nav>
    <v-touch
    @panright="slideMenu"
    @panleft="slideMenu"
    class='touch-zone'
    >
    <div class="menu-slider-wrapper">
        <div class="menu-slider">
            <section class="menu-category">
                <div class="product" v-for="(product, i) in allProducts" v-if="product.category=='snacks'">
                    <div class="crop">
                        <router-link
                        :to="{ name: 'ProductDescription',
                        params: {productId: product.product_id} } ">
                        <img v-lazy="product.img">
                        </router-link>
                    </div>
                    <div class="product-info">
                        <div class="product-name-cost">
                            <h3>{{product.name}}</h3>
                            <p>&#8377;{{product.cost}}</p>
                        </div>
                        <div class="add-to-cart">
                            <QuantityButtonComponent :product-id="product.product_id" :quantity="product.quantity"
                            @UpdateProductsQuantity="updateQuantity"
                            ></QuantityButtonComponent>
                        </div>
                    </div>
                </div>
            </section>

            <section class="menu-category">
                <div class="product" v-for="(product, i) in allProducts" v-if="product.category=='rice_and_biriyani'">
                    <div class="crop">
                        <router-link
                        :to="{ name: 'ProductDescription',
                        params: {productId: product.product_id} } ">
                        <img v-lazy="product.img">
                        </router-link>
                    </div>
                    <div class="product-info">
                        <div class="product-name-cost">
                            <h3>{{product.name}}</h3>
                            <p>&#8377;{{product.cost}}</p>
                        </div>
                        <div class="add-to-cart">
                            <QuantityButtonComponent :product-id="product.product_id" :quantity="product.quantity"
                            @UpdateProductsQuantity="updateQuantity"
                            ></QuantityButtonComponent>
                        </div>
                    </div>
                </div>
            </section>

            <section class="menu-category">
                <div class="product" v-for="(product, i) in allProducts" v-if="product.category=='curry'">
                    <div class="crop">
                        <router-link
                        :to="{ name: 'ProductDescription',
                        params: {productId: product.product_id} } ">
                        <img v-lazy="product.img">
                        </router-link>
                    </div>
                    <div class="product-info">
                        <div class="product-name-cost">
                            <h3>{{product.name}}</h3>
                            <p>&#8377;{{product.cost}}</p>
                        </div>
                        <div class="add-to-cart">
                            <QuantityButtonComponent :product-id="product.product_id" :quantity="product.quantity"
                            @UpdateProductsQuantity="updateQuantity"
                            ></QuantityButtonComponent>
                        </div>
                    </div>
                </div>
            </section>

            <section class="menu-category">
                <div class="product" v-for="(product, i) in allProducts" v-if="product.category=='rolls_and_paratha'">
                    <div class="crop">
                        <router-link
                        :to="{ name: 'ProductDescription',
                        params: {productId: product.product_id} } ">
                        <img v-lazy="product.img">
                        </router-link>
                    </div>
                    <div class="product-info">
                        <div class="product-name-cost">
                            <h3>{{product.name}}</h3>
                            <p>&#8377;{{product.cost}}</p>
                        </div>
                        <div class="add-to-cart">
                            <QuantityButtonComponent :product-id="product.product_id" :quantity="product.quantity"
                            @UpdateProductsQuantity="updateQuantity"
                            ></QuantityButtonComponent>
                        </div>
                    </div>
                </div>
            </section>

            <section class="menu-category">
                <div class="product" v-for="(product, i) in allProducts" v-if="product.category=='drink_and_dessert'">
                    <div class="crop">
                        <router-link
                        :to="{ name: 'ProductDescription',
                        params: {productId: product.product_id} } ">
                        <img v-lazy="product.img">
                        </router-link>
                    </div>
                    <div class="product-info">
                        <div class="product-name-cost">
                            <h3>{{product.name}}</h3>
                            <p>&#8377;{{product.cost}}</p>
                        </div>
                        <div class="add-to-cart">
                            <QuantityButtonComponent :product-id="product.product_id" :quantity="product.quantity"
                            @UpdateProductsQuantity="updateQuantity"
                            ></QuantityButtonComponent>
                        </div>
                    </div>
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
