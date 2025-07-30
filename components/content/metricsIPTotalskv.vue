<!-- components/MyComponent.vue -->

<template>
  <div>
    <div class=topgrid style="text-align: left">

      <h1 v-if="data">{{ data.IPTotals }}</h1>
      <h1 v-else>No Data apparently</h1>
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


