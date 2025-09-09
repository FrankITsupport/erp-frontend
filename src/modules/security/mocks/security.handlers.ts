import { rest } from 'msw'

export const securityHandlers = [
  // Example endpoint
  rest.get('/api/security/example', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([{ message: 'Mocked response from security' }])
    )
  })
]
