import { defineEventHandler } from 'h3';

interface Env {
  MY_KV_NAMESPACE: metricskv;
};

export default defineEventHandler(async (event) => {
  const { MY_KV_NAMESPACE } = event.context.cloudflare.env as Env;
  const myValue = await MY_KV_NAMESPACE.get('ThisWeek');
  return { data: myValue };
});