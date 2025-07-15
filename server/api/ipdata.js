// server/api/ipdata.js
export default defineEventHandler(async (event) => {
  const data = await $fetch('https://raw.githubusercontent.com/IESJakarta/IESLinks_content-app/refs/heads/main/public/data/IPdata.json');
  return data;
});