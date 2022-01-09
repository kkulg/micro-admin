import { createApp, App } from 'vue';
// 路由配置
import router from './router';
// 根组件
import LbApp from './App.vue';

import 'vfonts/FiraCode.css'

const app: App = createApp(LbApp);
app.use(router);
app.mount('#app');