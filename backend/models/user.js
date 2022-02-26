const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');//permet de verifier que l'adresse mail est unique


//mongoose Schema pour le login et le signup
const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);
