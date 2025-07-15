// server/api/ipdata.ts
export default cachedEventHandler(async (event) => {
  const externalDataUrl = 'https://raw.githubusercontent.com/IESJakarta/IESLinks_content-app/refs/heads/main/public/data/IPdata.json';

  try {
    const response = await $fetch(githubRawUrl); // Use $fetch to make the request
    return response; // Return the raw JSON data directly
  } catch (error) {
    console.error('Error fetching GitHub raw JSON:', error);
    // Handle errors appropriately, e.g., throw a custom error
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch GitHub raw JSON',
    });
  }
});