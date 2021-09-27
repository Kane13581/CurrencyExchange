import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Currency from '../views/Currency';

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/curency",
    name: "Currency",
    component: Currency,
  },
  {
    path: "/currency/:id",
    name: "Currency",
    component: () => 
      import("../views/Currency")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
