import { createApp } from 'vue'
import App from './App.vue'
import routes from '/@/routes.js'
import '/@/assets/css/app.css'

const app = createApp(App)

app.use(routes)

app.mount('#app')
