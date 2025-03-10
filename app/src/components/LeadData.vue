<template>
  <div>
    <div v-for="item in childrenwithlead">
      <h2>
        {{ item.geo_area_name }} in the year {{ item.time_period }} had
        {{ item.children_under_6_years_with }} kids with LEAD in their BLOOD!
      </h2>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  item: Object,
})
</script>

<style scoped></style>
