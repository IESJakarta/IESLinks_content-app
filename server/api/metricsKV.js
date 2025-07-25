export default defineEventHandler(({ context }) => {
  const MY_KV = context.cloudflare.env.metricskv;

  return {
message: 'Received data', data: MY_KV   };
});