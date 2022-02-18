const mongoose = require('mongoose');

const sauceSchema = mongoose.Schema({
    name: {type: String, require: true},
    manufacturer: {type: String},
    description: {type: String},
    image: { type: String},
    mainPepper: { type: String},
    heat: {type: Number}
  });


module.exports = mongoose.model('Sauces', sauceSchema);