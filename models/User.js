const moongose = require('mongoose');
const paspportLocalMongoose = require('passport-local-mongoose');
moongose.Mongoose.Promise = global.Promise;

const userSchema = new moongose.Schema({
  name: String,
  email: String
})

userSchema.plugin(paspportLocalMongoose, {
  usernameField:'email'
})

module.exports = moongose.model('User', userSchema)