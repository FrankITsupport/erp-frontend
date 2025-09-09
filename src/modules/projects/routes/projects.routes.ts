import type { RouteRecordRaw } from "vue-router";

const projectsRoutes: RouteRecordRaw[] = [
  {
    path: "/projects",
    name: "Projects",
    component: () => import("../Projects.vue"),
  },
];

export default projectsRoutes;
