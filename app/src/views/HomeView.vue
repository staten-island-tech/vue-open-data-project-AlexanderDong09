<script setup>
import { ref, onMounted } from 'vue'
import LeadData from '@/components/LeadData.vue'
import AreaSelect from '@/components/AreaSelect.vue'

const childrenwithlead = ref('')
const areaNames = ref([])
const uniqueAreaNames = ref([])

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
      uniqueAreaNames.value = [areaNamesButUnique]
      // RAHGGGGGGGGGGGGGGGGhHHHHHHHHHHHHHHH
    }
  } catch (error) {
    console.log(error)
    console.log('sorry coudlnt fid that')
  }
}

onMounted(() => {
  getData()
})

console.log(uniqueAreaNames)
console.log(childrenwithlead)
</script>

<template>
  <h1 class="text-3xl font-bold underline center">
    Children 6 or under with greater than 5 micrograms of lead per decaliter (0.1L)
  </h1>
  <AreaSelect :item="uniqueAreaNames" />
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
