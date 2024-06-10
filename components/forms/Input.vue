<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{
    placeholder?: string;
}>();

const model = defineModel<string>();
</script>

<template>
    <input
        v-model="model"
        :placeholder="placeholder"
        class="w-full rounded border-2 border-slate-200 bg-transparent p-2 text-lg outline-none focus:ring-2 focus:ring-blue-500"
    >
</template>
