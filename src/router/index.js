import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [

  {
    path: '/home',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (Home.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue'),
    children: [
      {
        path: 'index1',
        component: () => import(/* webpackChunkName: "Home" */ '../components/homeCompoents/home1.vue'),
      },
      {
        path: 'index2',
        component: () => import(/* webpackChunkName: "Home" */ '../components/homeCompoents/home2.vue'),
      },
      {
        path: 'index3',
        component: () => import(/* webpackChunkName: "Home" */ '../components/homeCompoents/home3.vue'),
      },
    ]
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
