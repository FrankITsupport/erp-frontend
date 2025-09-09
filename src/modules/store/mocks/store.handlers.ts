import { rest } from 'msw'

export const storeHandlers = [
  // Example endpoint
  rest.get('/api/store/example', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([{ message: 'Mocked response from store' }])
    )
  })
]
