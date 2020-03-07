import Vue from 'vue';
import Home from '@/views/Home';
import About from '@/views/About';
import VueRouter from './wrouter';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    { path: "/", component: Home },
    { path: '/about', component: About }
  ]
})