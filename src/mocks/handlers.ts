// Import all module handlers
import { authHandlers } from '@/modules/admin/mocks/admin.handlers';


// Combine all handlers
export const handlers = [
  ...authHandlers,
];
    