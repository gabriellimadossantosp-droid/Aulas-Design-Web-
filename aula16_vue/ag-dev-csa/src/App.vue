<script setup lang="ts">
import SectionHeader from './components/SectionHeader.vue';

</script>

<template>
  <SectionHeader />
  <main>
    <!-- a marcaão de router view ficará aqui porque o conteúdo dos arquivos view deve estar exatamente dentro do main -->
    <RouterView />
  </main>  
</template>


