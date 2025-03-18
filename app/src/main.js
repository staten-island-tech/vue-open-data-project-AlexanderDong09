import './assets/main.css'

import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(PrimeVue)

app.mount('#app')

import Button from 'primevue/button'

app.component('Button', Button)
