// src/store/cart.js
export default {
    namespaced: true,
    state: {
        cartItems: []
    },
    mutations: {
        addToCart(state, product) {
            const existingItem = state.cartItems.find(item => item.product.id === product.id);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.cartItems.push({ product, quantity: 1 });
            }
        },
        removeFromCart(state, product) {
            const index = state.cartItems.findIndex(item => item.product.id === product.id);
            if (index !== -1) {
                state.cartItems.splice(index, 1);
            }
        },
        updateCartItemQuantity(state, { product, quantity }) {
            const cartItem = state.cartItems.find(item => item.product.id === product.id);
            if (cartItem) {
                cartItem.quantity = quantity;
            }
        }
    },
    actions: {
        addToCart({ commit }, product) {
            commit('addToCart', product);
        },
        removeFromCart({ commit }, product) {
            commit('removeFromCart', product);
        },
        updateCartItemQuantity({ commit }, { product, quantity }) {
            commit('updateCartItemQuantity', { product, quantity });
        }
    },
    getters: {
        cartItems(state) {
            return state.cartItems;
        },
        cartTotal(state) {
            return state.cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
        }
    }
};
