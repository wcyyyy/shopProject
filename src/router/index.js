import Vue from 'vue'
import VueRouter from 'vue-router'
import MSite from '@/pages/MSite/Msite.vue'
import Order from '@/pages/Order/Order.vue'
import Profile from '@/pages/Profile/Profile.vue'
import Search from '@/pages/Search/Search.vue'
import Login from '@/pages/Login/Login.vue'

Vue.use(VueRouter)
export default new VueRouter({
  routes:[
    {
      path:'/msite',
      component:MSite,
      meta: { requiresAuth: true }
    },
    {
      path:'/search',
      component:Search,
      meta: { requiresAuth: true }
    },{
      path:'/order',
      component:Order,
      meta: { requiresAuth: true }
    },
    {
      path:'/profile',
      component:Profile,
      meta: { requiresAuth: true }
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/',
      redirect:'/msite'
    }
  ]
})