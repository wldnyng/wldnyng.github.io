export default class NotesAPI {

      static getAllNotes() {
        const notes = JSON.parse(localStorage.getItem("notesapp-notes") || "[]");

        return notes.sort((a, b) => {
          return new Date(a.updated) > new Date(b.date) ? -1 : 1;
        });
    }
    
      static saveNote(noteToSave) {
        const notes = NotesAPI.getAllNotes();


        // noteToSave.id = Math.floor(Math.random() * 1000000);
        // noteToSave.date = new Date().toISOString();
        notes.push(noteToSave);

        localStorage.setItem("notesapp-notes", JSON.stringify(notes));
        
      }

      static deleteNote(id) {
        
      }
}