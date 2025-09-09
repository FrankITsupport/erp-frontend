// Import all module handlers
import { authHandlers } from '@/modules/admin/mocks/admin.handlers';
import { hrHandlers } from '@/modules/hr/mocks/hr.handlers';
import { itHandlers } from '@/modules/it/mocks/it.handlers';
import { maintenanceHandlers } from '@/modules/maintenance/mocks/maintenance.handlers';
import { procurementHandlers } from '@/modules/procurement/mocks/procurement.handlers';
import { productionHandlers } from '@/modules/production/mocks/production.handlers';
import { projectsHandlers } from '@/modules/projects/mocks/projects.handlers';
import { reportsHandlers } from '@/modules/reports/mocks/reports.handlers';
import { securityHandlers } from '@/modules/security/mocks/security.handlers';
import { storeHandlers } from '@/modules/store/mocks/store.handlers';
import { complianceHandlers } from '@/modules/compliance/mocks/compliance.handlers';
import { designHandlers } from '@/modules/design/mocks/design.handlers';
import { financeHandlers } from '@/modules/finance/mocks/finance.handlers';
import { logisticsHandlers } from '@/modules/logistics/mocks/logistics.handlers';

// Combine all handlers
export const handlers = [
  ...authHandlers,
  ...hrHandlers,
  ...itHandlers,
  ...maintenanceHandlers,
  ...procurementHandlers,
  ...productionHandlers,
  ...projectsHandlers,
  ...reportsHandlers,
  ...securityHandlers,
  ...storeHandlers,
  ...complianceHandlers,
  ...designHandlers,
  ...financeHandlers,
  ...logisticsHandlers,
];
    