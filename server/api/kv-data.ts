// server/api/kv-data.ts
export default defineEventHandler(async (event) => {
  try {
    // Access your KV binding through event.context.cloudflare.env
    // Replace 'MY_KV_BINDING' with the name you gave your KV binding in the Cloudflare dashboard.
    const myKVBinding = event.context.cloudflare.env.metricskv; 

    // Retrieve data from KV
    const data = await myKVBinding.get("ThisWeek"); // Replace "your-key" with the key you want to retrieve
 
    if (!data) {
      throw new Error('Data not found in KV');
    }

    return { data };
  } catch (error) {
    console.error("Error fetching data from KV:", error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to retrieve data from KV',
    });
  }
});