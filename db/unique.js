const util = require('util');
const fs = require('fs');

// using the uuid package used in SOLVED to create ids for the notes in db, feel free to yell at me - I'm already burned the fuck out after looking for a different one.

const uuidv1 = require('uuid/v1');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Unique {
  read() {
    return readFileAsync('db/db.json', 'utf8');
  }

  write(note) {
    return writeFileAsync('db/db.json', JSON.stringify(note));
  }

  getNotes() {
    return this.read().then((notes) => {
      let parsedNotes;

      // send back an empty array if notes !array or can't concat into one
      try {
        parsedNotes = [].concat(JSON.parse(notes));
      } catch (err) {
        parsedNotes = [];
      }

      return parsedNotes;
    });
  }

  addNote(note) {
    const { title, text } = note;

    if (!title || !text) {
      throw new Error("Notes need a title and info, fambam.");
    }

    // Add a Unique* id to the note w/ uuid
    const newNote = { title, text, id: uuidv1() };

    // Get ALL the notes ( o7 ), add a new one, update the notes, and return the newNote
    return this.getNotes()
      .then((notes) => [...notes, newNote])
      .then((updatedNotes) => this.write(updatedNotes))
      .then(() => newNote);
  }

  removeNote(id) {
    // Get all notes ( o/ ), remove the note with a matching id, write to the filtered notes
    return this.getNotes()
      .then((notes) => notes.filter((note) => note.id !== id))
      .then((filteredNotes) => this.write(filteredNotes));
  }
}

module.exports = new Unique();
