<template>
  <div class="card flex justify-center">
    <Select
      v-model="selectedArea"
      :options="item"
      filter
      placeholder="Select an area within NY"
      class="w-full md:w-56"
    >
    </Select>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Select } from 'primevue'
// import LeadData from '@/components/LeadData.vue'
const props = defineProps({
  item: Object,
})
// areaNames = item.geo_area_name
const selectedArea = ref()
</script>

<style scoped></style>
