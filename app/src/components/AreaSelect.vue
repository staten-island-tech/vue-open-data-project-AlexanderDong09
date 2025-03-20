<template>
  <div class="card flex justify-center">
    <Select
      v-model="selectedArea"
      :options="item"
      filter
      placeholder="Select an area within NY"
      class="w-full md:w-56 p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
    </Select>
  </div>
</template>

<script setup>
import { selectedArea } from './selected'
import { Select } from 'primevue'
const props = defineProps({
  item: Array,
})
</script>

<style scoped>
/* Custom styles for dropdown background */
.p-dropdown-panel {
  background-color: #f0f0f0; /* Light gray background */
  border-radius: 0.375rem; /* Matching rounded corners */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Soft shadow */
}

/* Custom styles for the dropdown options */
.p-dropdown-item {
  padding: 0.75rem; /* Add padding for the options */
}

.p-dropdown-item:hover {
  background-color: #e2e8f0; /* Slightly darker gray when hovering */
}
</style>
