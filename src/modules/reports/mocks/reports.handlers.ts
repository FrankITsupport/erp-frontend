import { rest } from 'msw'

export const reportsHandlers = [
  // Example endpoint
  rest.get('/api/reports/example', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([{ message: 'Mocked response from reports' }])
    )
  })
]
