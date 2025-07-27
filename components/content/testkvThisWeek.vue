<!-- components/MyComponent.vue -->

<template>
  <div>
    This Weekend Date ->>>>
    <h1 v-if="data">{{ data.ThisWeek.IPdata['Weekend Date'] }}</h1>
    <p v-if="pending">Loading...</p>
    <p v-if="error">Error: {{ error.message }}</p>

    <div>
      Just the data
      {{ data }}
    </div>

    <div>
      this Week
      {{ data.ThisWeek }}
    </div>

    <div>
      IPdata
      {{ data.ThisWeek.IPdata }}
    </div>


    <div class=topgrid style="text-align: left">
      <p></p>
      <span style="text-align: center">
        <h3 style="margin-bottom: .2em;">IES servicedata ->>> </h3>
        <h3 style="margin-bottom: 0;">data --\-\->> {{ data.ThisWeek.IPdata.servicedata }} <<---< </h3>


      </span>
      <p></p>
      <p></p>

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

const { data, pending, error } = await useFetch('/api/metricsKV'); //


</script>