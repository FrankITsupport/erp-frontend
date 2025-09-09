// scripts/setup-mocks.js
import { mkdirSync, writeFileSync } from "fs";
import { join } from "path";

const modules = [
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

// Root mocks folder
const rootMocksPath = join("src", "mocks");
mkdirSync(rootMocksPath, { recursive: true });

// Create root files
writeFileSync(
  join(rootMocksPath, "handlers.ts"),
  `// Collects all module handlers
export const handlers = []
`
);

writeFileSync(
  join(rootMocksPath, "browser.ts"),
  `import { setupWorker } from 'msw'
import { handlers } from './handlers'

export const worker = setupWorker(...handlers)
`
);

// Module mocks folders
modules.forEach((mod) => {
  const mocksPath = join("src", "modules", mod, "mocks");
  mkdirSync(mocksPath, { recursive: true });

  const handlerFile = join(mocksPath, `${mod}.handlers.ts`);
  writeFileSync(
    handlerFile,
    `import { rest } from 'msw'

export const ${mod}Handlers = [
  // Example endpoint
  rest.get('/api/${mod}/example', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([{ message: 'Mocked response from ${mod}' }])
    )
  })
]
`
  );
});

console.log("✅ Mock folders and starter files created!");
