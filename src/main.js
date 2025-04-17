import './assets/main.css'

import { createPinia } from 'pinia'
App.use(createPinia())

import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'

createApp(App).mount('#app')
