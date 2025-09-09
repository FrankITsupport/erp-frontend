import { rest } from 'msw'

export const designHandlers = [
  // Example endpoint
  rest.get('/api/design/example', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([{ message: 'Mocked response from design' }])
    )
  })
]
