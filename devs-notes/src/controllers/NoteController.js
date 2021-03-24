const NoteServices = require('../services/NoteService')
module.exports = {


  ping: (req, res) => {
    res.json({ pong: true });
  },

  all: async (req,res) => {
    let json = { error: '', result: [] };

    let notes = await NoteServices.getAll();

    for (let i in notes) {
      json.result.push({
        id: notes[i].id,
        title: notes[i].title
      })
    }
    
    res.json(json)
  },

  one: async (req, res) => {
    let json = { error: "", result: {} };
    
    let id = req.params.id;

    let note = await NoteServices.findById(id);

    if (note) 
      json.result = note;
    

    res.json(json)
  },

  new: () => {

  },

  edit: () => {

  },

  delete: () => {

  }
};