import { rest } from 'msw'

export const maintenanceHandlers = [
  // Example endpoint
  rest.get('/api/maintenance/example', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([{ message: 'Mocked response from maintenance' }])
    )
  })
]
