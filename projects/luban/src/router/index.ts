import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { BaseRoutes } from '@luban/router/base';

const routes: Array<RouteRecordRaw> = [...BaseRoutes];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;