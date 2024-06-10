<script setup lang="ts">
const isOpen = defineModel<boolean>()
</script>

<template>
    <div
v-show="isOpen"
        class="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-black/30">
        <div class="w-screen rounded bg-white p-4 md:w-1/3">
            <slot />
        </div>
    </div>
</template>