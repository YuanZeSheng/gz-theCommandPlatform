import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [

  {
    path: '/',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (Home.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue'),
    redirect: '/home/index1',
    children: [
      {
        path: 'home/index1',
        component: () => import(/* webpackChunkName: "home1" */ '../components/homeCompoents/home1.vue'),
      },
      {
        path: 'home/index2',
        component: () => import(/* webpackChunkName: "home2" */ '../components/homeCompoents/home2.vue'),
      },
      {
        path: 'home/index3',
        component: () => import(/* webpackChunkName: "home3" */ '../components/homeCompoents/home3.vue'),
      },
      {
        path: 'home/index4',
        component: () => import(/* webpackChunkName: "home4" */ '../components/homeCompoents/home4.vue'),
      },
      {
        path: 'home/index5',
        component: () => import(/* webpackChunkName: "home5" */ '../components/homeCompoents/home5.vue'),
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
