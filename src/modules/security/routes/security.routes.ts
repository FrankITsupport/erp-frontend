import type { RouteRecordRaw } from "vue-router";

const securityRoutes: RouteRecordRaw[] = [
  {
    path: "/security",
    name: "Security",
    component: () => import("../Security.vue"),
  },
];

export default securityRoutes;
