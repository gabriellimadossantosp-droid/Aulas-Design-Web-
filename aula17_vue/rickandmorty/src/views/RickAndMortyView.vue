<script setup>
import CardPadrao from '@/components/CardPadrao.vue';
import { ref, onMounted } from 'vue';

const personagens = ref([]); //variável reativa

//async - porque essa função gera uma conexão externa e o valor demora
async function buscarPersonagens() {
    try{
    //aqait - porque a conexão demora, logo é necessário esperar
    const resposta = await fetch("https://rickandmortyapi.com/api/character");
    const dados = await resposta.json();
    personagens.value = dados.results;
    }catch(erro){
        console.error('Erro a conexão com API.')
    }
}
//método que chama a função quando a aplicação for "montada"
onMounted(buscarPersonagens);

</script>

<template>
    <h2>rickandmortyapi</h2>
    <section>
        <CardPadrao v-for="item in personagens"
            :key="item.id"
            :titulo="item.name"
            :subtitulo="item.species"
            :imagem="item.image"
            :url="item.location.url"
        />
    </section>
</template>
<style scoped>
    section{
        display: flex;
        flex-wrap: wrap;
    }
</style>