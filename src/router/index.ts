
import { createRouter, createWebHashHistory, createWebHistory } from "vue-router"
import About from '@views/about/index.vue'
import Dashboard from '@views/dashboard/index.vue'
import Login from '@views/login/index.vue'
import Shop from '@views/shop-manage/index.vue'
import Lottery from '@views/lottery-manage/index.vue'

const routes = [
  { path: '/', component: Login },
  {
    path: '/dashboard',
    component: Dashboard,
    children:[
      {
        path: "lottery",
        component: Lottery
      },
      {
        path: "shop",
        component: Shop
      }
    ]
  },
  { path: '/404', component: About },
]


const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router