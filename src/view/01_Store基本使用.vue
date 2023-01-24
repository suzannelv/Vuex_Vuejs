<template>
  <div class="app">
    <h2>
      home compter:{{$store.state.counter }}
    </h2>

    <h2>
      home computed compter:{{storeCounter}}
    </h2>
    <h2>
      home setup compter:{{counter}}
    </h2>
    <button @click="increment">+1</button>
  </div>
</template>

<script>

export default {
  computed: {
    storeCounter() {
      return this.$store.state.counter
    }
  }
}
</script>

<script setup>
// setup
import { toRefs } from "vue";

// composition APi
import { useStore } from 'vuex';

const store = useStore()


// setup 
const {counter}=toRefs(store.state)

function increment() {
  // store.state.counter++
  store.commit("increment")
}

</script>

<style scoped>
</style>