    // Example in a server route or API endpoint
    export default defineEventHandler(async (event) => {
      const value = await event.context.env.metricskv.get("ThisWeek");
      return { data: value };
    });