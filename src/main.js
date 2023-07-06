import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'


import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faMagnifyingGlass, faMoon ,faChevronDown } from '@fortawesome/free-solid-svg-icons'
import {  faCircleXmark } from '@fortawesome/free-regular-svg-icons'






/* add icons to the library */
library.add( faMoon , faMagnifyingGlass , faCircleXmark , faChevronDown )

 const app =  createApp(App);


 app.component('font-awesome-icon', FontAwesomeIcon);
 app.mount('#app');

 app.use(router);

