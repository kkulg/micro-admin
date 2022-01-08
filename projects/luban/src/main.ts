import { createApp, App } from 'vue';
// 路由配置
import router from '@luban/router';
// 根组件
import LbApp from './App.vue';

const app: App = createApp(LbApp);
app.use(router);
app.mount('#app');