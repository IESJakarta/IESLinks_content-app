<!-- components/MyComponent.vue -->

<template>
  <div>
    <h1 v-if="data">{{ data }}</h1>
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
const ipdata = data.ThisWeek.IPdata;
const oldata = data.ThisWeek.OLdata;
const spservdata = data.ThisWeek.SpServdata;
const iptotals = data.ThisWeek.IPTotals;
</script>