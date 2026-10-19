<template>
    <div>
        <ul>
            <li v-for="item in noticias" :key="item.id">
                {{ item.titulo }} - {{ item.texto }}
            </li>
        </ul>
    </div>
</template>
<script setup>

import { ref } from 'vue'

const noticias = ref([
  { id: 1, titulo: 'Nova unidade do Cuore Di Panna abre no shopping MidwayMall', texto: 'a famosa rede de gelatos italianos abre, nesta segunda feira, sua nova unidade no terceiro piso do shopping MidwayMall.' },
  { id: 2, titulo: 'Novo sabor exclusivo de Pistache Artesanal', texto: 'A Cuore di Panna lança uma nova receita de gelato de pistache feito com matéria-prima importada e textura ainda mais cremosa!' },
  { id: 3, titulo: 'Promoção especial de verão', texto: 'A Cuore di Panna comemora o verão com uma promoção especial em todos os sabores!' },
  { id: 4, titulo: 'Parceria com restaurante local', texto: 'A Cuore di Panna anuncia uma parceria com um restaurante local para oferecer combos exclusivos.' }
])

</script>