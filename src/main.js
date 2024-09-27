import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import '@mdi/font/css/materialdesignicons.css'
import { GoogleMap } from 'vue3-google-map';

loadFonts()

console.log('Google Maps API Key:', import.meta.env.VITE_APP_GOOGLEMAP_API);

createApp(App)
  .use(router)
  .use(vuetify) 
  .use( GoogleMap, {
    load: {
      key: import.meta.env.VITE_APP_GOOGLEMAP_API,  // 環境変数の参照を修正
      libraries: 'places',  // 必要に応じて追加ライブラリを指定
    },
  })
  .mount('#app')