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
}

export default Utils;
