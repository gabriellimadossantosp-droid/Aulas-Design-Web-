<script setup>

defineProps({
    titulo: {
        type: String,
        required: true
    },
    subtitulo: {
        type: String,
    },
    imagem: {
        type: String,
    },
    url: {
        type: String
    }
})

</script>
<template>
    <div class="card">
        <img :src="imagem">
        <h3>{{ titulo }} <a v-if="url" :href="url">alguma coisa</a></h3>
        <p v-if="subtitulo">{{ subtitulo }}</p>
    </div>
</template>

<style scoped>
  div.card {
    width: 300px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    background-color: #ffffff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin: 1rem;
  }

  div img {
    width: 100%;
  }

  div.card div {
    padding: 12px 16px;
    color: #333333;
  }

  div.card h3 {
    margin: 1rem;
    font-size: 1.1rem;
  }

  div.card p {
    margin: 1rem;
    font-size: 0.9rem;
    color: #444444;
  }
</style>