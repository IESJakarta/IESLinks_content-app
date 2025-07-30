<!-- components/MyComponent.vue -->

<template>
  <div>
    <h1 v-if="data">{{ data.IPdata['Weekend Date'] }}</h1>
    <p v-if="pending">Loading...</p>
    <p v-if="error">Error: {{ error.message }}</p>

    {{ ipdata }}
    <br>
    {{ oldata }}
    <br>
    {{ spservdata }}
    <br>
    {{ iptotals }}



    
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
const { data, pending, error } = await useFetch('/api/metricsKVdata'); //
const ipdata = JSON.parse(data.ThisWeek.IPdata);
const oldata = JSON.parse(data.ThisWeek.OLdata);
const spservdata = JSON.parse(data.ThisWeek.SpServdata)
const iptotals = JSON.parse(data.ThisWeek.IPTotals)
</script>