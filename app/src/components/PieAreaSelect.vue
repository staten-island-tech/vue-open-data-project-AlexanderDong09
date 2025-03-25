<template>
  <div class="card flex justify-center p-5">
    <Select
      v-model="pieselectedArea"
      :options="item"
      filter
      placeholder="Select an area within NY"
      class="w-full md:w-96 p-3 m-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
    </Select>
  </div>
</template>

<script setup>
import { pieselectedArea } from './selectedbutforpie'
import { Select } from 'primevue'
const props = defineProps({
  item: Array,
})
</script>

<style scoped></style>
