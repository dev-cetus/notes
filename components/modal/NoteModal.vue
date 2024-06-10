<script setup lang="ts">
const isOpen = defineModel()
</script>

<template>
    <div v-show="isOpen"
        class="z-50 fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black/30">
        <div class="bg-white rounded p-4 w-screen md:w-1/3">
            <slot />
        </div>
    </div>
</template>