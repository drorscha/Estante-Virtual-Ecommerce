<template>
    <div class="promotions-card">
      <!-- Full Banner (largura máxima de 1140px) -->
      <div class="full-banner">
        <div class="promotion-card">
          <!-- Conteúdo do Full Banner -->
          <transition-group name="carousel-slide" tag="div">
            <div
              v-for="(product, index) in products"
              :key="product.id"
              class="promotion-item"
              :style="{ transform: itemTranslate(index) }"
            >
              <img
                :src="promotionImageUrl(product.image)"
                :alt="'Produto ' + (index + 1)"
                class="promotion-image"
              />
            </div>
          </transition-group>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentProductIndex: 0,
        products: [
          { id: 1, name: 'Produto 1', price: 10.99, image: 'product-1.png' },
          { id: 2, name: 'Produto 2', price: 19.99, image: 'product-2.png' },
          { id: 3, name: 'Produto 3', price: 7.49, image: 'product-3.png' },
          // Adicione mais produtos aqui com a propriedade 'image'
        ],
      };
    },
    methods: {
      promotionImageUrl(imageName) {
        // Construir a URL da imagem usando o caminho relativo ao diretório public/img/promotion
        return `${process.env.BASE_URL}img/promotion/${imageName}`;
      },
      itemTranslate(index) {
        const currentIndex = index - this.currentProductIndex;
        return `translateX(${currentIndex * 100}%)`;
      },
      nextImage() {
        this.currentProductIndex = (this.currentProductIndex + 1) % this.products.length;
      },
    },
    created() {
      this.timer = setInterval(this.nextImage, 5000);
    },
    beforeUnmount() {
      clearInterval(this.timer);
    },
  };
  </script>
  
  <style scoped>
  /* Estilos específicos para o componente PromotionsCard.vue */
  .promotions-card {
    overflow: hidden;
    margin-top: 20px; /* Espaço entre a NavBar e o card de promoção */
  }
  .full-banner {
    /* Estilos para o Full Banner */
    max-width: 1140px;
    margin: 0 auto; /* Centralizar o Full Banner */
  }
  
  /* Estilos específicos para o componente PromotionsCard.vue */
/* Estilos específicos para o componente PromotionsCard.vue */
.promotions-card {
  overflow: hidden;
  margin-top: 20px; /* Espaço entre a NavBar e o card de promoção */
  display: flex;
  justify-content: center; /* Centralizar horizontalmente */
  align-items: center; /* Centralizar verticalmente */
}
  
  .promotion-card {
    position: relative;
    width: 1024px; /* Largura do card */
    height: 320px; /* Altura do card */
    background-color: #f7f7f7; /* Cor de fundo do card */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra do card */
    overflow: hidden;
  }
  
  .promotion-item {
    flex: 0 0 100%;
    transition: transform 0.9s;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  
  .promotion-image {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover; /* Ajusta a imagem para cobrir todo o card */
  }
  </style>
  