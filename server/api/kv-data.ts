// server/api/kv-data.ts

export default defineEventHandler(async (event) => {
  try {
    // Access the KV namespace through the binding name you defined
    const myValue = await event.context.cloudflare.env.metricskv.get("ThisWeek"); 
    return { data: myValue };
  } catch (error) {
    console.error("Error accessing KV:", error);
    return { error: "Failed to retrieve data from KV" };
  }
});