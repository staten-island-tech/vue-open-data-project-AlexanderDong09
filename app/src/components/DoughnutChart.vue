<template>
  <Doughnut id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>

<script setup>
import { computed } from 'vue'
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, CategoryScale, ArcElement } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, CategoryScale, ArcElement)

const props = defineProps({
  childrenwithlead: Array,
})

const chartData = computed(() => ({
  labels: props.childrenwithlead.map((item) => `${item.geo_area_name} - ${item.time_period}`),
  datasets: [
    {
      data: props.childrenwithlead.map((item) => item.children_under_6_years_with),
      backgroundColor: [
        'rgb(255, 99, 20)',
        'rgb(54, 40, 100)',
        'rgb(255, 205, 86)',
        'rgb(46, 205, 86)',
        'rgb(76, 205, 255)',
      ],
      datalabels: {
        formatter: (value) => `${value} kids with lead`,
        color: '#fff',
        font: {
          weight: 'bold',
        },
      },
    },
  ],
}))

const chartOptions = {
  responsive: true,
  plugins: {
    tooltip: {
      callbacks: {
        label: (tooltipItem) => {
          let value = tooltipItem.raw
          return `${value} kids with lead`
        },
      },
    },
  },
}
</script>
