
if (import.meta.env.DEV) {
  import { http, HttpResponse } from 'msw'

  procurementHandlers = [
    // Example endpoint
    http.get('/api/procurement/example', () => {
      return HttpResponse.json([{ message: 'Mocked response from procurement' }])
    }),
  ]
}

export { procurementHandlers }
