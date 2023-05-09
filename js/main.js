import NotesAPI from "./NotesAPI.js"

NotesAPI.saveNote({
    title: "New note!",
    body: "I am a new note."
});

console.log(NotesAPI.getAllNotes());