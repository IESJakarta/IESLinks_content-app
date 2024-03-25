<!--
This example fetches latest Vue.js commits data from GitHub’s API and displays them as a list.
You can switch between the two branches.
-->

<script setup>
const url = `https://script.google.com/macros/s/AKfycbz8WvdHNd80Y34RREvaP-7eFnwO09_boKgnMHodDDSmQs8DNrkl9HLgzFNI-tUaRnojXQ/exec`
const { data: count } = await useFetch(url)
const weekenddate = count.value["Weekend Date"]
delete count.value["Weekend Date"]
const k = Object.keys(count.value)
console.log("This is k: " + k)

let kidscount = 0
for (var i in k) {
  kidscount += Number([count.value[k[i]]["Kids"]])
}

let adultscount = 0
for (var i in k) {
  adultscount += Number([count.value[k[i]]["Adults"]])
}

let teenscount = 0
for (var i in k) {
  teenscount += Number([count.value[k[i]]["Teens"]])
}

let totalAttendance = (adultscount + teenscount + kidscount)

</script>

<template>
  <div class=topgrid style="text-align: left">
    <p></p>
    <span style="text-align: center">
      <h3 style="margin-bottom: .2em;">IES Service Attendance</h3>
      <h3 style="margin-bottom: 0;">Weekend of {{ weekenddate }}</h3>
    </span>
    <p></p>
    <p></p>
    <ul>
      <li v-for="(x, key) in count" style="line-height: 2em; margin-left: 1.3em; margin-bottom: 1.5em;">{{ key }}
        <table style=" margin: 0px auto;">
        <tr v-for="(y, loc) in x" style="text-align: right; line-height: 1.2em;">
          <td> {{ loc }}: </td>
          <td style="text-align: right; padding-left: 1em;"> {{ y }}</td>
        </tr>
      </table>
      </li>
    </ul>

    <div>
      <span style="text-align: center">
        <h3 style="margin-bottom: .2em;">IES Total Headcounts by Ministry</h3>
        <h3  style="margin-bottom: 0;">Weekend of {{ weekenddate }}</h3>
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