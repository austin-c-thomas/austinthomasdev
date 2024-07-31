import { createApp } from 'vue'
import App from './App.vue'
import AppComponents from './components/app'
import store from './store'
import vuetify from './plugins/vuetify'

// Vuetify
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

// Styles
import './assets/main.css'

const app = createApp(App)

app.use(store);
app.use(vuetify);
app.use(AppComponents);

app.mount('#app')