import { store, key } from './store/index';
import { createApp } from 'vue'
import App from './App.vue'

import '@fortawesome/fontawesome-free/css/all.css'
import router from './router'

createApp(App)
    .use(router)
    .use(store, key)
    .mount('#app')
