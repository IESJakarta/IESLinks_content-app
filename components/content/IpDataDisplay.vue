<template>
  <div class="bg-gray-100 font-sans p-4 sm:p-6 md:p-8 min-h-screen">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl font-bold text-gray-800 mb-2">International Program</h1>
      <p class="text-lg text-gray-600 mb-8">Links and Resources</p>

      <!-- Loading State: Displayed while data is being fetched -->
      <div v-if="pending" class="text-center py-10">
        <svg class="animate-spin h-8 w-8 text-blue-500 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <p class="mt-4 text-gray-500">Fetching data...</p>
      </div>

      <!-- Error State: Displayed if the fetch fails -->
      <div v-else-if="error" class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md shadow-md" role="alert">
        <p class="font-bold">An Error Occurred</p>
        <p>Could not load the program data. Please try refreshing the page.</p>
        <pre class="mt-2 text-xs bg-red-200 p-2 rounded whitespace-pre-wrap">{{ error.message }}</pre>
      </div>

      <!-- Success State: Displayed when data is successfully loaded -->
      <div v-else-if="ipData && ipData.IP" class="space-y-6">
        <div 
          v-for="program in ipData.IP" 
          :key="program.id" 
          class="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
        >
          <div class="p-6">
            <h2 class="text-2xl font-bold text-blue-700 mb-2">{{ program.name }}</h2>
            <p class="text-gray-600 mb-5">{{ program.description }}</p>
            
            <div class="space-y-3">
              <a 
                v-for="link in program.links" 
                :key="link.url" 
                :href="link.url" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg hover:bg-blue-100 transition-colors duration-200 group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-500 group-hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                <span class="text-blue-800 font-medium group-hover:underline">{{ link.name }}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// `useFetch` is a Nuxt composable for fetching data within components.
// It calls our own server route, `/api/ipdata`, not the external URL.
const { data: ipData, pending, error } = await useFetch('/api/ipdata', {
  // `lazy: true` prevents blocking navigation while data is fetched on the client-side.
  // The loading state (pending) will be shown until the data arrives.
  lazy: true,
  // `server: true` (the default) ensures data is fetched on the server during the initial load (for SSR).
  server: true,
});
</script>
