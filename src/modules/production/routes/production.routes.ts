import type { RouteRecordRaw } from "vue-router";

const productionRoutes: RouteRecordRaw[] = [
  {
    path: "/production",
    name: "Production",
    component: () => import("../Production.vue"),
  },
];

export default productionRoutes;
