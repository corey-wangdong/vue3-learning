import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
// import './style.css'
import naiveUi from 'naive-ui'
import App from './App.vue';

const Home = () => import('./components/Home.vue');
const Table = () => import('./components/Table.vue')

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    { path: '/', component: Home },
    { path: '/table', component: Table },
  ]
})

const app = createApp(App);

app.use(router);
app.use(naiveUi);

app.mount('#app')
