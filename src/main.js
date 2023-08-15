// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Certifique-se de importar o Vue Router
import store from './store'; // Certifique-se de importar o Vuex

createApp(App).use(router).use(store).mount('#app');
