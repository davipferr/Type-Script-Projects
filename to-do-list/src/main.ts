import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// To Do List component
import ToDoListComponent from './components/ToDoList.vue';

// Vuetify
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'dark',
  },
  components,
  directives,
})

// Font Awasome
import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import
{ 
  faPlus,
  faTrash,
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faPlus,
  faTrash,
)

createApp(App)
.component('to-do-list', ToDoListComponent)
.component('font-awesome-icon', FontAwesomeIcon)
.use(vuetify)
.mount('#app')
