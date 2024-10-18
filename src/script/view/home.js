import notesapi from "../data/notes-api.js";
import Utils from "../utility/utils.js";

function buatItem(notesList) {
  const notesContainer = document.querySelector("notes-list");

  function createNoteItemElement({ title, body, id }) {
    return `
    <div class="notesList" id="${id}">
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

  notesContainer.innerHTML = "";
  notesContainer.innerHTML = noteItems.join("");
}

const home = async () => {
  const notes = await notesapi.getNotesnonArchived();

  const archivedNotesBtn = document.querySelector("#archived");
  archivedNotesBtn.addEventListener("click", async () => {
    const archivedNotes = await notesapi.getArchivedNotes();
    buatItem(archivedNotes);
  });

  const unarchivedNotesBtn = document.querySelector("#allnotes");
  unarchivedNotesBtn.addEventListener("click", async () => {
    const notes = await notesapi.getNotesnonArchived();
    buatItem(notes);
  });

  const deleteButtons = document.querySelectorAll(".deleteButton");
  Utils.dltBtn(deleteButtons, notes);

  const archivedButtons = document.querySelectorAll(".archivedButton");
  Utils.arcBtn(archivedButtons, notes);

  const unarchivedButtons = document.querySelectorAll(".unarchivedButton");
  Utils.unarcBtn(unarchivedButtons, notes);

  buatItem(notes);
};

export { home, buatItem };
