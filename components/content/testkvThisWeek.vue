<!-- components/MyComponent.vue -->

<template>
  <div>
    testkvThisWeek ->>>>

    <div class=topgrid style="text-align: left">
      <p></p>
      <span style="text-align: center">
        <h3 style="margin-bottom: .2em;">IES Service Attendance</h3>
        <h3 v-if="data" style="margin-bottom: 0;">Weekend of {{ weekendDate }}</h3>
      </span>
      <p></p>
      <p></p>
      <ul>
        <li v-for="(x, key) in servicedata"
          style="line-height: 2em; margin-left: 1.3em; margin-bottom: 1.5em;">{{ key }}
          <table style=" margin: 0px auto;">
            <tr v-for="(y, loc) in x" style="text-align: right; line-height: 1.2em;">
              <td> {{ loc }}: </td>
              <td style="text-align: right; padding-left: 1em;"> {{ y }}</td>
            </tr>
          </table>
        </li>
      </ul>
    </div>
    <<<<- testkvThisWeek
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
const weekendDate = data.ThisWeek.IPdata['Weekend Date'];
const servicedata = data.ThisWeek.IPdata.servicedata;


</script>