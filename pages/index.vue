<script setup lang="ts">
import type { Note } from '~/types';

const isOpen = ref(false)
const state = reactive({
    title: undefined,
    content: undefined
})
const isSpeechRecognitionWork = ref(true)
const notes = useNotes().getAll()

watchEffect(() => {
    console.log(notes)
})

// @ts-ignore
let recognition = null

function useAddNote() {
    if (typeof state.title === 'string' && typeof state.content === 'string') {
        let newNote: Note = {
            title: state.title,
            content: state.content
        }
        useNotes().add(newNote)
        useCloseModal()
    }
}

function useCloseModal() {
    isOpen.value = false
    state.title = undefined
    state.content = undefined
}

function speak() {
    // @ts-ignore 
    recognition.start()
}

onMounted(() => {
    // Vérifiez si l'API est prise en charge par le navigateur
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
        // Créez une instance de SpeechRecognition
        recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

        recognition.lang = 'fr-FR';
        recognition.continuous = false;

        recognition.onresult = (event) => {
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
                <Input placeholder="Title" v-model="state.title" />
                <Textarea placeholder="Content" v-model="state.content" />
            </form>
            <div class="w-full flex items-center flex-row justify-between">
                <PrimaryButton @click="useCloseModal()" variant="red">
                    Cancel
                </PrimaryButton>
                <PrimaryButton @click="speak()" class="rounded-full" variant='gray'
                    :disabled="!isSpeechRecognitionWork">
                    <div class="size-8">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="currentColor"
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
            <div class="flex px-1 flex-col gap-2 py-2 items-center">
                <NoteItem v-for="note in notes" :key="note.title" :note="note" />
            </div>
        </ClientOnly>
    </div>
</template>