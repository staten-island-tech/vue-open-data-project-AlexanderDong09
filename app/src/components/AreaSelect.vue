<template>
  <div>
    <Select
      v-model="selectedArea"
      :options="childrenwithlead"
      filter
      :optionLabel="childrenwithlead.geo_area_name"
      placeholder="Select a Country"
    >
      <template #value="slotProps">
        <div v-if="slotProps.value" class="flex items-center">
          <div>{{ slotProps.value.name }}</div>
        </div>
        <span v-else>
          {{ slotProps.placeholder }}
        </span>
      </template>
      <template #option="slotProps">
        <div class="flex items-center">
          <div>{{ slotProps.option.name }}</div>
        </div>
      </template></Select
    >
  </div>
</template>

<script setup>
import { ref } from 'vue'
import LeadData from '@/components/LeadData.vue'
import { childrenwithlead } from '@/views/HomeView.vue'

const selectedArea = ref()
</script>

<style scoped></style>
