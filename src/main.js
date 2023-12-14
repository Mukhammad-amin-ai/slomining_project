import '@/assets/styles/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'
const app = createApp(App)
app.use(AOS)
app.use(router)

app.mount('#app')
