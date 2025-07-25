export default defineEventHandler(async (event) => {
  const { key } = event.context.params;

  // Access the KV binding declared in Cloudflare Pages settings
  const content = await event.context.cloudflare.env.metricskv.get(key);

  if (!content) {
    throw createError({ statusCode: 404, statusMessage: 'Content not found' });
  }

  return content;
});