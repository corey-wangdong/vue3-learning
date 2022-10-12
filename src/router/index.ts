
import { createRouter, createWebHashHistory, createWebHistory } from "vue-router"
import About from '@views/about/index.vue'
import Dashboard from '@views/dashboard/index.vue'
import Login from '@views/login/index.vue'
import Lottery from '@views/lottery-manage/index.vue'
import LotteryList from '@views/lottery-manage/list/index.vue'

import Shop from '@views/shop-manage/index.vue'
import Order from '@views/shop-manage/order/index.vue'
import OrderDetail from '@views/shop-manage/order-detail/index.vue'
import Refund from '@views/shop-manage/refund/index.vue'
import RefundGoods from '@views/shop-manage/refund-goods/index.vue'
import RefundSingle from '@views/shop-manage/refund-single/index.vue'

const routes = [
  { path: '/', component: Login },
  {
    path: '/dashboard',
    component: Dashboard,
    children:[
      {
        path: "lottery",
        component: Lottery,
        children:[
          {
            path: "list",
            component: LotteryList
          }
        ]
      },
      {
        path: "shop",
        component: Shop,
        children:[
          {
            path: "order",
            component: Order
          },
          {
            path: "order-detail",
            component: OrderDetail
          },
          {
            path: "refund",
            component: Refund
          },
          {
            path: "refund-goods",
            component: RefundGoods
          },
          {
            path: "refund-single",
            component: RefundSingle
          },
        ]
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