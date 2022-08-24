
import { createApp } from 'vue';
import App from './App.vue';
import ShopCart from './components/example/shopCart/ShopCart.vue'

const app = createApp(App);
// app.component("my-cpn", {
//   template: "#my-cpn"
// })
console.log('app---', app);
app.mount('#app')



















// import { createApp } from 'vue';
// import { createRouter, createWebHistory } from 'vue-router';
// // import './style.css'
// import naiveUi from 'naive-ui'
// import App from './App.vue';

// const Home = () => import('./components/Home.vue');
// const Table = () => import('./components/Table.vue')
// const Me = () => import('./components/Me.vue')

// const router = createRouter({
//   history: createWebHistory('/'),
//   routes: [
//     { path: '/', component: Home },
//     { path: '/me', component: Me },
//     // { path: '/table', component: Table },
//   ]
// })

// const app = createApp(App);

// app.use(router);
// app.use(naiveUi);

// app.mount('#app')
