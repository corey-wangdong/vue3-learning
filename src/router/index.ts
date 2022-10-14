
import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw, RouterOptions } from "vue-router"

import list, { RouterObj } from "./routerList"
const modules = import.meta.glob('../views/**/*.vue')

const getRoutes = (list:RouterObj[]):RouteRecordRaw[] => {
 return list.map(item => {
    const component = modules[`../views/${item.src}/index.vue`];
     
    // const component = () => import(/* @vite-ignore */ `src/views/${item.src}/index.vue`);
    return {
      path: item.path,
      component: component,
      children: item.children?.length ? getRoutes(item.children): []
    }
  })
}

const routes = getRoutes(list);


const router = createRouter({
  history: createWebHistory(),
  routes:routes
})

export default router