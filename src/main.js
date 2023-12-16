import '@/assets/styles/main.css'
import VueSweetalert2 from 'vue-sweetalert2'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import AOS from 'aos'
import store from './store/store'
import 'aos/dist/aos.css'
const app = createApp(App)
app.use(AOS)
app.use(router)
app.use(VueSweetalert2)
app.use(store)
app.mount('#app')
