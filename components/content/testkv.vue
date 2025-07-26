    <script setup>
    const { data } = await useFetch('/api/metricsKV')
    </script>

    <template>
      <div>
        <p>Data from KV: {{ data }}</p>
        <p>Using a for in pattern</p>
            <ul>
            <li v-for="(x, key) in data" style="line-height: 2em; margin-left: 1.3em; margin-bottom: 1.5em;">{{ key }}
                <table style=" margin: 0px auto;">

                </table>
            </li>
            </ul>
      </div>
    </template>