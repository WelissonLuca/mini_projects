const express = require('express');
const router = express.Router();
const NoteController = require('./controllers/NoteController')
router.get('/ping', NoteController.ping
);

routes.get('/note', NoteController.all);
routes.get("/note/:id", NoteController.one);

routes.post("/note", NoteController.new);


routes.put("/note/:id", NoteController.edit);

routes.delete("/note/:id",NoteController.delete);


module.exports = router;