// server/api/ipdata.ts
import { cachedEventHandler } from '#nitro';

export default cachedEventHandler(async (event) => {
  const externalDataUrl = 'https://raw.githubusercontent.com/IESJakarta/IESLinks_content-app/refs/heads/main/public/data/IPdata.json';

  try {
    const data = await $fetch(externalDataUrl);
    return data;
  } catch (error) {
    console.error('Error fetching external data:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Error fetching external data'
    });
  }
}, {
  maxAge: 60 * 5, // Cache for 5 minutes (adjust as needed)
  name: 'ipdata' // Unique key for your cached data
});