import type { RouteRecordRaw } from "vue-router";

const financeRoutes: RouteRecordRaw[] = [
  {
    path: "/finance",
    name: "Finance",
    component: () => import("../Finance.vue"),
  },
];

export default financeRoutes;
