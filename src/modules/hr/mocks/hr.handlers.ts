import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('/api/hr/employees', () => {
    return HttpResponse.json([{ id: 1, name: 'Alice HR' }])
  }),
]
