// create-structure.js
import fs from "fs";
import path from "path";

const baseDir = path.join(process.cwd(), "src", "modules");

const departments = [
  "admin",
  "customer service",
  "store",
  "procurement",
  "logistics",
  "projects",
  "hr",
  "finance",
  "reports",
    "it",
    "security",
    "maintenance",
    "compliance",
    "design",
    "production",
    
];

// common sub-folders for each module
const subDirs = ["components", "pages", "services", "store", "routes"];

if (!fs.existsSync(baseDir)) {
  fs.mkdirSync(baseDir, { recursive: true });
}

departments.forEach((dept) => {
  const deptPath = path.join(baseDir, dept);

  if (!fs.existsSync(deptPath)) {
    fs.mkdirSync(deptPath, { recursive: true });
  }

  // create sub directories
  subDirs.forEach((sub) => {
    const subPath = path.join(deptPath, sub);
    if (!fs.existsSync(subPath)) {
      fs.mkdirSync(subPath, { recursive: true });
    }
  });

  // starter Vue file
  const vueName = dept.charAt(0).toUpperCase() + dept.slice(1);
  fs.writeFileSync(
    path.join(deptPath, `${vueName}.vue`),
    `<template>\n  <div>${vueName} module works!</div>\n</template>\n`
  );

  // starter route file
  const routeFile = path.join(deptPath, "routes", `${dept}.routes.ts`);
  fs.writeFileSync(
    routeFile,
    `import type { RouteRecordRaw } from "vue-router";

const ${dept}Routes: RouteRecordRaw[] = [
  {
    path: "/${dept}",
    name: "${vueName}",
    component: () => import("../${vueName}.vue"),
  },
];

export default ${dept}Routes;
`
  );
});

console.log("✅ Department structure with routes/ folders created!");
