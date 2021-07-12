import { RouteConfig } from 'vue-router';
import Home from '@/views/Home.vue';

export const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/article/:id',
    name: 'article',
    component: () =>
      import(/* webpackChunkName: "ModifyBlog" */ '@/views/Article.vue')
  },
  {
    path: '/modify',
    name: 'modify',
    component: () =>
      import(/* webpackChunkName: "ModifyBlog" */ '@/views/ModifyBlog.vue')
  },
  {
    path: '/create',
    name: 'create',
    component: () =>
      import(/* webpackChunkName: "CreateItem" */ '@/views/Edit.vue')
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () =>
      import(/* webpackChunkName: "EditItem" */ '@/views/Edit.vue')
  },
  {
    path: '*',
    name: 'notFound',
    component: () => import(/* webpackChunkName: "about" */ '@/views/404.vue')
  }
];
