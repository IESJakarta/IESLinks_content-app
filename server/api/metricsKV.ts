    // Example in a server route or API endpoint
    export default defineEventHandler(async (event) => {
      const value = await metricskv.get("ThisWeek");
      return { data: value };
    });