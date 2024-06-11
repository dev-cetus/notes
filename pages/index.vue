<script setup lang="ts">
import type { Note } from '~/types';
import { useStorage } from '@vueuse/core';

const isOpen = ref(false)
const state = reactive({
    title: undefined,
    content: undefined
})
const isSpeechRecognitionWork = ref(true)
const notes = useStorage<Note[]>('notes', [])

let recognition: Window["SpeechRecognition"] | null = null

function useAddNote() {
    if (typeof state.title === 'string' && typeof state.content === 'string') {
        notes.value.push({
            id: Date.now(),
            title: state.title,
            content: state.content
        })
        useCloseModal()
    }
}

function useCloseModal() {
    isOpen.value = false
    state.title = undefined
    state.content = undefined
}

function useRemoveNote(note: Note) {
    notes.value = notes.value.filter(n => n.id !== note.id)
}

function speak() {
    if (recognition != null) recognition.start()
}

onMounted(() => {
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
        recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

        recognition.lang = 'fr-FR';
        recognition.continuous = false;

        // eslint-disable @typescript-eslint/no-explicit-any
        recognition.onresult = (event: any) => {
            const transcript = event.results[0][0].transcript;
            state.content = transcript;
        };
    } else {
        isSpeechRecognitionWork.value = false
        alert("L'API SpeechRecognition n'est pas prise en charge par ce navigateur.");
    }
})
</script>

<template>
    <div>
        <NoteModal v-model="isOpen">
            <form class="space-y-2">
                <Input v-model="state.title" placeholder="Title" />
                <Textarea v-model="state.content" placeholder="Content" />
            </form>
            <div class="flex w-full flex-row items-center justify-between">
                <PrimaryButton variant="red" @click="useCloseModal()">
                    Cancel
                </PrimaryButton>
                <PrimaryButton
class="rounded-full" variant='gray' :disabled="!isSpeechRecognitionWork"
                    @click="speak()">
                    <div class="size-8">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path
fill="currentColor"
                                d="M12 14q-1.25 0-2.125-.875T9 11V5q0-1.25.875-2.125T12 2t2.125.875T15 5v6q0 1.25-.875 2.125T12 14m-1 7v-3.075q-2.6-.35-4.3-2.325T5 11h2q0 2.075 1.463 3.538T12 16t3.538-1.463T17 11h2q0 2.625-1.7 4.6T13 17.925V21z" />
                        </svg>
                    </div>
                </PrimaryButton>
                <PrimaryButton @click="useAddNote()">
                    Save
                </PrimaryButton>
            </div>
        </NoteModal>
        <PlusButton @click="() => { isOpen = !isOpen }" />
        <ClientOnly>
            <div class="flex flex-col items-center gap-2 px-1 py-2">
            {{ notes }}
                <NoteItem v-for="note in notes" :key="note.id" :note="note" @remove="useRemoveNote(note)" />
            </div>
        </ClientOnly>
    </div>
</template>