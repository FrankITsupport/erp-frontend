import { rest } from 'msw'

export const customer serviceHandlers = [
  // Example endpoint
  rest.get('/api/customer service/example', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([{ message: 'Mocked response from customer service' }])
    )
  })
]
