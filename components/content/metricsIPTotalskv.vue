<!-- components/MyComponent.vue -->

<template>
  <div>
    <div class=topgrid style="text-align: left">

      <h1 v-if="data">{{ data }}</h1>
      <p v-if="pending">Loading...</p>
      <p v-if="error">Error: {{ error.message }}</p>
            show something
      {{ data.IPTotals }}
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

const { data, pending, error } = await useFetch('/api/metricsKVIPdata'); //


</script>