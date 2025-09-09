import { rest } from 'msw'

export const complianceHandlers = [
  // Example endpoint
  rest.get('/api/compliance/example', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([{ message: 'Mocked response from compliance' }])
    )
  })
]
