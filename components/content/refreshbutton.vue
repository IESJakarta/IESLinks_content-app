<script setup lang="ts">
const refreshing = ref(false)
const refreshAll = async () => {
    refreshing.value = true
    try {
        await refreshNuxtData()
    } finally {
        refreshing.value = false
    }
}
</script>

<template>
    <div class="topgrid">
        <span class="topgrid_c">
            <button :disabled="refreshing" @click="refreshAll" style="padding: .4em;">
                Refresh Data
            </button>
        </span>
    </div>
</template>
