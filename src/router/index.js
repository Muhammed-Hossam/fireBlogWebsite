import { createRouter, createWebHistory } from "vue-router";
// import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Blogs from '../views/TheBlogs.vue';
import Login from '../views/TheLogin.vue';

// Vue.use(VueRouter);

// const routes = [
//   {
//     path: "/",
//     name: "Home",
//     component: Home,
//   },
// ];

// const router = new VueRouter({
//   mode: "history",
//   base: process.env.BASE_URL,
//   routes,
// });

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/blogs', component: Blogs },
    { path: '/login', component: Login },
  ]
})

export default router;
