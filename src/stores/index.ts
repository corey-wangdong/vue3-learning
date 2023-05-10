import { createPinia } from 'pinia';
// 引入持久化插件
import piniaPluginPersist from 'pinia-plugin-persist'

const pinia = createPinia();
// 使用该插件
pinia.use(piniaPluginPersist)

export default pinia;




