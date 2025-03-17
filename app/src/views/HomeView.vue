<script setup>
import { ref, onMounted } from 'vue'
import LeadData from '@/components/LeadData.vue'

const childrenwithlead = ref('')
async function getData() {
  try {
    const response = await fetch('https://data.cityofnewyork.us/resource/tnry-kwh5.json')
    if (response.status != 200) {
      throw new Error(response)
    } else {
      let data = await response.json()
      childrenwithlead.value = data
    }
  } catch (error) {
    console.log(error)
    console.log('sorry coudlnt fid that')
  }
}

onMounted(() => {
  getData()
})
</script>

<template>
  <h1 class="text-3xl font-bold underline center">
    Children 6 or under with greater than 5 micrograms of lead per decaliter (0.1L)
  </h1>
  <div class="flex flex-wrap gap-4 p-5">
    <LeadData class="container" v-for="item in childrenwithlead" :item="item" />
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
  padding: 1.5rem;
  text-decoration: underline;
}
</style>
