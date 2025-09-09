import type { RouteRecordRaw } from "vue-router";

const storeRoutes: RouteRecordRaw[] = [
  {
    path: "/store",
    name: "Store",
    component: () => import("../Store.vue"),
  },
];

export default storeRoutes;
