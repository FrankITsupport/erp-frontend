import type { RouteRecordRaw } from "vue-router";

const complianceRoutes: RouteRecordRaw[] = [
  {
    path: "/compliance",
    name: "Compliance",
    component: () => import("../Compliance.vue"),
  },
];

export default complianceRoutes;
