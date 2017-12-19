import Vue from 'vue'
import Router from 'vue-router'
// import HomePage from '~/components/home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      // component: HomePage
      component: () => import(/* webpackChunkName: "page-home" */ '../pages/home')
    },
    {
      path: '/menu-list/:categoryId',
      name: 'MenuList',
      component: () => import(/* webpackChunkName: "page-menu-list" */ '../pages/menu-list')
    },
    {
      path: '/menu-list/product/:productId',
      name: 'ProductDescription',
      component: () => import(/* webpackChunkName: "page-product-description" */ '../pages/product-description')
    },
    {
      path: '/terms-and-conditions',
      name: 'TermsAndConditions',
      component: () => import(/* webpackChunkName: "page-terms-conditions" */ '../pages/terms-conditions')
    },
    {
      path: '*',
      name: 'PageNotFound',
      component: () => import(/* webpackChunkName: "page-404" */ '../pages/no-found')
    }
  ]
})
