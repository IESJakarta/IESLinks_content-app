<template>
  <div>
    <div class="topgrid">
      <div>
        <p>
          <a
            target="_blank"
            rel="noopener"
            href="https://iesjakarta.org"
            aria-label="IES Jakarta"
          >
            <img
              src="~assets/graphics/IES-logoOptimized.svg"
              alt="IES Jakarta (IESJakarta)"
            />
          </a>
        </p>
        <h1 id="ptitle">IES Jakarta</h1>
        <h1 id="tagline">
          We are a church committed to serving the English-speaking community in
          Jakarta.
        </h1>
      </div>
    </div>
    <div class="innercolumns">
      <div class="item1">
        <a
          target="_blank"
          rel="noopener"
          href="https://iesjak.art/a/iesfbpage"
          aria-label="IES Jakarta facebook"
        >
          <ExternalLogosFacebooklogosm />
        </a>
      </div>
      <div class="item2">
        <a
          target="_blank"
          rel="noopener"
          href="https://iesjak.art/a/iesigpage"
          aria-label="IES Jakarta instagram"
        >
          <ExternalLogosInstagramlogosm />
        </a>
      </div>

      <div class="item3">
        <a
          target="_blank"
          rel="noopener"
          href="https://iesjak.art/a/iesyt"
          aria-label="IES Jakarta youtube"
        >
          <ExternalLogosYouTubeLogosm />
        </a>
      </div>
      <div class="item4">
        <a
          target="_blank"
          rel="noopener"
          href="mailto:comm@iesjakarta.org"
          aria-label="IES Jakarta email_address"
        >
          <ExternalLogosEmailLogosm />
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>



<!-- this is not in use 
<script>
export default {
    name: 'IESLinks',
    data () {
        return {
            links: []
        }
},
async fetch() {
    this.links = await fetch(
        `https://api.steinhq.com/v1/storages/6166a6bb8d29ba2379f93001/IES_Links_Page`).then(res => res.json())
  },
}
</script> -->
