<!-- components/MyComponent.vue -->
<template>
  <div class=topgrid style="text-align: left">
    <div v-if="data">
      metricsIPTotalskv.vue component getting data from /api/metricsKVIPTotals

      IP weekend date >>>>->

      {{ data.IPTotals }}

    </div>
    <div>
      <p v-if="pending">Loading...</p>
      <p v-if="error">Error: {{ error.message }}</p>
    </div>
  </div>
</template>

<style scoped>
li {
  line-height: .9em;
  margin-bottom: 20px;
}
</style>

<script setup lang="ts">
import { useFetch } from '#app'; // Nuxt composable for data fetching
const { data, pending, error } = await useFetch('/api/metricsKVIPTotals'); //
</script>