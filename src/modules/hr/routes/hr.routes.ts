import type { RouteRecordRaw } from "vue-router";

const hrRoutes: RouteRecordRaw[] = [
  {
    path: "/hr",
    name: "Hr",
    component: () => import("../Hr.vue"),
  },
];

export default hrRoutes;
