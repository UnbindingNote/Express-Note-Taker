const router = require("express").Router();
const unique = require("../db/unique");

// GET "/api/notes" provides all notes from db
router.get("/notes", (req, res) => {
    // unique
    // .getNotes()
    // .then((notes) => {
    //   return res.json(notes);
    // })
    // .catch((err) => res.status(500).json(err));
});

// POST "/api/notes" adds new note to db
router.post("/notes", (req, res) => {
    // unique
    // .addNote(req.body)
    // .then((note) => res.json(note))
    // .catch((err) => res.status(500).json(err));
});

// DELETE "/api/notes" delete a note from db matching id.
router.delete("/notes/:id", (req, res) => {
    // unique
    // .removeNote(req.params.id)
    // .then(() => res.json({ ok: true }))
    // .catch((err) => res.status(500).json(err));
});

module.exports = router;
