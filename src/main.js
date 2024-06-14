import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import '@mdi/font/css/materialdesignicons.css'

import Amplify, * as AmplifyModules from 'aws-amplify' // 追記
import { AmplifyPlugin } from 'aws-amplify-vue' // 追記
import aws_exports from './aws-exports' // 追記
Amplify.configure(aws_exports) // 追記

Vue.use(AmplifyPlugin, AmplifyModules) // 追記

Vue.config.productionTip = false


loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')