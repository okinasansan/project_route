import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import '@mdi/font/css/materialdesignicons.css'

loadFonts()

console.log('Google Maps API Key:', import.meta.env.VITE_APP_GOOGLEMAP_API);

createApp(App)
  .use(router)
  .use(vuetify) 
  .mount('#app')