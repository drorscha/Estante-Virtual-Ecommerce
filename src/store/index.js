// src/store/index.js
import { createStore } from 'vuex';
import cart from './cart';

export default createStore({
    modules: {
        cart
    }
});
