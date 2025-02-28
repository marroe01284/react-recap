import { create } from "zustand"

export const useNotes= create((set)=>({
    notes: ["one", "two"],
    addNote: (note) => set((state) => ({
    notes: [...state.notes, note],
})),
removeNote: (note) => set((state) => ({
    notes: state.notes.filter((value)=> note!== value),

})),
removeAllNotes: () => set({notes: []}),

resetNotes: () => set({notes: ["one", "two"]}),
//add randome number when i click a random number is generated and shown 
randomNumber: () => Math.floor(Math.random() * 100) + 1,
}));


