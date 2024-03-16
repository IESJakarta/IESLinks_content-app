<template>
  <div class="grid-container">

    <div v-for="link in showlinks" :key="link.Box_Text">
      <!-- In production this will be showlinks not links -->

      <div v-if="link.Section === null && link.SectionHead === 'FALSE'">
        <a :href="link.Link + '?' + current()" class="boxtext" target="_blank" rel="noopener">
          <div class="afill">
            {{ link.Box_Text }}
          </div>
        </a>
      </div>
      <div v-else-if="link.Section == null && link.SectionHead == 'TRUE'">


        <div @click="link.ID = !link.ID">

          <div v-if="link.ID" class="afill">
            {{ link.Box_Text }}
            <div style="font-size:75%">
              Click to expand.
            </div>
          </div>

          <div v-else style="padding-top:18px; padding-bottom:6px">
            {{ link.Box_Text }}
            <div style="font-size:75%">
              Click to compress.
            </div>
          </div>
        </div>


        <div v-if="!link.ID">
          <div v-for="item in secLists" :key="item.Box_Text">

            <div v-if="item.Section == link.Box_Text" class="expandfill">
            <div>
              <a :href="item.Link + '?' + current()" class="boxtext" target="_blank" rel="noopener">
                <div>
                  {{ item.Box_Text }}
                </div>
              </a>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  </div>
</template>




<script setup>

import { ExpandSection } from '#components'
const { data: links } = await useFetch(
  "https://api.steinhq.com/v1/storages/6166a6bb8d29ba2379f93001/IES_Links_Page"
);

const showlinks = computed(() =>
  links.value.filter((item) => item.Section === null && item.Show == "TRUE")
);

const sectionHead = computed(() =>
  links.value.filter((item) => item.SectionHead == "TRUE")
);

const secHeadTitles = computed(() =>
  sectionHead.value.map((item) => item.Box_Text)
);

const secLists = computed(() =>
  links.value.filter((item) => item.Section != null)
);

function current() {
      const ms = Date.now()
      const cur = ms.toString()
      return cur;
    };

const show = ref(false);


</script>
<style>
@import "~/assets/css/global.css";
</style>