<template>
  <div class="home-container">
    <article>
      <h2>Menu dos Sorvetes</h2>
    </article>

    <!-- A imagem do sorvete fica dentro da div principal -->
    <div class="sorvete-card">
      <img src="https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=500" alt="Sorvete delicioso" class="sorvete-img" />
      <img src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500" alt="Sorvete artesanal" class="sorvete-img" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SorvetesView'
}
</script>

<style scoped>
.home-container {
  text-align: center;
  padding: 20px;
}

.sorvete-img {
  width: 100%;
  max-width: 450px;
  height: auto;
  border-radius: 8px;
  margin-top: 20px;
  margin-left: 10px;
  margin-right: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}