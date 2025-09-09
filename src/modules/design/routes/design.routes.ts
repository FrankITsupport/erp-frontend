import type { RouteRecordRaw } from "vue-router";

const designRoutes: RouteRecordRaw[] = [
  {
    path: "/design",
    name: "Design",
    component: () => import("../Design.vue"),
  },
];

export default designRoutes;
