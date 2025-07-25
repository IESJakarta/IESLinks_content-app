import { defineEventHandler } from 'h3';

interface Env {
  MY_KV_NAMESPACE: metricskv; // Declare your KV namespace binding here
}

export default defineEventHandler(async (event) => {
  const { MY_KV_NAMESPACE } = event.context.cloudflare.env as Env;
  const myValue = await MY_KV_NAMESPACE.get('my_key');
  return { data: myValue };
});