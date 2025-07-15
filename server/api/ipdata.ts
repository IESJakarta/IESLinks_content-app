// server/api/ipdata.ts
import { defineEventHandler } from 'h3';


export default defineEventHandler(async (event) => {
  const externalData = await $fetch('https://api.github.com/repos/IESJakarta/IESLinks_content-app/contents/public/data/IPdata.json?ref=main');
  return externalData;
});
