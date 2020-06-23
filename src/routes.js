import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from 'pages/Home.vue';
import Feedback from 'pages/Feedback.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/feedback',
    name: 'Feedback',
    component: Feedback,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
