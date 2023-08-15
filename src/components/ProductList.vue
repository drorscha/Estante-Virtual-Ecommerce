<template>
  <div class="product-list">
    <div v-for="product in products" :key="product.id" class="product-card">
      <div class="product-image">
        <img :src="productImageUrl(product.image)" :alt="product.name" />
      </div>
      <div class="product-details">
        <h3 class="product-name">{{ product.name }}</h3>
        <p class="product-price">R$ {{ product.price.toFixed(2) }}</p>
        <p class="product-description">{{ product.description }}</p>
        <div class="add-to-cart-button">
          <button @click="addToCart(product)" :class="{ 'added-to-cart': isProductAdded(product) }">
            <i v-if="isProductAdded(product)" class="fas fa-check-circle"></i>
            <i v-else class="fas fa-cart-plus"></i>
            {{ isProductAdded(product) ? 'Item Adicionado' : 'Adicionar ao Carrinho' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    products: Array,
    cartItems: Array,
  },
  methods: {
    productImageUrl(imageName) {
      // Construir a URL da imagem usando o caminho relativo ao diretório public/img/product
      return `${process.env.BASE_URL}img/product/${imageName}`;
    },
    isProductAdded(product) {
      return this.cartItems.some((item) => item.product.id === product.id);
    },
    addToCart(product) {
      this.$emit('add-to-cart', product);
    },
  },
};
</script>

<style scoped>
/* Estilos para o componente ProductList.vue */
.product-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center; /* Centraliza os produtos horizontalmente */
  align-items: center; /* Centraliza os produtos verticalmente */
  margin: 0 auto; /* Centraliza horizontalmente a lista de produtos */
  margin-top: 10px;
}
/* Estilos para os cards de produto */
.product-card {
  border: 1px solid #ccc;
  padding: 20px;
  width: 300px;
  display: flex;
  border-radius: 8px;
  flex-direction: column;
  justify-content: space-between;
}

.product-card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.product-image img {
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
}

.product-name {
  font-size: 1.2rem;
  margin: 0;
}

.product-price {
  font-size: 1rem;
  font-weight: bold;
  margin: 5px 0;
}

.product-description {
  font-size: 0.9rem;
  margin: 5px 0;
}

.added-to-cart {
  background-color: #00cc00;
  color: #fff;
}

.add-to-cart-button {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 10px;
}

.add-to-cart-button button {
  display: flex;
  align-items: center;
  background-color: #980976;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 10px;
  cursor: pointer;
}

.add-to-cart-button button:hover {
  background-color: #740c5b;
}

.add-to-cart-button i {
  margin-right: 5px;
}
</style>
