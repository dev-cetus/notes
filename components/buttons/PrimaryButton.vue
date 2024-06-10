<script setup lang="ts">
defineProps<{
    disabled?: boolean
    variant?: 'blue' | 'red' | 'gray'
    active?: boolean
}>()

const variants = {
    blue: 'bg-azure-radiance-600 hover:bg-azure-radiance-700 hover:ring-azure-radiance-500',
    red: 'bg-rose-600 hover:bg-rose-700 hover:ring-rose-500',
    gray: 'bg-gray-600 hover:bg-gray-700 hover:ring-gray-500'
}
</script>

<template>
    <button class="rounded cursor-pointer text-white px-4 py-2 hover:ring-2 hover:ring-offset-2"
        :class="variants[variant ?? 'blue']" :disabled="disabled ?? false">
        <slot />
    </button>
</template>