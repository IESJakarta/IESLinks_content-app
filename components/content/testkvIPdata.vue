<!-- components/MyComponent.vue -->

<template>
  <div>
    ThisWeek
 
    IP weekend date >>>>->
    <h1 v-if="data">{{ data.IPdata['Weekend Date'] }}</h1>
    <p v-if="pending">Loading...</p>
    <p v-if="error">Error: {{ error.message }}</p>

    

    <div class=topgrid style="text-align: left">
      <p></p>
      <span style="text-align: center">
        <h3 style="margin-bottom: .2em;">IES Service Attendance</h3>
        <h3 style="margin-bottom: 0;">data {{ data.IPdata.servicedata }}</h3>


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

const { data, pending, error } = await useFetch('/api/metricsKVIPdata'); //


</script>