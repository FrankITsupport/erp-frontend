import type { RouteRecordRaw } from "vue-router";

const itRoutes: RouteRecordRaw[] = [
  {
    path: "/it",
    name: "It",
    component: () => import("../Ict.vue"),
  },
];

export default itRoutes;
