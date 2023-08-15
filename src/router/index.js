// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'; // Importe as funções necessárias do Vue Router
import ProductList from '../components/ProductList.vue';
import CartView from '../components/CartView.vue';

const routes = [
    { path: '/', component: ProductList },
    { path: '/cart', component: CartView }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
