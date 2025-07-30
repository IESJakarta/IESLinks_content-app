<!-- components/MyComponent.vue -->

<template>
  <div class=topgrid style="text-align: left">
    <div v-if="data">
      <p></p>
      <span style="text-align: center">
        <h3 style="margin-bottom: .2em;">IES Service Attendance</h3>
        <h3 style="margin-bottom: 0;">Weekend of {{ data.IPdata['Weekend Date'] }}</h3>
      </span>
      <p></p>
      <p></p>
      <ul>
        <li v-for="(x, key) in data.IPdata.servicedata"
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
    <div>
      <table style=" margin: 0px auto;">
        <tr v-for="(t, key) in totals" style="text-align: right; line-height: 1.2em;">
          <td> Total {{ key }}: </td>
          <td style="text-align: right; padding-left: 1em;"> {{ t }}</td>
        </tr>
      </table>
    </div>
    <p v-if="pending">Loading...</p>
    <p v-if="error">Error: {{ error.message }}</p>
  </div>
</template>

<style scoped>
li {
  line-height: .9em;
  margin-bottom: 20px;
}
</style>

<script setup>
import { useFetch } from '#app'; // Nuxt composable for data fetching
const { data, pending, error } = await useFetch('/api/metricsKVIPdata');

const totals = computed(() => {

  for (hc in (Object.keys(data.IPdata.servicedata)){
let Kids = 0
for ( i in hc) {
  Kids += Number([data.IPdata.servicedata[hc[i]]["Kids"]])
},
let Adults = 0
for ( i in hc) {
  Adults += Number([data.IPdata.servicedata[hc[i]]["Adults"]])
},

let Teens = 0
for ( i in hc) {
  Teens += Number([data.IPdata.servicedata[hc[i]]["Teens"]])
},
let "Total Attendance" = (adultscount + teenscount + kidscount)
}})

</script>