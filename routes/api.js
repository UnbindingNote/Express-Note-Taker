const router = require("express").Router();
const store = require("../db/store");

// GET "/api/notes" provides all notes from db
router.get("/notes", (req, res) => {});

//   POST "/api/notes" adds new note to db
router.post("/notes", (req, res) => {});

// DELETE "/api/notes" delete a note from db matching id
router.delete("/notes/:id", (req, res) => {});

module.exports = router;
