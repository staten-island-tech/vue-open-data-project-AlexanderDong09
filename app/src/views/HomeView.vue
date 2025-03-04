<script setup>
import { ref, onMounted } from 'vue'
const childrenwithlead = ref('')
async function getData() {
  let result = await fetch('https://data.cityofnewyork.us/resource/tnry-kwh5.json')
  let data = await result.json()
  childrenwithlead.value = data
}

console.log(childrenwithlead)

onMounted(() => {
  getData()
})
</script>

<template>
  <main>
    <div></div>
  </main>
</template>
