import {createPinia} from 'pinia'
import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import './assets/main.css'

createApp(App)
.use(router)
.use(createPinia())
.mount('#app')
