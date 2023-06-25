import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './samples/node-api'

createApp(App)
    .mount('#app')
    // send message to remove loading screen (preload/index.ts)
    .$nextTick(() => {
        postMessage({ payload: 'removeLoading' }, '*')
    })
