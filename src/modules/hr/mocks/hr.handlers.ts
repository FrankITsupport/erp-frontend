import { rest } from 'msw'

export const hrHandlers = [
  // Example endpoint
  rest.get('/api/hr/example', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([{ message: 'Mocked response from hr' }])
    )
  })
]
