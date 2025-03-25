<template>
  <Doughnut v-if="filteredData.length" id="lead-chart" :options="chartOptions" :data="chartData" />
  <p v-else class="text-center text-gray-500">No data available for selected filters.</p>
</template>

<script setup>
import { computed } from 'vue'
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement)

const props = defineProps({ filteredData: Array })

const chartData = computed(() => ({
  labels: props.filteredData.map((item) => `${item.geo_area_name} - ${item.time_period}`),
  datasets: [
    {
      label: '5 µg/dL or greater',
      data: props.filteredData.map((item) => item.children_under_6_years_with),
      backgroundColor: 'rgba(255, 99, 132, 0.6)',
    },
    {
      label: '10 µg/dL or greater',
      data: props.filteredData.map((item) => item.children_under_6_years_with_2),
      backgroundColor: 'rgba(54, 162, 235, 0.6)',
    },
    {
      label: '15 µg/dL or greater',
      data: props.filteredData.map((item) => item.children_under_6_years_with_4),
      backgroundColor: 'rgba(255, 206, 86, 0.6)',
    },
  ],
}))

const chartOptions = {
  responsive: true,
}
</script>
