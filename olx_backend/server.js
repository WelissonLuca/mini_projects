require("dotenv").config();
const exprees = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const fileUpload = require("express-fileupload");

const apiRoutes = require('./src/routes')
const server = exprees();

mongoose.connect(process.env.DATABASE, {
	useNewUrlParser: true,
	userFindAndModify: false,
	userUnifiedTopology: true,
});

mongoose.Promise = global.Promise;
mongoose.connection.on("error", (error) => {
	console.log("Error", error.message);
});

server.use(cors());
server.use(exprees.json());
server.use(exprees.urlencoded({ extended: true }));
server.use(fileUpload());
server.use(exprees.static(__dirname + "/public"));

server.get("/ping", (req, res) => {
	res.json({ pong: true });
});
server.listen(process.env.PORT, () => {
	console.log(`Rodando no endereço ${process.env.BASE}`);
});
