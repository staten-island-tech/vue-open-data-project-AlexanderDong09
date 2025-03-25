<template>
  <div class="flex flex-wrap justify-center gap-4">
    <!-- Area Selection -->
    <Select
      :model-value="selectedArea"
      @update:model-value="updateSelectedArea"
      :options="['All', ...areas]"
      filter
      placeholder="Select an Area"
      class="w-full md:w-80 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
    />

    <!-- Time Period Selection -->
    <Select
      :model-value="selectedTime"
      @update:model-value="updateSelectedTime"
      :options="['All', ...sortedTimePeriods]"
      filter
      placeholder="Select a Time Period"
      class="w-full md:w-80 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
    />

    <button @click="resetFilters" class="bg-red-500 text-white px-4 py-2 rounded">Reset</button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, computed } from 'vue'
import Select from 'primevue/select'

const props = defineProps({
  areas: Array,
  timePeriods: Array,
  selectedArea: String,
  selectedTime: String,
})

const emit = defineEmits(['update:selectedArea', 'update:selectedTime'])

// Sort time periods in ascending order
const sortedTimePeriods = computed(() => props.timePeriods.sort((a, b) => a - b))

const updateSelectedArea = (value) => {
  emit('update:selectedArea', value === 'All' ? null : value)
}

const updateSelectedTime = (value) => {
  emit('update:selectedTime', value === 'All' ? null : value)
}

const resetFilters = () => {
  emit('update:selectedArea', null)
  emit('update:selectedTime', null)
}
</script>
