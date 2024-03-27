# IES Tools @ iesjak.art 
This site is for quick easy output of things we need or needed or would find useful here at IES. This is served from Cloudfare pages.

The backend data comes from individual Google sheets in our Workspace account. The sheets data is output as JSON using apps script web apps.

## Quick Links
Our quicklinks page is an alternative to using a linktree page in order to keep our branding a little more obvious in the URL. The backend data is managed in our "iesjak.art a links data" spreadsheet.  Originally we used steinhq.com to quickly process the spreadsheet data to produce the JSON but now we use a google apps script web app to produce the JSON.

## Links Shortener
Similarl tou our Quick Links page, the backend data for our links shortener is managed in our "iesjak.art a links data" spreadsheet. That data is pushed to cloudflare KV and a cloudflare worker is used to forward shortened links to the final url destination. The worker is not currently in one of our repositories.

All of the shortened links start with iesjak.art/a/ and whatever follows is what has been set up in the spreadsheet. When the link is created in the spreadsheet, a link from the menu triggers posting of the data to the KV and rebuilding of the page via webhook.

## IES Admin Page
It would be nice if this was locked down behind a log in, but it's not so ***nothing should be added here that requires security.***

This is a page to link to resources for our staff.  Vouchers are served that can be filled and printed as PDFs.  Weekly metrics page is also served here for easy access and reporting.


# The Technology
This is a NUXT 3 page with primarily static content, though the metrics page may be refreshed with live data.

Below is the content of the original Read Me from the NUXT3 Content site install.  I've left it hear in case someone else needs to figure out what to do with this or incase I forget.


# Content v2 Minimal Starter

Look at the [Content documentation](https://content.nuxt.com/) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
# The ReadMe for IES Links Page
