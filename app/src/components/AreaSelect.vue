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
const props = defineProps({
  item: Array,
})
const selectedArea = ref()
</script>

<style scoped></style>
