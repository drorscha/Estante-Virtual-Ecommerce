<!-- src/components/CartView.vue -->
<!-- src/components/CartView.vue -->

<template>
    <div>
      <!-- ... rest of the template ... -->
      <div class="cart-modal" v-if="isCartVisible">
        <div class="cart-content">
          <!-- Conteúdo do carrinho -->
          <div v-for="(item, index) in cartItems" :key="index" class="cart-item">
            {{ item.product.name }} - R$ {{ item.product.price }} (Quantidade: {{ item.quantity }})
            <button @click="removeFromCart(item.product)">Remover</button>
          </div>
          <p>Total: R$ {{ cartTotal.toFixed(2) }}</p>
        </div>
        <button class="close-button" @click="closeCart">Fechar</button>
      </div>
      <!-- ... rest of the template ... -->
    </div>
  </template>
  

  
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    computed: {
        ...mapGetters('cart', ['cartItems', 'cartTotal']) // Mapear getters cartItems e cartTotal do módulo cart
    },
    methods: {
        ...mapActions('cart', ['removeFromCart']) // Mapear ação removeFromCart do módulo cart
    }
};
</script>

<style scoped>
/* Estilos específicos para o componente CartView.vue */
/* Estilo para o modal do carrinho */
.cart-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.cart-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.close-button {
  background-color: #cc0000;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}
</style>
  