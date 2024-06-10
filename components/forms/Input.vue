<script setup lang="ts">
defineProps<{
    placeholder?: string
}>()

const model = defineModel()
</script>

<template>
    <input v-model="model" :placeholder="placeholder"
        class="border-slate-200 border-2 w-full text-lg bg-transparent p-2 focus:ring-2 rounded focus:ring-blue-500 outline-none" />
</template>