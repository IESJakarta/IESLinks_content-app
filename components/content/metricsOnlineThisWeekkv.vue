<!--
This example fetches latest Vue.js commits data from GitHub’s API and displays them as a list.
You can switch between the two branches.
-->
<template>
  <div class=topgrid style="text-align: left">
    <h1 v-if="data">{{ data.OLdata['Weekend Date'] }}</h1>
    <p v-if="pending">Loading...</p>
    <p v-if="error">Error: {{ error.message }}</p>
    <p>data</p>
    <p>{{ data }}</p>

    <p>data.OLdata</p>
    <p>{{ data.OLdata }}</p>


    <p>{{ kidscount }}</p>
    <p>{{ adultscount }}</p>
    <p>{{ teenscount }}</p>
    <p>{{ totalAttendance }}</p>


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

const { data, pending, error } = await useFetch('/api/metricsKVOLdata'); //
/** 
var k = Object.keys(data.OLdata.value.servicedata)

let kidscount = 0
for (var i in k) {
  kidscount += Number([data.OLdata.value.servicedata[k[i]]["Kids"]])
}

let adultscount = 0
for (var i in k) {
  adultscount += Number([data.OLdata.value.servicedata[k[i]]["Adults"]])
}

let teenscount = 0
for (var i in k) {
  teenscount += Number([data.OLdata.value.servicedata[k[i]]["Teens"]])
}

let totalAttendance = (adultscount + teenscount + kidscount)
*/

</script>