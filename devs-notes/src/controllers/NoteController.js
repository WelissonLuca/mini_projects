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

  one: () => {

  },

  new: () => {

  },

  edit: () => {

  },

  delete: () => {

  }
};