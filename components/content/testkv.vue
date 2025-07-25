    <script setup>
    const { data } = await useFetch('/api/metricsKV')
    </script>

    <template>
      <div>
        <p>Data from KV: {{ data.ThisWeek.IPdata[Weekend Data] }}</p>
        <p>Service data???: {{ data.ThisWeek.IPdata.servicedata }}
      </div>
    </template>