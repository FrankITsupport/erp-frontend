// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'myTheme',
    themes: {
      myTheme: {
        dark: false,
        colors: {
          primary: '#0badd3',
          secondary: '#6e6f71',
          accent: '#c8da30',
          background: '#F7F9FB',
          surface: '#FFFFFF'   // clean white/neutral for sidebar & cards
        }
      }
    }
  }
})

// 👇 Wrap app creation in an async function so we can `await` MSW
async function bootstrap() {
  if (import.meta.env.MODE === 'development') {
    const { worker } = await import('./mocks/browser')
    await worker.start({
    serviceWorker: {
      url: '/mockServiceWorker.js',
    },
  })
  }

  createApp(App)
    .use(router)
    .use(vuetify)
    .mount('#app')
}

bootstrap()
