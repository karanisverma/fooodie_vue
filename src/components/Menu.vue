<template>
  <div class="reddit-list">
    <p>We are testing if compoenent works?---> {{message}}</p>
  </div>
</template>

<script>

export default {
  name: 'Menu',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },

  computed: {
    message: function () { return this.$store.state.products }
  },

  created: function () {
    this.$store.dispatch('getProducts2').then(() => {
      console.log('This would be printed after dispatch!!', this.$store.state.products)
    })
  }
}
</script>

<style scoped>
    .reddit-list {
        font-family: sans-serif;
        width: 500px;
        padding: 10px;
        background: #f1f2f3;
        border: solid 2px #ccc;
    }            
    .reddit-list h3 {
        font-size: 15px;
        font-weight: bold;                
    }
    .reddit-list ul {
        font-size: 13px;
        list-style-type: none;
        padding: 0;                
    }
    .reddit-list ul li {
        margin-bottom: 10px;
    }
</style>
