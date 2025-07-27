<!-- components/MyComponent.vue -->

<template>
  <div>
    ThisWeek
    <h1 v-if="data">{{ data.data }}</h1>
    <p v-if="pending">Loading...</p>
    <p v-if="error">Error: {{ error.message }}</p>

    <div class=topgrid style="text-align: left">
      <p></p>
      <span style="text-align: center">
        <h3 style="margin-bottom: .2em;">IES Service Attendance</h3>
        <h3 style="margin-bottom: 0;">data --\-\->> {{ data.data }} <<---</h3>


      </span>
      <p></p>
      <p></p>

    </div>

    <style scoped>
      li {
        line-height: .9em;
        margin-bottom: 20px;
      }
    </style>
  </div>
</template>

<script setup lang="ts">
import { useFetch } from '#app'; // Nuxt composable for data fetching

const { data, pending, error } = await useFetch('/api/metricsKV'); //


</script>