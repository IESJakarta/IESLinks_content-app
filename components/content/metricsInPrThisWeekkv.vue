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
    <p v-if="pending">Loading...</p>
    <p v-if="error">Error: {{ error.message }}</p>
    <div>
      <table style=" margin: 0px auto;">
        <tr v-for="(t, key) in totals" style="text-align: right; line-height: 1.2em;">
          <td> Total {{ key }}: </td>
          <td style="text-align: right; padding-left: 1em;"> {{ t }}</td>
        </tr>
      </table>
    </div>
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
const { data, pending, error } = await useFetch('/api/metricsKVIPdata'); //
const totals = {},

var k = Object.keys(data.IPdata.servicedata)

let kidscount = 0
for (var i in k) {
  kidscount += Number([data.IPdata.servicedata[k[i]]["Kids"]])
}
totals.Kids = kidscount;

let adultscount = 0
for (var i in k) {
  adultscount += Number([data.IPdata.servicedata[k[i]]["Adults"]])
}
totals.Adults = adultscount;

let teenscount = 0
for (var i in k) {
  teenscount += Number([data.IPdata.servicedata[k[i]]["Teens"]])
};
totals.Teens = teenscount

let totalAttendance = (adultscount + teenscount + kidscount)

totals["Total Attendance"] = totalAttendance

</script>