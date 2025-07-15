/**
 * @file server/api/ipdata.js
 * @description This server route acts as a proxy to fetch data from an external JSON file,
 * avoiding client-side CORS issues.
 */

// defineEventHandler is a helper from Nuxt's server engine, Nitro.
// It creates an API endpoint that can be accessed at `/api/ipdata`.
export default defineEventHandler(async (event) => {
  // The external URL from which to fetch the data.
  const externalApiUrl = 'https://raw.githubusercontent.com/IESJakarta/IESLinks_content-app/refs/heads/dev-localjson/public/data/IPdata.json';

  try {
    // Use the built-in `$fetch` utility to make a request to the external URL.
    // This request is made from the server, not the browser.
    const data = await $fetch(externalApiUrl);

    // The fetched data is returned as the response for the `/api/ipdata` endpoint.
    return data;
  } catch (error) {
    // If an error occurs during the fetch (e.g., network issue, 404),
    // we log it and return a structured error response.
    console.error('Error fetching data from external API:', error);

    // Set the HTTP status code for the response to indicate a server error.
    event.node.res.statusCode = 500;

    // Return a JSON object with error details.
    return {
      error: 'Failed to fetch data from the source.',
      details: error.message,
    };
  }
});
