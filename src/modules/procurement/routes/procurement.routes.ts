import type { RouteRecordRaw } from "vue-router";

const procurementRoutes: RouteRecordRaw[] = [
  {
    path: "/procurement",
    name: "Procurement",
    component: () => import("../Procurement.vue"),
  },
];

export default procurementRoutes;
