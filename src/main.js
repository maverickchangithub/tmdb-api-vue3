import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routes'
import gsap from 'gsap'
gsap.install(window)
import _ from 'lodash'
window._ = _


const app = createApp(App)
app.use(router).mount('#app')
