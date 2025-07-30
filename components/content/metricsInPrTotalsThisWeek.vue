<!-- components/MyComponent.vue -->
<template>
  <div class="topgrid" style="text-align: left">
    <!-- Show a loading message while data is being fetched -->
    <p v-if="pending">Loading...</p>

    <!-- Show an error message if the fetch fails -->
    <p v-else-if="error">Error: {{ error.message }}</p>

    <!-- Display the data once it has been successfully fetched -->
    <div v-else-if="data && data.IPdata">
      <div style="text-align: center; margin-bottom: 2rem;">
        <h3 style="margin-bottom: .2em;">IES Service Attendance</h3>
        <h3 style="margin-bottom: 0;">Weekend of {{ data.IPdata['Weekend Date'] }}</h3>
      </div>

      <!-- Service-by-service breakdown -->
      <ul style="list-style-type: none; padding: 0;">
        <li v-for="(serviceDetails, serviceName) in data.IPdata.servicedata"
            style="line-height: 2em; margin-bottom: 1.5em; border: 1px solid #eee; border-radius: 8px; padding: 1em;">
          <strong>{{ serviceName }}</strong>
          <table style="margin: 0.5em 0 0 1em; width: auto;">
            <tbody>
              <tr v-for="(count, category) in serviceDetails" style="text-align: left; line-height: 1.4em;">
                <td style="padding-right: 1em;">{{ category }}:</td>
                <td style="text-align: right; font-weight: 500;">{{ count }}</td>
              </tr>
            </tbody>
          </table>
        </li>
      </ul>

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
  </div>
</template>

<style scoped>
/* Scoped styles for this component */
li {
  line-height: .9em;
  margin-bottom: 20px;
}
.topgrid {
    max-width: 600px;
    margin: 2rem auto;
    padding: 1rem;
    font-family: sans-serif;
}
</style>

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
