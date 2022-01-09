import { RouteRecordRaw } from 'vue-router';
import LbSignIn from '../views/sign-in/sign-in.vue';

export const BaseRoutes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/sign-in'
  },
  {
    path: '/sign-in',
    component: LbSignIn
  }
];