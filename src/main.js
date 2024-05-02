import './assets/main.css'

import { createClient } from 'villus'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

const client = createClient({
  url: 'http://localhost:8000/graphql/' // your endpoint.
})

app.use(router)
app.use(client)

app.mount('#app')
