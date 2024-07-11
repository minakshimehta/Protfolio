// src/main.js
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
// import { all } from '@awesome.me/kit-KIT_CODE/icons'

import App from './App.vue';
import NavBar from './components/NavBar.vue';

// Register global components
const app = createApp(App);
app.component('NavBar', NavBar);
app.component('font-awesome-icon', FontAwesomeIcon)


// Mount the app
app.mount('#app');
