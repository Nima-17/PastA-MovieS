import { createApp } from "vue";
import App from './App.vue'
import router from "./router";
import './assets/main.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


/* import specific icons */
import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faSearch, faSun, faCode, faPhone, faHome, faUser, faClock, faMessage, faMapLocation} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faSearch, faSun, faCode, faTwitter, faInstagram, faPhone, faHome, faUser, faClock, faMessage, faMapLocation)

createApp(App)
.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app');