<!--
This example fetches latest Vue.js commits data from GitHub’s API and displays them as a list.
You can switch between the two branches.
-->

<script setup>
const url = `https://script.google.com/macros/s/AKfycbyPaSNci1MpONbNBwpsvGhXB9ImofH5lbPxWRXvIO7DijdzVBH_j7uMhd0wxRQBoSPoaQ/exec?SpServdata`
var { data: count } = await useFetch(url)
var sEvents = Object.keys(count.value)

let kidscount = accumulator("Kids") || 0
let adults = accumulator("Adult") || 0
let teens = accumulator("Teens") || 0
let totalAttendance = (kidscount + adults + teens)
let totals = {}
totals.Kids = kidscount
totals.Adults = adults
totals.Teens = teens
totals["Total Attendance"] = totalAttendance

function accumulator(min) {
  let accumulated = 0
  for (var i in sEvents) {
    let sData = Object.keys(count.value[sEvents[i]]["SServiceData"])
    for (var x in sData) {
      accumulated += count.value[sEvents[i]]["SServiceData"][sData[x]][min]
    }
  }
  return (accumulated)
}

</script>

<template>
  <div v-show="sEvents.length > 0">
    <p></p>
    <hr>

    <div class=topgrid style="text-align: center">

      <p></p>
      <p></p>
      <p></p>
      <p></p>

      <h2>Recent Special Services</h2>
      <div v-for="(value, key) in count">

        <span style="text-align: center">
          <h3 style="margin-bottom: .2em;">{{ value.SServiceEvent }}</h3>
          <h3 style="margin-bottom: 0;">{{ value.SServiceDate }}</h3>
        </span>
        <br>
        <ul v-for="(value, key, index) in value.SServiceData"
          style="line-height: 2em; margin-left: 1.3em; margin-bottom: 1.5em;">
          <li>Service {{ index + 1 }} @ {{ value.time }}
            <table style=" margin: 0px auto;">
              <tr v-show="value.Kids" style="text-align: right; line-height: 1.2em;">
                <td>Kids</td>
                <td>{{ value.Kids }}</td>
              </tr>
              <tr v-show="value.Teens" style="text-align: right; line-height: 1.2em;">
                <td>Teens</td>
                <td>{{ value.Teens }}</td>
              </tr>
              <tr v-show="value.Adult" style="text-align: right; line-height: 1.2em;">
                <td>Adults</td>
                <td>{{ value.Adult }}</td>
              </tr>
            </table>
          </li>
        </ul>
      </div>
      <div>
        <h3 style="margin-bottom: .2em;">Total Attendance for </h3>
        <table style=" margin: 0px auto;">
          <tr v-for="(value, key, index) in totals" v-show="value > 0" style="text-align: right; line-height: 1.2em;">
            <td>{{ key }}</td>
            <td style="text-align: right; padding-left: 1em;"> {{ value }}</td>
          </tr>
        </table>
      </div>
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