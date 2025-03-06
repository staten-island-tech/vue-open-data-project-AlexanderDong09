<template>
  <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>

<script>
import { defineComponent, reactive } from 'vue'
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default defineComponent({
  // aint this  options api
  name: 'BarChart',
  components: { Bar },
  setup() {
    // Use `reactive` for state management in Composition API
    const chartData = reactive({
      labels: ['January', 'February', 'March'],
      datasets: [{ data: [40, 20, 12] }],
    })

    const chartOptions = reactive({
      responsive: true,
    })

    // Return the reactive properties to the template
    return {
      chartData,
      chartOptions,
    }
  },
})
</script>
