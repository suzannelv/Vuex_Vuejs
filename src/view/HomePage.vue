<template>
  <div class="app">
    <button @click="changelevel">modifier level</button>
   <!-- 1. 在模板中直接使用多个状态 -->
   <h2>doubleCounter: {{ $store.getters.doubleCounter }}</h2>
   <h2>userTotalAge: {{ $store.getters.totalAge }}</h2>
 
  </div>
   
</template>


<!-- options API -->
<script>
export default {

}
</script>


<!-- setup API -->
<script setup>

</script>

<style scoped>
</style>