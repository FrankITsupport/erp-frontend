import { rest } from 'msw'

export const projectsHandlers = [
  // Example endpoint
  rest.get('/api/projects/example', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([{ message: 'Mocked response from projects' }])
    )
  })
]
