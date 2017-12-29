<template>
  <div class="search-box-component">
    <div class="search-box-wrapper" v-if="$route.path === '/search'">
      <input type="text" name="search" placeholder="Find funds" v-model="query" @keyup.enter="searchMutualFunds" autofocus>
      <span>
        <i class="material-icons" @click="searchMutualFunds">search</i>
        <!-- Search -->
      </span>
    </div>

    <div class="search-box-wrapper home-search-box" v-if="$route.path === '/'">
      <input type="text" name="search" placeholder="Find funds" v-model="query" autofocus>
      
        <router-link
          :to="{ name: 'SearchPage', query:{'query': query}}">
          <span>
          <i class="material-icons" @click="searchMutualFunds">search</i>
          </span>
        </router-link>
      
    </div>
  </div>
</template>

<script>
  import './search.scss'

  import SearchBoxComponent from './search'
  export default SearchBoxComponent
</script>