import type { Note } from "~/types";

export const useNotes = () => {
    const notes = ref<Note[]>([]);

    if (import.meta.client) {
        const storedNotes = localStorage.getItem('notes');
        if (storedNotes) {
            notes.value = JSON.parse(storedNotes);
        }
    }

    const getAll = () => {
        return notes.value;
    }

    const add = (note: Note) => {
        notes.value.push(note);
        localStorage.setItem('notes', JSON.stringify(notes.value));
    };

    const remove = (note: Note) => {
        const index = notes.value.findIndex((n: Note) => n.title === note.title);
        if (index > -1) {
            notes.value.splice(index, 1);
            localStorage.setItem('notes', JSON.stringify(notes.value));
        }
    };

    return { getAll, add, remove };
};
