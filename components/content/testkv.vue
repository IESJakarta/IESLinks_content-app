<template>
  <div v-if="error">
    <p>Error: {{ error.message }}</p>
  </div>
  <div v-else-if="data">
    <h1>{{ data.title }}</h1>
    <p>{{ data.body }}</p>
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

const { data, error } = await useFetch(`/api/content/${props.key}`, {server: false});
</script>