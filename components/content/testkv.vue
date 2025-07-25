    <script setup>
    const { data } = await useFetch('/api/metricsKV')
    const outstring = JSON.parse(data.data)
    </script>

    <template>
      <div>
        <p>outstring.ThisWeek: {{ outstring }} </p>
        <p>Data from KV: {{ data }}</p>
        <p>Using a for in pattern</p>
            <ul>
            <li v-for="(x, key) in data." style="line-height: 2em; margin-left: 1.3em; margin-bottom: 1.5em;">{{ key }}
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