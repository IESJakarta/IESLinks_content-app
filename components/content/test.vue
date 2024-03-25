<!--
This example fetches latest Vue.js commits data from GitHub’s API and displays them as a list.
You can switch between the two branches.
-->

<script setup>
const url = `https://script.google.com/macros/s/AKfycbyp1oDAPZT5-g58g2CZfMHjo4DmuAgssE-kIBoR8JrokXkvYrNEftaaR0p8ZwmziUGTgQ/exec?IPdata`
var { data: count } = await useFetch(url)
var k = Object.keys(count.value.servicedata)
console.log("This is k: " + k)


let kidscount = count.servicedata["Ser. 3 - Sun. 11:15 AM"]["Kids"]

</script>

<template>
  <div class=topgrid style="text-align: left">
    <p></p>
    {{ kidscount }}
    

    
    
  </div>
</template>

<style scoped>
li {
  line-height: .9em;
  margin-bottom: 20px;
}
</style>