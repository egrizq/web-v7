import './assets/index.css'

import { createApp } from 'vue'
import App from './App.vue'
import AOS from 'aos';
import 'aos/dist/aos.css';
import router from './router';

createApp(App)
    .use(router)
    .mount('#app')
