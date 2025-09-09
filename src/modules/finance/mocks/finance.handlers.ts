import { rest } from 'msw'

export const financeHandlers = [
  // Example endpoint
  rest.get('/api/finance/example', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([{ message: 'Mocked response from finance' }])
    )
  })
]
