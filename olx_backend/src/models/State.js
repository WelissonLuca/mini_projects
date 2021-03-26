const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const modelSchema = new mongoose.Schema({
	name: String,
});

const modelName = "State";

if (mongoose.connection && mongoose.connection.model(modelName))
	module.exports = mongoose.connection.model(modelName);
else
	module.exports = mongoose.model(modelName, modelSchema);
