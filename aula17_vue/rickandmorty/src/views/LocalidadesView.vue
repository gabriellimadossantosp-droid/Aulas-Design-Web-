<script setup>
import CardPadrao from '@/components/CardPadrao.vue';
import { ref, onMounted } from 'vue';

const localidades = ref([]); //variável reativa

//async - porque essa função gera uma conexão externa e o valor demora
async function buscarLocalidades() {
    try{
    //aqait - porque a conexão demora, logo é necessário esperar
    const resposta = await fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados");
    const dados = await resposta.json();
    localidades.value = dados;
    }catch(erro){
        console.error('Erro a conexão com API.')
    }
}
//método que chama a função quando a aplicação for "montada"
onMounted(buscarLocalidades);

</script>

<template>
    <h2>Localidades</h2>
    <section>
        <CardPadrao v-for="item in localidades"
            :key="item.id"
            :titulo="item.nome"
            :subtitulo="item.sigla"
        />
    </section>
</template>
<style scoped>
    section{
        display: flex;
        flex-wrap: wrap;
    }
</style>