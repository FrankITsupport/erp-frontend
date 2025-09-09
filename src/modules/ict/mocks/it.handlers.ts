import { rest } from 'msw'

export const itHandlers = [
  // Example endpoint
  rest.get('/api/it/example', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([{ message: 'Mocked response from it' }])
    )
  })
]
