<template>
  <h1 class="text-3xl font-bold underline center">
    Children 6 or under with greater than 5 micrograms of lead per decaliter (0.1L) But as a donut
    chart wow
  </h1>
  <h4 class="flex justify-center">↓ you probably want to use this ↓</h4>

  <div class="flex flex-wrap justify-center">
    <PieAreaSelect :item="uniqueAreaNames" v-model="pieselectedArea" />
    <ResetButton @click="reset" />
  </div>

  <!-- Chart now takes filtered data -->
  <DoughnutChart :childrenwithlead="filteredItems" />
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { pieselectedArea } from '@/components/selectedbutforpie'
import PieAreaSelect from '@/components/PieAreaSelect.vue'
import DoughnutChart from '@/components/DoughnutChart.vue'
import ResetButton from '@/components/ResetButton.vue'

const uniqueAreaNames = ref([])
const childrenwithlead = ref([])

async function getData() {
  try {
    const response = await fetch('https://data.cityofnewyork.us/resource/tnry-kwh5.json')
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`)

    const data = await response.json()
    childrenwithlead.value = data

    const areaNames = new Set(data.map((el) => el.geo_area_name))
    uniqueAreaNames.value = Array.from(areaNames)
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

onMounted(() => {
  getData()
})

const filteredItems = computed(() => {
  if (!pieselectedArea.value || pieselectedArea.value === 'all') {
    return childrenwithlead.value
  }
  return childrenwithlead.value
    .filter((item) => item.geo_area_name === pieselectedArea.value)
    .sort((a, b) => a.time_period - b.time_period)
})

function reset() {
  pieselectedArea.value = 'all'
}
</script>

<style scoped>
h1 {
  text-align: center;
  padding: 1.5rem;
  text-decoration: underline;
}
</style>
