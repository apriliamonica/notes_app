// class NotesItem extends HTMLElement {
//   constructor() {
//     super();

//     this._notes = {
//       id: 0,
//       title: "NEED_TITLE",
//       shortDescription: "NEED_SHORT_DESCRIPTION",
//     };

//     this._style = document.createElement("style");
//   }

//   setBlog(value) {
//     this._notes["id"] = value.id;
//     this._notes["title"] = value.title;
//     this._notes["shortDescription"] = value.shortDescription;

//     // Render ulang setelah `blog` di-update
//     this.render();
//   }

//   connectedCallback() {
//     this.render();
//   }

//   updateStyle() {
//     this._style.textContent = `
//       notes-item {
//         padding: 1rem 0.8rem;
//         display: block;

//         border-radius: 4px;
//         box-shadow: 0 0 2px 2px #33333377;
//       }

//       .notes__title {
//         margin-block-start: 0;
//         margin-block-end: 1rem;

//         font-size: 1.3em;
//         font-weight: bold;
//       }

//       p {
//         margin-block-start: 0;
//       }
//     `;
//   }

//   render() {
//     this.updateStyle();

//     this.setAttribute("data-id", this._notes.id);

//     this.innerHTML = `
//       ${this._style.outerHTML}

//       <h5 class="notes__title">
//         <a href="#">${this._notes.title}</a>
//       </h5>
//       <div class="notes__description">
//         <p>${this._notes.shortDescription}</p>
//       </p>
//     `;
//   }
// }

// customElements.define("notes-item", NotesItem);
