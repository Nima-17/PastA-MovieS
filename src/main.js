import { createApp } from "vue";
import App from './App.vue'
import router from "./router";
import './assets/main.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


/* import specific icons */
import { faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faUserSecret, faSearch, faSun, faCode, faDonate, faPhone} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faSearch, faSun, faCode,faTwitter, faDiscord, faDonate, faPhone)

createApp(App)
.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app');