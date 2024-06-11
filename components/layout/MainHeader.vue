<script setup lang="ts">
const clicked = useState('deleteMode', () => false)
</script>

<template>
    <div class="flex flex-row items-center justify-between bg-azure-radiance-600 px-4 py-8 font-bold text-white">
        <NuxtLink to="/" class="text-3xl">NOTES</NuxtLink>
        <div class="flex flex-row items-center">
            <NuxtLink to="/debug" class="p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
                    <path
fill="currentColor"
                        d="M11 17h2v-6h-2zm1-8q.425 0 .713-.288T13 8t-.288-.712T12 7t-.712.288T11 8t.288.713T12 9m0 13q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22" />
                </svg>
            </NuxtLink>
            <button class="cursor-pointer rounded-md p-2 hover:bg-black/10" @click="clicked = !clicked">
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M19 4.5H15.5L14.5 3.5H9.5L8.5 4.5H5V6.5H19M6 19.5C6 20.0304 6.21071 20.5391 6.58579 20.9142C6.96086 21.2893 7.46957 21.5 8 21.5H16C16.5304 21.5 17.0391 21.2893 17.4142 20.9142C17.7893 20.5391 18 20.0304 18 19.5V7.5H6V19.5Z"
                        fill="white" />
                </svg>
            </button>
        </div>
    </div>
</template>