<script setup lang="ts">
const { $pwa, _appConfig, versions } = useNuxtApp()

console.log(useNuxtApp())
</script>

<template>
    <div class="p-2">
        <h1 class="text-2xl font-bold">App infos</h1>
        <ul>
            <li>
                Nuxt version: {{ versions.nuxt}}
            </li>
            <li>
                Vue version: {{ versions.vue }}
            </li>
            <li>
                Build Id: {{ _appConfig.nuxt.buildId }}
            </li>
            <li>
                Is PWA Installed: {{ $pwa?.isPWAInstalled }}
            </li>
            <li>
                Is offline ready: {{ $pwa?.offlineReady }}
            </li>
        </ul>
    </div>
</template>