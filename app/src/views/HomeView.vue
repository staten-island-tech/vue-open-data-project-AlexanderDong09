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
  <div>
    <LeadData v-for="item in items" :item="item" />
  </div>
</template>
