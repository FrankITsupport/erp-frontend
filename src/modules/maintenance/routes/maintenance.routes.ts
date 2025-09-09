import type { RouteRecordRaw } from "vue-router";

const maintenanceRoutes: RouteRecordRaw[] = [
  {
    path: "/maintenance",
    name: "Maintenance",
    component: () => import("../Maintenance.vue"),
  },
];

export default maintenanceRoutes;
