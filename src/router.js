import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './HomePage.vue'
import NotFound from './NotFound.vue';
import UserListWithoutState from './UserListWithoutState';
import UserListWithState from './UserListWithState';

const routes = [
  { path: '/', component: HomePage },
  { path: '/korisniciStanje', component: UserListWithState },
  { path: '/korisniciBezStanja', component: UserListWithoutState },
  {
    path: '/:catchAll(.*)*',
    component: NotFound,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
