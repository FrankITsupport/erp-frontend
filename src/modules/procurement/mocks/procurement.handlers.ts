import { rest } from 'msw'

export const procurementHandlers = [
  // Example endpoint
  rest.get('/api/procurement/example', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([{ message: 'Mocked response from procurement' }])
    )
  })
]
