import type { RouteRecordRaw } from "vue-router";

const customer serviceRoutes: RouteRecordRaw[] = [
  {
    path: "/customer service",
    name: "Customer service",
    component: () => import("../Customer service.vue"),
  },
];

export default customer serviceRoutes;
