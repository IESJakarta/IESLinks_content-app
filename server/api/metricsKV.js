export default defineEventHandler(({ context }) => {
  const MY_KV = context.cloudflare.env.metricskv;

  return {
    // ...
  };
});