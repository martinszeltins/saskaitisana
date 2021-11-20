import { createApp } from 'vue'
import App from './App.vue'
import routes from '/@/routes.js'
import axios from 'axios'
import '/@/assets/css/app.css'

axios.defaults.headers.common = {
    'Content-Type':     'application/json',
    'accept':           'application/json',
    'X-Requested-With': 'XMLHttpRequest'
}

window.axios = axios

const app = createApp(App)

app.use(routes)

app.mount('#app')
