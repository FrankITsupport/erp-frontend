import { rest } from 'msw'

export const productionHandlers = [
  // Example endpoint
  rest.get('/api/production/example', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([{ message: 'Mocked response from production' }])
    )
  })
]
