    <script setup>
    const { data } = await useFetch('/api/metricsKV')
    </script>

    <template>
      <div>
        <p>Data from KV: {{ data.count }}</p>
        <p>Using a for in pattern</p>
            <ul>
      <li v-for="(x, key) in count.servicedata" style="line-height: 2em; margin-left: 1.3em; margin-bottom: 1.5em;">{{ key }}
        <table style=" margin: 0px auto;">
          <tr v-for="(y, loc) in x" style="text-align: right; line-height: 1.2em;">
            <td> {{ loc }}: </td>
            <td style="text-align: right; padding-left: 1em;"> {{ y }}</td>
          </tr>
        </table>
      </li>
    </ul>
      </div>
    </template>