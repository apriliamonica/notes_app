import "./components/header-bar.js";
import "./components/footer-bar.js";

/**
 * Sample data for displaying notes
 *
 * Note object schema:
 * {
 *   id: number | string,
 *   title: string,
 *   body: string,
 * }
 */

// import { notesData } from "./sample-notes.js";

// // Get elements
// const notesListElement = document.querySelector("#note");

// // Create note item
// function createNoteItemElement({ id, title, body }) {
//   const container = document.createElement("div");
//   container.setAttribute("data-noteid", id);

//   const titleElement = document.createElement("h3");
//   titleElement.textContent = title;

//   const bodyElement = document.createElement("p");
//   bodyElement.innerText = body;

//   container.append(titleElement, bodyElement);

//   return container;
// }

// // Render all sample notes
// notesData.forEach((notesData) => {
//   const element = createNoteItemElement(notesData);
//   notesListElement.append(element);
// });
