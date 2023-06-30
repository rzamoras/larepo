// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.config.globalProperties.$backend = 'https://lara10.rzamoras.com'

app.use(createPinia())
app.use(router)

app.mount('#app')
