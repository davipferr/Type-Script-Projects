import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Router
import router from "../src/routes/index.ts"


// Font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import 
{
  faCircleCheck,
  faCartShopping,
  faTrash,
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faCircleCheck,
  faCartShopping,
  faTrash,
)

// Vuetify
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'dark'
  },
  components,
  directives,
})




createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(vuetify)
.use(router)
.mount('#app')
