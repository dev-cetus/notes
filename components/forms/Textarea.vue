<script setup lang="ts">
defineProps<{
    placeholder?: string
}>()

const model = defineModel()
</script>

<template>
    <textarea v-model="model" :placeholder="placeholder"
        class="w-full text-lg border-2 border-slate-200 bg-transparent p-2 focus:ring-2 rounded focus:ring-blue-500 outline-none"></textarea>
</template>