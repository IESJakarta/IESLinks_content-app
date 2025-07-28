<!-- components/MyComponent.vue -->

<template>
  <div>
    This Weekend Date ->>>>
    <h1 v-if="data">{{ data.ThisWeek.IPdata['Weekend Date'] }}</h1>
    <p v-if="pending">Loading...</p>
    <p v-if="error">Error: {{ error.message }}</p>

    <div>
      <br><br>
      <p>Just the data</p>
      <p>{{ data }}</p>
    </div>

    <div>
      <br><br>
      <p>this Week - data.ThisWeek</p>
      <p>{{ data.ThisWeek }}</p>
    </div>

    <div>
      <br><br>
      <p>IPdata - data.ThisWeek.IPdata</p>
      <p>{{ data.ThisWeek.IPdata }}</p>
    </div>


    <div class=topgrid style="text-align: left">
      <p></p>
      <span style="text-align: center">
        <h3 style="margin-bottom: .2em;">IES servicedata - data.ThisWeek.IPdata.servicedata </h3>
        <h3 style="margin-bottom: 0;">data --VV--</h3><p>{{ data.ThisWeek.IPdata.servicedata }}</p><h3 style="margin-bottom: 0;"> ^^^ </h3>


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