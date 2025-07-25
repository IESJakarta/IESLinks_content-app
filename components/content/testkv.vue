<template>
  <div v-if="data">
    <h1>{{ data.ThisWeek }}</h1>
    <p>{{ data.ThisWeek.IPdata }}</p>
  </div>
  <div v-else>
    Loading content...
  </div>
</template>

<script setup>
import { useFetch } from '#app';

const props = defineProps({
  key: {
    type: String,
    required: true
  }
});

const { data } = await useFetch(`/api/content/${props.key}`);
</script>