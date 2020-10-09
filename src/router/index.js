import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [

  {
    path: '/Login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../components/login/login.vue')
  },

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
        path: 'home/general',
        component: () => import(/* webpackChunkName: "general" */ '../components/generalContainer/generalContainer.vue'),
        meta: {
          rolu: [4]
        }
      },
      {
        path: 'home/index1',
        component: () => import(/* webpackChunkName: "home1" */ '../components/homeCompoents/home1.vue'),
        meta: {
          rolu: [1, 2]
        }
      },
      {
        path: 'home/index2',
        component: () => import(/* webpackChunkName: "home2" */ '../components/homeCompoents/home2.vue'),
        meta: {
          rolu: [1, 2]
        }
      },
      {
        path: 'home/index3',
        name: 'index3',
        component: () => import(/* webpackChunkName: "home3" */ '../components/homeCompoents/home3.vue'),
        meta: {
          rolu: [3]
        }
      },
      {
        path: 'home/index4',
        component: () => import(/* webpackChunkName: "home4" */ '../components/homeCompoents/home4.vue'),
        meta: {
          rolu: [1]
        }
      },
      {
        path: 'home/index5',
        component: () => import(/* webpackChunkName: "home5" */ '../components/homeCompoents/home5.vue'),
        meta: {
          rolu: [1]
        }
      },
      {
        path: '/home/department/:id',
        component: () => import(/* webpackChunkName: "department" */ '../components/department/department.vue'),
        meta: {
          rolu: [1, 2]
        }
      },
      {
        path: '/home/taskDetail/:id',
        component: () => import(/* webpackChunkName: "taskDetail" */ '../components/department/taskDetail.vue'),
        meta: {
          rolu: [1, 2]
        }
      },
      {
        path: '/home/task',
        component: () => import(/* webpackChunkName: "task" */ '../components/homeCompoents/task.vue'),
        meta: {
          rolu: [1]
        }
      },
    ]
  },

]



const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})



export default router
