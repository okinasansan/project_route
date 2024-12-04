import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import '@mdi/font/css/materialdesignicons.css'
import { GoogleMap } from 'vue3-google-map';

//uokawa add
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import {
  applyPolyfills,
  defineCustomElements,
} from '@aws-amplify/ui-components/loader';

Amplify.configure(aws_exports);
applyPolyfills().then(() => {
  defineCustomElements(window);
});
//

loadFonts()

//console.log('Google Maps API Key:', import.meta.env.VITE_APP_GOOGLEMAP_API);

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