const exprees = require('express');
const router = exprees.Router();

const AuthValidator = require("./validators/AuthValidator");
const UserValidator = require("./validators/UserValidator");

const AuthController = require("./controllers/AuthController");
const UserController = require("./controllers/UserController");
const AdsController = require("./controllers/AdsController");

const Auth = require('./middlewares/Auth');

router.get('/ping', (req, res) => {
  res.json({pong: true})
})

router.get('/states',Auth.private, UserController.getStates);

router.post('/user/signin', AuthValidator.signin,AuthController.signin);
router.post('/user/signup', AuthValidator.signup,AuthController.signup);


router.get('/user/me',
  UserValidator.editAction,
  Auth.private,
  UserController.info);
router.put(
	"/user/me",
	UserValidator.editAction,
	Auth.private,
	UserController.editAction
);

router.get('/categories', AdsController.getCategories);


router.post('/ad/add', Auth.private,AdsController.addAction);
router.get('/ad/list', AdsController.getList);
router.get('/ad/item', AdsController.getItem);

router.post('/ad/:id', Auth.private,AdsController.editAction);
module.exports = routes