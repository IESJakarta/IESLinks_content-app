// server/api/kv-data.get.ts

export default defineEventHandler(async (event) => {
  const myKV = event.context.cloudflare.env.metricskv; // Replace MY_KV_NAMESPACE with your variable name

  // Fetch a key from KV
  const key = getQuery(event).key as string; // Get the key from the query parameters
  const value = await myKV.get(key); 

  return { data: value };
});