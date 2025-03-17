<template>
  <div class="card">
    <div class="card-header">
      <h3>{{ item.geo_area_name }}</h3>
    </div>
    <div class="card-body">
      <p>In the year</p>
      <h3>{{ item.time_period }}</h3>
      <p>Had</p>
      <h3>{{ item.children_under_6_years_with }} Kids</h3>
      <h5>kids with elevated levels of LEAD in their BLOOD!</h5>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  item: Object,
})
</script>

<style scoped>
.card {
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 20px auto;
  padding: 16px;
  overflow: hidden;
  text-align: center;
}

.card-header {
  background-color: #4caf50;
  color: white;
  padding: 12px;
  border-radius: 8px;
  text-align: center;
  margin: auto;
}

.card-body {
  padding: 12px;
}

.card-body h3 {
  color: #333;
  font-size: 1.5em;
}

.card-body h5 {
  color: #e74c3c;
  font-size: 1.1em;
}

.card-body p {
  font-size: 1.2em;
  color: #666;
  margin: 8px 0;
}
</style>
