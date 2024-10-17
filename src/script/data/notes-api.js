const BASE_URL = "https://notes-api.dicoding.dev/v2";

class notesapi {
  static async createNote(note_id) {
    try {
      const response = await fetch(`${BASE_URL}/notes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(note_id),
      });
      const responseJson = await response.json();

      return responseJson;
    } catch (error) {
      console.error(error);
    }
  }

  static async getNotesnonArchived() {
    try {
      const response = await fetch(`${BASE_URL}/notes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const responseJson = await response.json();
      return responseJson.data;
    } catch (error) {
      console.log(data);
    }
  }

  static async getArchivedNotes() {
    try {
      const response = await fetch(`${BASE_URL}/notes/archived`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: "New Note",
          body: "My new note.",
        }),
      });
      const responseJson = await response.json();
      return responseJson.data;
    } catch (error) {
      showResponseMessag(error);
    }
  }

  static async archiveNote(note_id) {
    try {
      const response = await fetch(`${BASE_URL}/notes/${note_id}/archive`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const responseJson = await response.json();
      if (responseJson.error) {
        showResponseMessage(responseJson.message);
      } else {
        renderAllBooks(responseJson.note_id);
      }
    } catch (error) {
      showResponseMessag(error);
    }
  }

  static async unrchiveNote(note_id) {
    try {
      const response = await fetch(`${BASE_URL}/notes/${note_id}/unarchive`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const responseJson = await response.json();

      if (responseJson.error) {
        showResponseMessage(responseJson.message);
      } else {
        renderAllBooks(responseJson.note_id);
      }
    } catch (error) {
      showResponseMessag(error);
    }
  }

  static async deleteNote(note_Id) {
    try {
      const response = await fetch(`${BASE_URL}/notes/${note_Id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      console.error(error);
      throw new Error(`Failed to delete note: ${error}`);
    }
  }
}

export default notesapi;

// const getSingleNote = async (note_id) => {
//   try {
//     const response = await fetch(`${BASE_URL}/notes/${note_id}`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     const responseJson = await response.json();

//     if (responseJson.error) {
//       showResponseMessage(responseJson.message);
//     } else {
//       renderAllBooks(responseJson.note_id);
//     }
//   } catch (error) {
//     showResponseMessag(error);
//   }
// };

// document
//   .getElementById("noteForm")
//   .addEventListener("submit", async (event) => {
//     event.preventDefault();

//     const title = document.getElementById("title").value;
//     const body = document.getElementById("body").value;

//     try {
//       const response = await fetch("http://localhost:3000/notes", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ title, body }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         document.getElementById("response").innerHTML = `
//                 <p>Status: ${data.status}</p>
//                 <p>Pesan: ${data.message}</p>
//                 <p>Catatan ID: ${data.data.id}</p>
//             `;
//       } else {
//         document.getElementById("response").innerHTML = `
//                 <p>Status: ${data.status}</p>
//                 <p>Pesan: ${data.message}</p>
//             `;
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       document.getElementById("response").innerHTML = `
//             <p>Status: error</p>
//             <p>Pesan: Terjadi kesalahan saat mengirim catatan.</p>
//         `;
//     }
//   });

// class noteApi {
//   static async getNotesnonArchived() {
//     try {
//       const response = await fetch(`${BASE_URL}/notes/non-archived`, {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       const responseJson = await response.json();
//       return responseJson;
//     } catch (error) {
//       console.error("Error fetching notes:", error);
//     }
//   }

// }
