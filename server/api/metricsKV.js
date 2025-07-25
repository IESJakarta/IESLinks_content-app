export default defineEventHandler(({ context }) => {
  const MY_KV = await context.env.metricskv;

  return MY_KV;
});