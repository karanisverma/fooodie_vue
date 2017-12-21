import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

class CartState {
  constructor () {
    this.items = [
      {
        img: 'https: //fooodie.store/static/img/menu/veg_sandwich.jpg',
        name: 'Veg Sandwich',
        cost: 35,
        status: 'instock',
        fav: 2,
        type: 'veg',
        category: 'snacks',
        product_id: 1,
        detail: 'Combination of butter, cucumber, tomato, onion served with toasted bread.',
        ingredients: '1.sdflkfj|2.dsfsadf|3.sdafsdf|4.dasfdsaf|',
        quantity: 2
      },
      {
        img: 'https: //fooodie.store/static/img/menu/paneer_sandwich.jpg',
        name: 'Paneer Sandwich',
        cost: 45,
        status: 'instock',
        fav: 2,
        type: 'veg',
        category: 'snacks',
        product_id: 2,
        detail: 'Combination of butter, cucumber, tomato, onion served with toasted bread.',
        ingredients: '1.sdflkfj|2.dsfsadf|3.sdafsdf|4.dasfdsaf|',
        quantity: 3
      },
      {
        img: 'https: //fooodie.store/static/img/menu/alloo_sandwich.jpg',
        name: 'Alloo Sandwich',
        cost: 35,
        status: 'instock',
        fav: 2,
        type: 'veg',
        category: 'snacks',
        product_id: 3,
        detail: 'Combination of butter, cucumber, tomato, onion served with toasted bread.',
        ingredients: '1.sdflkfj|2.dsfsadf|3.sdafsdf|4.dasfdsaf|',
        quantity: 4
      },
      {
        img: 'https: //fooodie.store/static/img/menu/alloo_sandwich.jpg',
        name: 'Alloo Sandwich',
        cost: 35,
        status: 'instock',
        fav: 2,
        type: 'veg',
        category: 'snacks',
        product_id: 3,
        detail: 'Combination of butter, cucumber, tomato, onion served with toasted bread.',
        ingredients: '1.sdflkfj|2.dsfsadf|3.sdafsdf|4.dasfdsaf|',
        quantity: 4
      },
      {
        img: 'https: //fooodie.store/static/img/menu/alloo_sandwich.jpg',
        name: 'Alloo Sandwich',
        cost: 35,
        status: 'instock',
        fav: 2,
        type: 'veg',
        category: 'snacks',
        product_id: 3,
        detail: 'Combination of butter, cucumber, tomato, onion served with toasted bread.',
        ingredients: '1.sdflkfj|2.dsfsadf|3.sdafsdf|4.dasfdsaf|',
        quantity: 4
      },
      {
        img: 'https: //fooodie.store/static/img/menu/alloo_sandwich.jpg',
        name: 'Alloo Sandwich',
        cost: 35,
        status: 'instock',
        fav: 2,
        type: 'veg',
        category: 'snacks',
        product_id: 3,
        detail: 'Combination of butter, cucumber, tomato, onion served with toasted bread.',
        ingredients: '1.sdflkfj|2.dsfsadf|3.sdafsdf|4.dasfdsaf|',
        quantity: 4
      },
      {
        img: 'https: //fooodie.store/static/img/menu/alloo_sandwich.jpg',
        name: 'Alloo Sandwich',
        cost: 35,
        status: 'instock',
        fav: 2,
        type: 'veg',
        category: 'snacks',
        product_id: 3,
        detail: 'Combination of butter, cucumber, tomato, onion served with toasted bread.',
        ingredients: '1.sdflkfj|2.dsfsadf|3.sdafsdf|4.dasfdsaf|',
        quantity: 4
      }
    ]
  }
}

export default new Vuex.Store({
  state: new CartState()
})
