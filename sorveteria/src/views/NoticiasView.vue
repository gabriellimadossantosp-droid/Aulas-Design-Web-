<script setup>
import { useNoticiasStore } from '@/stores/useNoticiasStore';
const noticiasStore = useNoticiasStore()
</script>
<template>
    <article>
        <h2>Notícias</h2>

        <div v-for="noticia in noticiasStore.noticias" :key="noticia.id">
            <h3>{{ noticia.título }}</h3>
            <p>{{ noticia.texto }}</p>
        </div>
    </article>
</template>
