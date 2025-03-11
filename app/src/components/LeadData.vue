<template>
  <div>
    <h4>
      {{ item.geo_area_name }} in the year {{ item.time_period }} had
      {{ item.children_under_6_years_with }} kids with elevated levels of LEAD in their BLOOD!
    </h4>
  </div>
</template>

<script setup>
const props = defineProps({
  item: Object,
})
</script>

<style scoped></style>
