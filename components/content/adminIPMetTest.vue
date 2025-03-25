
<script setup>
const url = `https://script.google.com/macros/s/AKfycbwO_yu99EqVewc0O4wCgKRKZkpa9YIdOqFrK1ZkbiYPWZwj_4BbYs9G-rZ4H8mS9vmDXA/exec?tab=IP_Headcounts`
var { data: hcount } = await useFetch(url)
</script>

<template>
  <div class=topgrid style="text-align: left">
    <p></p>
    <span style="text-align: center">
      <h3 style="margin-bottom: .2em;">IES Service Attendance</h3>
      <h3 style="margin-bottom: 0;">Weekend of </h3>
    </span>
    <p></p>
    <p></p>

            {{ hcount }}

  </div>
</template>

<style scoped>
li {
  line-height: .9em;
  margin-bottom: 20px;
}
</style>