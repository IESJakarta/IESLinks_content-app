// server/api/ipdata.ts
export default defineEventHandler(async (event) => {
  const externalData = await $fetch('https://raw.githubusercontent.com/IESJakarta/IESLinks_content-app/refs/heads/main/public/data/IPdata.json');
  return externalData;
});
