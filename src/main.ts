import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ElementUI from './plugins/elementui'
import '@/styles/index.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementUI)

app.mount('#app')
