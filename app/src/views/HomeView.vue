<script setup>
import { ref, onMounted, computed, onBeforeUnmount } from 'vue'
import LeadData from '@/components/LeadData.vue'
import AreaSelect from '@/components/AreaSelect.vue'
import ResetButton from '@/components/ResetButton.vue'
import { selectedArea } from '@/components/selected'

const uniqueAreaNames = ref([])
const childrenwithlead = ref('')

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

const filteredItems = computed(() => {
  let filtered = childrenwithlead.value
  if (selectedArea.value === 'all' || !selectedArea.value) {
    return childrenwithlead.value
  } else {
    filtered = filtered.filter((item) => item.geo_area_name === selectedArea.value)
  }

  return filtered.sort((a, b) => a.time_period - b.time_period) // wow would you look at that it sorts it in ascending year order wow
})

function reset() {
  // wow that works pretty well actually
  selectedArea.value = 'all'
  return childrenwithlead.value
}

onBeforeUnmount(() => {
  selectedArea.value = 'all' //  code breaks without this when you select something in this view, go to a new view, then go back. dont know why the hell that happens, it doesn't when youre in the donutview, but this is a quick albeit lazy fix. no saved selected area for your cards :(
})
</script>

<template>
  <h1 class="text-3xl font-bold underline center">
    Children 6 or under with greater than 5 micrograms of lead per decaliter (0.1L)
  </h1>
  <div class="flex flex-wrap justify-center">
    <AreaSelect :item="uniqueAreaNames" v-model="selectedArea" />
    <ResetButton @click="reset" />
  </div>

  <div class="flex flex-wrap gap-4 p-5">
    <LeadData class="container" v-for="item in filteredItems" :item="item" :key="item" />
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
  padding: 1.5rem;
  text-decoration: underline;
}
</style>
