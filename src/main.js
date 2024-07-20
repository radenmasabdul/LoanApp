import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './styles/style.css'
import App from './App.vue'
import router from "./routes"

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { fas } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(fas)

const pinia = createPinia()
const app = createApp(App)

app.component("font-awesome-icon", FontAwesomeIcon)
app.use(pinia)
app.use(router)
app.mount('#app')
