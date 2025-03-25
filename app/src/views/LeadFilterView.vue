<template>
  <div>
    <h1 class="text-3xl font-bold text-center my-5">Lead Exposure Data by Area and Time Period</h1>

    <!-- Filter Controls -->
    <LeadFilterControls
      :areas="uniqueAreaNames"
      :timePeriods="uniqueTimePeriods"
      v-model:selected-area="selectedArea"
      v-model:selected-time="selectedTime"
    />

    <!-- Chart and Table -->
    <div class="flex flex-wrap justify-center gap-8 mt-5">
      <LeadExposureChart :filteredData="filteredItems" />
      <LeadExposureTable :filteredData="filteredItems" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import LeadFilterControls from '@/components/LeadFilterControls.vue'
import LeadExposureChart from '@/components/LeadExposureChart.vue'
import LeadExposureTable from '@/components/LeadExposureTable.vue'

const selectedArea = ref(null)
const selectedTime = ref(null)
const childrenWithLead = ref([])

// Fetch Data
async function getData() {
  try {
    const response = await fetch('https://data.cityofnewyork.us/resource/tnry-kwh5.json')
    if (!response.ok) throw new Error('Failed to fetch data')

    const data = await response.json()
    childrenWithLead.value = data
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

onMounted(getData)

// Extract unique area names & time periods
const uniqueAreaNames = computed(() => [
  ...new Set(childrenWithLead.value.map((item) => item.geo_area_name)),
])

const uniqueTimePeriods = computed(() =>
  [...new Set(childrenWithLead.value.map((item) => item.time_period))].sort((a, b) => a - b),
)

// Filter Data
const filteredItems = computed(() =>
  childrenWithLead.value.filter(
    (item) =>
      (!selectedArea.value || item.geo_area_name === selectedArea.value) &&
      (!selectedTime.value || item.time_period === selectedTime.value),
  ),
)
</script>
