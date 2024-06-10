<script setup lang="ts">
import type { Note } from '~/types';

defineProps<{
    note: Note
}>()

const deleteMode = useState('deleteMode')
</script>

<template>
    <div class="flex w-full flex-row items-center justify-between rounded bg-white p-4 drop-shadow-md md:w-1/2">
        <div>
            <p class="text-2xl font-bold text-black">{{ note.title }}</p>
            <p class="text-gray-600">{{ note.content }}</p>
        </div>
        <div v-if="deleteMode">
            <button class="cursor-pointer" @click="useNotes().remove(note)">
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M19 4.5H15.5L14.5 3.5H9.5L8.5 4.5H5V6.5H19M6 19.5C6 20.0304 6.21071 20.5391 6.58579 20.9142C6.96086 21.2893 7.46957 21.5 8 21.5H16C16.5304 21.5 17.0391 21.2893 17.4142 20.9142C17.7893 20.5391 18 20.0304 18 19.5V7.5H6V19.5Z"
                        fill="red" />
                </svg>
            </button>
        </div>
    </div>
</template>