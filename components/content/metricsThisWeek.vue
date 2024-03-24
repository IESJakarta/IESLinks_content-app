<!--
This example fetches latest Vue.js commits data from GitHub’s API and displays them as a list.
You can switch between the two branches.
-->

<script setup>
const url = `https://script.google.com/macros/s/AKfycbzIT5asduTlEIlHoZPrY5ofFgfW6sJKBaSjX3AyXKa8pjKT06fa9IOhjnsu3jeeARrsOQ/exec`
const { data: count } = await useFetch(url)
const k = Object.keys(count.value)
console.log("This is k: " + k)

let weekenddate = (
  count.value[""]
)
let kidscount = 0
for (var i in k) {
  kidscount += Number([count.value[k[i]]["Kids / Kids Area"]])
}

let adultscount = 0
for (var i in k) {
  adultscount += Number([count.value[k[i]]["Adults / Main Auditorium"]])
}

let teenscount = 0
for (var i in k) {
  teenscount += Number([count.value[k[i]]["Teens / Chapel"]])
}

let totalAttendance = (adultscount + teenscount + kidscount)

</script>

<template>
  <div class=topgrid style="text-align: left">
    <p></p>
    <span style="text-align: center">
      <h2>{{ weekenddate }}</h2>
      <h3>IES Service Attendance This Week</h3>
    </span>
    <p></p>
    <p></p>
    <ul>
      <li v-for="(x, key) in count" style="line-height: 2em; margin-bottom: 2em;">{{ key }}
        <tr v-for="(y, loc) in x" style="text-align: right; line-height: 1.2em; margin-bottom: 0px;">
          <td> {{ loc }}: </td>
          <td style="text-align: right; padding-left: 1em;"> {{ y }}</td>
        </tr>
      </li>
    </ul>

    <div>
      <p>
        <span style="text-align: center">
          <h3>IES Total Headcounts by Ministry</h3>
        </span>
      </p>
      <ul>
      <tr style="text-align: right; line-height: 1.2em; margin-bottom: 0px;" v-if="kidscount">
        <td>Total Kids:</td>
        <td style="text-align: right; padding-left: 1em;"> {{ kidscount }} </td>
      </tr>
      <tr style="text-align: right; line-height: 1.2em; margin-bottom: 0px;" v-if="teenscount">
        <td>Total Teens:</td>
        <td style="text-align: right; padding-left: 1em;"> {{ teenscount }} </td>
      </tr>
      <tr style="text-align: right; line-height: 1.2em; margin-bottom: 0px;" v-if="adultscount">
        <td>Total Adults:</td>
        <td style="text-align: right; padding-left: 1em;"> {{ adultscount }} </td>
      </tr>
      <tr style="text-align: right; line-height: 1.2em; border-top: 6px solid lightgray;" v-if="adultscount">
        <td>All Weekend:<br>Total Attendance</td>
        <td style="text-align: right; padding-left: 1em;"> {{ totalAttendance }}</td>
      </tr>
    </ul>
    </div>
  </div>

</template>

<style scoped>
li {
  line-height: .9em;
  margin-bottom: 20px;
}
</style>