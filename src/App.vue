<template>
  <div class="app">
    <!-- store : counter -->
    <h2>App compter : {{ $store.state.counter }}</h2>
    <!-- home -->
    <hr>
    <home-page></home-page>
  </div>
</template>

<script setup>
  import HomePage from './view/HomePage.vue'
</script>

<style scoped>

</style>
