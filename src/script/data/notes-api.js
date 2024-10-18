const BASE_URL = "https://notes-api.dicoding.dev/v2";

class notesapi {
  static async createNote(note) {
    try {
      const response = await fetch(`${BASE_URL}/notes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: note.title,
          body: note.body,
        }),
      });
      const responseJson = await response.json();
      console.log(responseJson);

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
      console.log(responseJson);
      return responseJson;
    } catch (error) {
      showResponseMessag(error);
    }
  }

  static async unarchiveNote(note_id) {
    try {
      const response = await fetch(`${BASE_URL}/notes/${note_id}/unarchive`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const responseJson = await response.json();
      console.log(responseJson);

      return responseJson;
    } catch (error) {
      showResponseMessag(error);
    }
  }

  static async deleteNote(note_Id) {
    try {
      const response = await fetch(`${BASE_URL}/notes/${note_Id}`, {
        method: "DELETE",
      });

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
