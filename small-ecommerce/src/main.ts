import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Components
import TextFieldComponent from '@c/TextFieldComponent.vue'


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
  faBarcode,
  faCreditCard,
  faCopy,
} from '@fortawesome/free-solid-svg-icons'

import 
{
  faPix,
} from '@fortawesome/free-brands-svg-icons'

library.add(
  faCircleCheck,
  faCartShopping,
  faTrash,
  faPix,
  faBarcode,
  faCreditCard,
  faCopy,
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
.component('text-field-component', TextFieldComponent)
.use(vuetify)
.use(router)
.mount('#app')
