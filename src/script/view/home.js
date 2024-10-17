// import NotesData from "../data/notes-data.js";
import notesapi from "../data/notes-api.js";

// // render all notes
// function render(notes) {
//   allList.innerHTML = "";
//   archivedList.innerHTML = "";

//   notes.forEach((note) => {
//     const noteItem = createNoteItemElement(note);

//     if (note.archived) {
//       archivedList.insertAdjacentHTML("beforeend", noteItem);
//     } else {
//       allList.insertAdjacentHTML("beforeend", noteItem);
//     }
//   });
// }

function buatItem(notesList) {
  const notesContainer = document.querySelector("notes-list");
  // const NotesList = notesContainer.querySelector("notes-list");

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

  // utils.emptyElement(NotesList);
  notesContainer.innerHTML = noteItems.join("");
}

const renderUnarchived = async () => {
  try {
    const response = await notesapi.getNotesnonArchived();

    render(response);
  } catch (error) {
    console.error("Error fetching unarchived notes:", error);
  }
};

const renderArchived = async () => {
  try {
    const response = await notesapi.getArchivedNotes();

    render(response);
  } catch (error) {
    console.error("Error fetching archived notes:", error);
  }
};

const home = async () => {
  const notes = await notesapi.getNotesnonArchived();
  console.log(notes);

  buatItem(notes);
};

export { home, buatItem, renderUnarchived, renderArchived };
