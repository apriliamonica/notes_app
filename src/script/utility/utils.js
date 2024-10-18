import notesapi from "../data/notes-api.js";
import { home, buatItem } from "../view/home.js";

class Utils {
  static buatIdUnik() {
    const unikId = new Date().getTime();
    return `notes-${unikId}`;
  }

  static buatCreatedAt() {
    const date = new Date();
    return date.toISOString();
  }

  static makeNewNote(id, title, body, createdAt, archived) {
    return {
      id,
      title,
      body,
      createdAt,
      archived,
    };
  }

  static isValidInteger(newValue) {
    return Number.isNaN(newValue) || Number.isFinite(newValue);
  }

  static dltBtn(buttons, notes) {
    buttons.forEach((button) => {
      button.addEventListener("click", async (e) => {
        const noteId = e.target.parentElement.parentElement.id;
        await notesapi.deleteNote(noteId);
        buatItem(notes);
        home();
      });
    });
  }

  static arcBtn(buttons, notes) {
    buttons.forEach((button) => {
      button.addEventListener("click", async (e) => {
        const noteId = e.target.parentElement.parentElement.id;
        await notesapi.archiveNote(noteId);
        buatItem(notes);
        home();
      });
    });
  }

  static unarcBtn(buttons, notes) {
    buttons.forEach((button) => {
      button.addEventListener("click", async (e) => {
        const noteId = e.target.parentElement.parentElement.id;
        await notesapi.unarchiveNote(noteId);
        buatItem(notes);
        home();
      });
    });
  }
}

export default Utils;
