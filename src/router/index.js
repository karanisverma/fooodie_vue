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
      path: '/help-and-support',
      name: 'TermsAndConditions',
      component: () => import(/* webpackChunkName: "page-terms-conditions" */ '../pages/terms-conditions')
    },
    {
      path: '/how-it-works',
      name: 'HowItWorksPage',
      component: () => import(/* webpackChunkName: "page-how-it-works" */ '../pages/how-it-works')
    },
    {
      path: '*',
      name: 'PageNotFound',
      component: () => import(/* webpackChunkName: "page-404" */ '../pages/no-found')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
