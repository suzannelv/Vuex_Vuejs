<template>
  <div class="app">
    <button @click="changelevel">modifier level</button>
   <!-- 1. 在模板中直接使用多个状态 -->
   <h2>name: {{ $store.state.name }}</h2>
   <h2>level: {{ $store.state.level }}</h2>
   <h2>avatar: {{ $store.state.avatarUrl}}</h2>

   <!-- 2. 计算属性 (映射状态:数组语法 ) -->
   <!-- <h2>name: {{ name }}</h2>
   <h2>level: {{ level }}</h2> -->

   <!-- 3. 计算属性(映射状态：对象语法) -->
   <!-- <h2>name: {{ sName }}</h2>
   <h2>level: {{ sLevel }}</h2> -->

   <!-- 4. setup中计算属性(映射状态：对象语法) -->
   <h2>name: {{ name }}</h2>
   <h2>level: {{ level }}</h2>
  </div>
</template>


<!-- options API -->
<script>
// import { mapState } from 'vuex';


// export default {
//   computed: {
//     ...mapState(["name", "level", "avatarUrl"]),
//     ...mapState({
//       sName: state => state.name,
//       sLevel: state => state.level
//     })

//   }
// }
</script>


<!-- setup API -->
<script setup>
// import { Computed } from 'vue';
// import { mapState } from 'vuex';
import { useStore } from 'vuex';
import { toRefs } from 'vue';

// const { name, level} = mapState(["name", "level"])

// const store = useStore()
// const cName = computed(name.bind({$store: store}))
// const cLevel = computed(level.bind({$store: store}))


// 直接对store.state进行解构
const store = useStore()
const {name, level} =toRefs(store.state)

function changelevel() {
  store.state.level++
}
</script>

<style scoped>
</style>