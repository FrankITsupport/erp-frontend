import type { RouteRecordRaw } from "vue-router";

const reportsRoutes: RouteRecordRaw[] = [
  {
    path: "/reports",
    name: "Reports",
    component: () => import("../Reports.vue"),
  },
];

export default reportsRoutes;
