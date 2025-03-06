<script setup>
import { ref, onMounted } from 'vue'
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
  <main>
    <div v-for="item in childrenwithlead">
      <h2>
        {{ item.geo_area_name }} in the year {{ item.time_period }} had
        {{ item.children_under_6_years_with }} kids with LEAD in their BLOOD!
      </h2>
    </div>
  </main>
</template>
