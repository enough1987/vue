import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/Home/HomeView.vue";

export const routsNames = {
  main: "/",
  about: "/about",
};

const routes: Array<RouteRecordRaw> = [
  {
    path: routsNames.main,
    name: "main",
    component: () => import("../views/Home/HomeView.vue"),
  },
  {
    path: routsNames.about,
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/About/AboutView.vue"),
  },
  { path: "/:pathMatch(.*)*", redirect: routsNames.main },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
