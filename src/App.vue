<template>
  <div>
    <!-- Componente NavBar com a prop cart-items -->
    <NavBar :cart-items="cartItems" />

    <!-- Card de Promoções -->
    <div class="promotion-card-container">
      <PromotionsCard />
    </div>

    <!-- Título da loja -->
    <h2 style="text-align: center;">Seja bem-vindo à lojinha de produtos</h2>

    <!-- Componente ProductList com props e evento personalizado -->
    <ProductList
      :products="products"
      :cart-items="cartItems"
      @add-to-cart="addToCart"
    />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import ProductList from './components/ProductList.vue';
import PromotionsCard from './components/PromotionsCard.vue';

export default {
  components: {
    NavBar,
    ProductList,
    PromotionsCard,
  },
  data() {
    return {
      cartItems: [],
      products: [
        { id: 1, name: 'Produto 1', price: 10.99, image: 'product-1.png' },
        { id: 2, name: 'Produto 2', price: 19.99, image: 'product-2.png' },
        { id: 3, name: 'Produto 3', price: 7.49, image: 'product-3.png' },
      // Adicione mais produtos aqui com a propriedade 'image'
      ],
    };
  },
  methods: {
    addToCart(product) {
      this.cartItems.push({ product, quantity: 1 });
    },
  },
};
</script>

<style scoped>
/* Adicione estilos para posicionar o card de promoção abaixo da NavBar */
.promotion-card-container {
  margin-top: 20px; /* Espaçamento entre a NavBar e o card de promoção */
}
</style>
