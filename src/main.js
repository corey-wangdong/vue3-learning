
import { createApp } from 'vue';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import pinia from "./stores"

import './style.css'
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(ElementPlus).use(pinia).use(router).mount('#app')

