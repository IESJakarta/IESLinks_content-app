<!-- components/MyComponent.vue -->
<template>
  <div class="topgrid" style="font-size: 50%; text-align: center">
    Showing data last updated: {{ data }}
  </div>
</template>

<style scoped>
/* Scoped styles for this component */
li {
  line-height: .9em;
  margin-bottom: 20px;
}
</style>

<script setup>
import { useFetch } from '#app'; // Nuxt composable for data fetching
// Fetch the data from the API endpoint
const { data, pending, error } = await useFetch('/api/metricsKVLastUpdate');

</script>
