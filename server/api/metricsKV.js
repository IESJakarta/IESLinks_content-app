export async function onRequest(context) {
  const task = await context.env.metricskv.get("ThisWeek");
  return new Response(task);
}