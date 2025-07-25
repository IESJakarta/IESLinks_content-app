    <script setup>
    const { data } = await useFetch('/api/metricsKV')
    </script>

    <template>
      <div>
        <p>Data from KV: {{ data }}</p>
      </div>
    </template>