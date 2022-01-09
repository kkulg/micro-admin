import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { BaseRoutes } from './base';

const routes: Array<RouteRecordRaw> = [...BaseRoutes];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;