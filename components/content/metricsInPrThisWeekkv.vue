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
      <!-- Totals Summary Section -->
      <div class="totals-summary" style="text-align: center; margin-top: 2em;">
        <h3 style="margin-bottom: 1em;">Total Attendance Summary</h3>
        <table style="margin: 0 auto; text-align: right; min-width: 200px;">
          <tbody>
            <tr v-for="(value, key) in totals" style="line-height: 1.8em;">
              <td style="text-align: left;">{{ key }}:</td>
              <td style="text-align: right; padding-left: 2em; font-weight: bold;">{{ value }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>
    <div>
      <h1>{{ totals }}</h1>

    </div>
    <p v-if="pending">Loading...</p>
    <p v-if="error">Error: {{ error.message }}</p>
  </div>
</template>

<style scoped>
li {
  line-height: .9em;
  margin-bottom: 20px;
}

<script setup>
import { computed } from 'vue';
import { useFetch } from '#app'; // Nuxt composable for data fetching

// Fetch the data from the API endpoint
const { data, pending, error } = await useFetch('/api/metricsKVIPdata');

// A computed property to calculate totals from the fetched data.
// This will automatically re-calculate whenever 'data' changes.
const totals = computed(() => {
  // Return a default object if data is not yet loaded or is in an unexpected format.
  // This prevents errors in the template during the loading phase.
  if (!data.value || !data.value.IPdata || !data.value.IPdata.servicedata) {
    return {
      Adults: 0,
      Teens: 0,
      Kids: 0,
      'Total Attendance': 0
    };
  }

  // Use Object.values to get an array of service objects, then use reduce
  // to sum up the values into a single totals object.
  const calculatedTotals = Object.values(data.value.IPdata.servicedata).reduce((acc, service) => {
    // For each service, add its count to the accumulator (acc).
    // Coerce values to a Number and default to 0 if a value is missing.
    acc.Adults += Number(service.Adults) || 0;
    acc.Teens += Number(service.Teens) || 0;
    acc.Kids += Number(service.Kids) || 0;
    return acc;
  }, { Adults: 0, Teens: 0, Kids: 0 }); // Initial values for the accumulator

  // Calculate the final grand total
  calculatedTotals['Total Attendance'] = calculatedTotals.Adults + calculatedTotals.Teens + calculatedTotals.Kids;

  // Return the final calculated object
  return calculatedTotals;
});
</script>