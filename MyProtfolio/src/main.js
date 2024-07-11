// src/main.js
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';
import App from './App.vue';
import NavBar from './components/NavBar.vue';

// Register global components
const app = createApp(App);
app.component('NavBar', NavBar);

// Mount the app
app.mount('#app');
