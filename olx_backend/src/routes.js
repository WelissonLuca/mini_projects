const exprees = require('express');
const router = exprees.Router();

const AuthController = require("./controllers/AuthController");
const UserController = require("./controllers/UserController");
const AdController = require("./controllers/AdController");
router.get('/ping', (req, res) => {
  res.json({pong: true})
})

module.exports = routes