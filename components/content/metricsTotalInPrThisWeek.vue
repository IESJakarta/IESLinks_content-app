<!--
This example fetches latest Vue.js commits data from GitHub’s API and displays them as a list.
You can switch between the two branches.
-->

<script setup>
const url = `https://script.google.com/macros/s/AKfycbyPaSNci1MpONbNBwpsvGhXB9ImofH5lbPxWRXvIO7DijdzVBH_j7uMhd0wxRQBoSPoaQ/exec?IPdata`
var { data: count } = await useFetch(url)
var k = Object.keys(count.value.servicedata)

let kidscount = 0
for (var i in k) {
  kidscount += Number([count.value.servicedata[k[i]]["Kids"]])
}

let adultscount = 0
for (var i in k) {
  adultscount += Number([count.value.servicedata[k[i]]["Adults"]])
}

let teenscount = 0
for (var i in k) {
  teenscount += Number([count.value.servicedata[k[i]]["Teens"]])
}

let totalAttendance = (adultscount + teenscount + kidscount)

</script>

<template>
  <div class=topgrid style="text-align: left">
    <p></p>
    <div>
      <span style="text-align: center">
        <h3 style="margin-bottom: .2em;">IES In Person Headcounts <br>Totals by Ministry</h3>
        <h3  style="margin-bottom: 0;">Weekend of {{ count["Weekend Date"] }}</h3>
      </span>
      <p></p>
    <p></p>      
      <table style="margin: 0px auto; border-spacing: 0; border-collapse: collapse;">
        <tr style="text-align: right; line-height: 1.2em;" v-if="kidscount">
          <td>Total Kids:</td>
          <td style="text-align: right; padding-left: 1em;"> {{ kidscount }} </td>
        </tr>
        <tr style="text-align: right; line-height: 1.2em;" v-if="teenscount">
          <td>Total Teens:</td>
          <td style="text-align: right; padding-left: 1em;"> {{ teenscount }} </td>
        </tr>
        <tr style="text-align: right; line-height: 1.2em;" v-if="adultscount">
          <td>Total Adults:</td>
          <td style="text-align: right; padding-left: 1em;"> {{ adultscount }} </td>
        </tr>
        <tr style="text-align: right; line-height: 1.2em; " v-if="adultscount">
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