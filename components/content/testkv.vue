    <script setup>
    import { useAsyncData } from '#app';

    const { data: kvData } = await useAsyncData('myKvData', async () => {
      // Access the KV binding through the global 'env' object
      // 'MY_KV_NAMESPACE' should match the binding name configured in Cloudflare Pages
      const value = await env.metricskv.get('my_key');
      return value;
    });
    </script>

    <template>
      <div>
        <p>Data from KV: {{ kvData }}</p>
      </div>
    </template>