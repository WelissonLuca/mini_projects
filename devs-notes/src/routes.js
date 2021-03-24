const express = require('express');
const router = express.Router();
const NoteController = require('./controllers/NoteController')
router.get('/ping', NoteController.ping
);

router.get('/notes', NoteController.all);
router.get("/notes/:id", NoteController.one);

router.post("/notes", NoteController.new);


router.put("/notes/:id", NoteController.edit);

router.delete("/notes/:id",NoteController.delete);


module.exports = router;