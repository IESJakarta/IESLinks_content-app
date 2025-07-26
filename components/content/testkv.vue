<!-- components/MyComponent.vue -->

<template>
  <div>
    new data
    <h1 v-if="data">{{ data.data }}</h1>
    <p v-if="pending">Loading...</p>
    <p v-if="error">Error: {{ error.message }}</p>
  </div>
</template>

<script setup lang="ts">
import { useFetch } from '#app'; // Nuxt composable for data fetching

const { data, pending, error } = await useFetch('/api/metricsKV'); //

</script>