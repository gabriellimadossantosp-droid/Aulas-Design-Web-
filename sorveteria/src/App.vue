<template>
  <div id="app">
    <HeaderSection />
    <router-view />
  </div>
</template>

<script>
import HeaderSection from './components/HeaderSection.vue';


export default {
  name: 'App',
  components: {
    HeaderSection
  }
}
</script>