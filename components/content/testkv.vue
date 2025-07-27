<!-- components/MyComponent.vue -->

<template>
  <div>
    ThisWeek
    <h1 v-if="data.ThisWeek">{{ data.THisWeek }}</h1>
    <p v-if="TWpending">Loading...</p>
    <p v-if="TWerror">Error: {{ TWerror.message }}</p>

    IP
    <h1 v-if="data.IPdata">{{ data.IPdata }}</h1>
    <p v-if="IPpending">Loading...</p>
    <p v-if="IPerror">Error: {{ IPerror.message }}</p>


  <div class=topgrid style="text-align: left">
    <p></p>
    <span style="text-align: center">
      <h3 style="margin-bottom: .2em;">IES Service Attendance</h3>
      <h3 style="margin-bottom: 0;">data {{ data }}</h3>
 <!--      <h3 style="margin-bottom: 0;">data.ThisWeek {{ data.ThisWeek }}</h3>
     <h3 style="margin-bottom: 0;">thisWeekData here >> {{ thisWeekData.IPdata }}</h3>
-->

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

const { data: ThisWeek, data: TWpendingtw, data: TWerrort } = await useFetch('/api/metricsKV'); //
const { data: IPdata, data: IPpending, data: IPerror } = await useFetch('/api/metricsKVIPdata'); //

// const thisWeekData = JSON.parse(ThisWeek)
</script>