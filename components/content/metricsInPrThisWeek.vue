<!--
This example fetches latest Vue.js commits data from GitHub’s API and displays them as a list.
You can switch between the two branches.
-->
<!-- this works
const url = `https://3ffc1e67.ieslinks-content-app.pages.dev/data/IPdata.json`
var { data: count } = await useFetch(url)

const url = `https://iesjak.art/data/IPdata.json`
var { data: count } = await useFetch(url)
-->
<!-- ai script
const { data: count } = await useAsyncData('IPdata', () => {
  return queryContent('data/IPdata').find()


})

const { data: count } = await useFetch('/api/data')  

-->

<script setup>
const { data, pending, error } = await useFetch('/api/ipdata'); // Call your server API route
</script>

<template>
  <div class=topgrid style="text-align: left">
    <p></p>
    <span style="text-align: center">
      <h3 style="margin-bottom: .2em;">IES Service Attendance</h3>
      <h3 style="margin-bottom: 0;">Weekend of {{ data["Weekend Date"] }}</h3>
    </span>
    <p></p>
    <p></p>
    <p v-if="loading">Loading data...</p>
    <ul>
      <li v-for="(x, key) in data.servicedata" style="line-height: 2em; margin-left: 1.3em; margin-bottom: 1.5em;">{{ key }}
        <table style=" margin: 0px auto;">
          <tr v-for="(y, loc) in x" style="text-align: right; line-height: 1.2em;">
            <td> {{ loc }}: </td>
            <td style="text-align: right; padding-left: 1em;"> {{ y }}</td>
          </tr>
        </table>
      </li>
    </ul>
  </div>
</template>

<style scoped>
li {
  line-height: .9em;
  margin-bottom: 20px;
}
</style>