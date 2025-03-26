<template>
  <div class="chart-container">
    <Bar id="bar-chart" :options="chartOptions" :data="chartData" />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from 'chart.js'

// Register Chart.js components
ChartJS.register(Title, Tooltip, Legend, CategoryScale, LinearScale, BarElement)

const props = defineProps({
  filteredData: Array, // The filtered lead data passed from LeadFilterView.vue
})

const chartData = computed(() => ({
  labels: props.filteredData.map((item) => `${item.geo_area_name} (${item.time_period})`),
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
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
      title: { display: true, text: 'Number of Cases' },
    },
    x: {
      title: { display: true, text: 'Location & Year' },
    },
  },
}
</script>

<style scoped>
.chart-container {
  width: 80%;
  height: 400px;
}
</style>
