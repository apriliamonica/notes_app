import NotesData from "../data/notes-data.js";

function buatItem(notesList) {
  const notesContainer = document.querySelector("notes-list");

  function createNoteItemElement({ title, body }) {  
    return `
    <div class="notesList">
      <h3 class="notesItemTitle">${title}</h3>
      <p class="notesItemDescription">${body}</p>
      <div id="button-group">
        <button class="deleteButton">Delete</button>
        <button class="archivedButton">archived</button>
        <button class="unarchivedButton">unarchived</button>
      </div>
    </div>
    `;
  }

  const noteItems = notesList.map((note) => {
    return createNoteItemElement(note);
  });

  notesContainer.innerHTML = noteItems.join('');
}

const home = () => {
  const notes = NotesData.getAll();
  console.log(notes);

  buatItem(notes);
};

export { home, buatItem };
