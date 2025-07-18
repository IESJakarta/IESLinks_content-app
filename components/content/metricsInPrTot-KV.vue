<!--
This example fetches latest Vue.js commits data from GitHub’s API and displays them as a list.
You can switch between the two branches.
-->

<script setup>
<script setup lang="ts">
const { data: kvData, pending, error } = await useFetch('/api/my-kv-data');
</script>
var k = Object.keys(kvData.IPdata.value.servicedata)

let kidskvData.IPdata = 0
for (var i in k) {
  kidskvData.IPdata += Number([kvData.IPdata.value.servicedata[k[i]]["Kids"]])
}

let adultskvData.IPdata = 0
for (var i in k) {
  adultskvData.IPdata += Number([kvData.IPdata.value.servicedata[k[i]]["Adults"]])
}

let teenskvData.IPdata = 0
for (var i in k) {
  teenskvData.IPdata += Number([kvData.IPdata.value.servicedata[k[i]]["Teens"]])
}

let totalAttendance = (adultskvData.IPdata + teenskvData.IPdata + kidskvData.IPdata)

</script>

<template>
  <div class=topgrid style="text-align: left">
    <p></p>
    <div>
      <span style="text-align: center">
        <h3 style="margin-bottom: .2em;">IES In Person HeadkvData.IPdatas <br>Totals by Ministry</h3>
        <h3  style="margin-bottom: 0;">Weekend of {{ kvData.IPdata["Weekend Date"] }}</h3>
      </span>
      <p></p>
    <p></p>      
      <table style="margin: 0px auto; border-spacing: 0; border-collapse: collapse;">
        <tr style="text-align: right; line-height: 1.2em;" v-if="kidskvData.IPdata">
          <td>Total Kids:</td>
          <td style="text-align: right; padding-left: 1em;"> {{ kidskvData.IPdata }} </td>
        </tr>
        <tr style="text-align: right; line-height: 1.2em;" v-if="teenskvData.IPdata">
          <td>Total Teens:</td>
          <td style="text-align: right; padding-left: 1em;"> {{ teenskvData.IPdata }} </td>
        </tr>
        <tr style="text-align: right; line-height: 1.2em;" v-if="adultskvData.IPdata">
          <td>Total Adults:</td>
          <td style="text-align: right; padding-left: 1em;"> {{ adultskvData.IPdata }} </td>
        </tr>
        <tr style="text-align: right; line-height: 1.2em; " v-if="adultskvData.IPdata">
          <td style="text-align: right; line-height: 1.2em; border-top: 3px double White;">Total Attendance<br>All Weekend:</td>
          <td style="text-align: right; padding-left: 1em; border-top: 3px double white;"> {{ totalAttendance }}</td>
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