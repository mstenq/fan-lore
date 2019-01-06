import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/story/:id',
      name: 'story',
      // route level code-splitting
      // this generates a separate chunk (story.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "story" */ './views/Story.vue'),
      props: true
    },
    {
      path: '/authenticate',
      name: 'authenticate',
      component: () => import(/* webpackChunkName: "authenticate" */ './views/Authenticate.vue')
    }
  ]
})
