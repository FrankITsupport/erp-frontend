import type { RouteRecordRaw } from "vue-router";

const adminRoutes: RouteRecordRaw[] = [
  {
    path: "/admin",
    name: "Admin",
    component: () => import("../Admin.vue"),
  },
];

export default adminRoutes;
