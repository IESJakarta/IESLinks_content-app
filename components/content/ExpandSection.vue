<template>
    <div>
        <div @click="show = !show">
            <!-- this should be the acordion thingy I think -->

            {{ link.Box_Text }}

            <div v-if="!show" style="font-size:75%">
                Click to expand.
            </div>
        </div>


        <div v-if="show">
            <div v-for="item in secLists" :key="item.Box_Text">

                <div v-if="item.Section == link.Box_Text" class="afill">
                    <a :href="item.Link + '?'" class="boxtext" target="_blank" rel="noopener">
                        <div class="afill">
                            {{ item.Box_Text }}
                        </div>
                    </a>

                </div>
            </div>
        </div>
    </div>
</template>
<script setup>

const show = ref(false)

</script>