import { http, HttpResponse } from 'msw'


export const handlers = [
  http.get('/api/maintenance/tasks', () => {
    return HttpResponse.json([{ id: 1, task: 'Check machine A' }])
  }),
]

