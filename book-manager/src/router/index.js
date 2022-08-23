import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "BasicLayout",
    component: () => import(/* webpackChunkName: "BasicLayout" */ "../layout/BasicLayout"),
    children: [
      {
        path: "/books",
        name: "Book",
        component: () => import(/* webpackChunkName: "book" */ "../views/Books"),
      },
    ],
  },
  {
    path: "/auth",
    name: "auth",
    component: () => import(/* webpackChunkName: "about" */ "../views/Auth/index.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
