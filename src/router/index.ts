
import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw, RouterOptions } from "vue-router"

import list, { RouterObj } from "./routerList"

const getRoutes = (list:RouterObj[]):RouteRecordRaw[] => {
 return list.map(item => {
    const component = () => import(`/src/views/${item.src}/index.vue`);
    return {
      path: item.path,
      component: component,
      children: item.children?.length ? getRoutes(item.children): []
    }
  })
}

const routes1 = getRoutes(list);


const router = createRouter({
  history: createWebHistory(),
  routes:routes1
})

export default router