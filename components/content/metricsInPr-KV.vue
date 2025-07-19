<!--
This example fetches latest Vue.js commits data from GitHub’s API and displays them as a list.
You can switch between the two branches.
-->

<template>
  <div>
    <p>Value from KV: {{ kvData }}</p>
    <button @click="fetchData">Fetch KV Data</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const kvData = ref<string | null>(null);

async function fetchData() {
  const { data } = await useFetch('/api/kv-data', { 
    query: { key: 'ThisWeek' } // Pass the key as a query parameter
  }); 
  kvData.value = data.value?.data; // Extract the data from the response
}

fetchData(); // Fetch the data on component mount

</script>