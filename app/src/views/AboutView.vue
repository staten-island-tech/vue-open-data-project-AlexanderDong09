<template>
  <div class="">
    <DoughnutChart :childrenwithlead="childrenwithlead" />
  </div>
</template>

<script setup>
import DoughnutChart from '@/components/DoughnutChart.vue'
import { ref, onMounted } from 'vue'

const childrenwithlead = ref([])

async function getData() {
  try {
    const response = await fetch('https://data.cityofnewyork.us/resource/tnry-kwh5.json')
    if (response.status != 200) {
      throw new Error(response)
    } else {
      let data = await response.json()
      childrenwithlead.value = data
      // console.log(childrenwithlead)

      const areaNames = childrenwithlead.value.map((el) => el.geo_area_name)
      const areaNamesButUnique = new Set(areaNames)
      uniqueAreaNames.value = Array.from(areaNamesButUnique)
      // RAHGGGGGGGGGGGGGGGGhHHHHHHHHHHHHHHH !!!!!!!!!!!!!!!!!!!!!!!!!
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
