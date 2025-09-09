import type { RouteRecordRaw } from "vue-router";

const logisticsRoutes: RouteRecordRaw[] = [
  {
    path: "/logistics",
    name: "Logistics",
    component: () => import("../Logistics.vue"),
  },
];

export default logisticsRoutes;
