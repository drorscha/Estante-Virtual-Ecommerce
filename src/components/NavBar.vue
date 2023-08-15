<template>
  <nav class="navbar">
    <div class="container">
      <div class="cart-icon-container">
          <!-- Ícone do carrinho usando Font Awesome -->
          <font-awesome-icon :icon="['fas', 'house']" class="cart-icon" />
          <!-- Indicador de quantidade -->
        
        </div>
        <router-link to="/" class="logo-text"></router-link>
      
      <!-- Navbar menu -->
      <div class="navbar-menu">
        <div class="navbar-start">
          <!-- Adicione links aqui -->
        </div>
        <div class="search-bar">
          <div class="search-input">
            <input v-model="searchQuery" placeholder="Pesquisar produtos" />
            <button class="search-button" @click="searchProducts">
              <font-awesome-icon :icon="['fas', 'search']" class="search-icon" />
            </button>
          </div>
        </div>
        <div class="navbar-brand">
        <div class="cart-icon-container">
          <!-- Ícone do carrinho usando Font Awesome -->
          <font-awesome-icon :icon="['fas', 'shopping-cart']" class="cart-icon" />
          <!-- Indicador de quantidade -->
          <div class="cart-quantity" v-if="cartItems.length > 0">
            {{ cartItems.length }}
          </div>
        </div>
        <router-link to="/" class="logo-text"></router-link>
      </div>
      </div>
      
      <!-- Navbar end -->
      <div class="navbar-end">
        <!-- Ícone de perfil/avatar -->
        <font-awesome-icon :icon="['fas', 'circle-user']" class="profile-icon" />
        <router-link to="/user" class="user-text"></router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import { FontAwesomeIcon } from '../fontawesome'; // Importe o componente FontAwesomeIcon

export default {
  components: {
    FontAwesomeIcon,
  },
  props: {
    cartItems: {
      type: Array,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: [],
    },
  },
  data() {
    return {
      searchQuery: '',
    };
  },
  methods: {
    searchProducts() {
      // Implemente a lógica de busca de produtos aqui
      console.log('Pesquisar produtos:', this.searchQuery);
      // Exemplo: você pode emitir um evento para o componente pai com a consulta de pesquisa
      this.$emit('search', this.searchQuery);
    },
  },
};
</script>

<style scoped>
/* Estilos para a barra de navegação */
.navbar {
  background-color: #980976;
  color: white;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.navbar-brand a {
  font-weight: bold;
  color: white;
  text-decoration: none;
}

.navbar-menu {
  display: flex;
  align-items: center;
}

.navbar-start {
  margin-right: 20px;
}

.navbar-start a {
  color: white;
  text-decoration: none;
  margin-right: 20px;
  transition: color 0.3s;
}

.navbar-start a:hover {
  color: #ffd700;
}

.cart-icon,
.profile-icon {
  font-size: 24px;
  color: #efb4e1;
  cursor: pointer;
  margin-left: 20px; 
}
.cart-icon-container {
  position: relative;
}
.cart-quantity {
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: red;
  color: white;
  font-size: 11px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.profile-icon:hover {
  color: #ffd700; 
}

/* Estilos para a barra de pesquisa */
.search-bar {
  display: flex;
  align-items: center;
  cursor: search;
}

/* Estilos para o input de pesquisa */
.search-bar input {
  padding: 8px;
  border: none;
  border-radius: 20px;
  font-size: 14px;
  margin-right: 20px;
  width: 400px;
}

/* Estilos para o botão de pesquisa */
.search-bar button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 18px;
  color: white;
}

.search-bar button:hover {
  color: #ffd700; /* Cor de destaque ao passar o mouse sobre o ícone de pesquisa */
}

/* Estilos para o texto do logo */
.logo-text {
  font-size: 24px;
  font-weight: bold;
  color: white;
  text-decoration: none;
}
</style>
