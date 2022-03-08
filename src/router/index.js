import Vue from "vue";
import VueRouter from "vue-router";
import News from "../views/News.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "News",
    component: News,
  },
  {
    path: "/portal",
    name: "Portal",
    component: () =>
      import(/* webpackChunkName: "portal" */ "../views/Portal.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
