<template>
  <div v-if="filteredData.length" class="overflow-x-auto">
    <table class="min-w-full bg-white border border-gray-300">
      <thead>
        <tr class="bg-gray-100">
          <th class="border px-4 py-2">Area</th>
          <th class="border px-4 py-2">Time Period</th>
          <th class="border px-4 py-2">≥ 5 µg/dL</th>
          <th class="border px-4 py-2">≥ 10 µg/dL</th>
          <th class="border px-4 py-2">≥ 15 µg/dL</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in filteredData" :key="item.geo_area_name + item.time_period">
          <td class="border px-4 py-2">{{ item.geo_area_name }}</td>
          <td class="border px-4 py-2">{{ item.time_period }}</td>
          <td class="border px-4 py-2">{{ item.children_under_6_years_with }}</td>
          <td class="border px-4 py-2">{{ item.children_under_6_years_with_2 }}</td>
          <td class="border px-4 py-2">{{ item.children_under_6_years_with_4 }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <p v-else class="text-center text-gray-500">No data available for selected filters.</p>
</template>

<script setup>
import { defineProps } from 'vue'
defineProps({ filteredData: Array })
</script>
