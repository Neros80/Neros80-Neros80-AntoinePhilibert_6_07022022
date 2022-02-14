const mongoose = require('mongoose');

const thingSchema = mongoose.Schema({
    email:{ type: String, require: true},
    password:{type: String, require: true},
    sauce:{type: String},
    image:{type: String}
});

module.exports = mongoose.model('thing', thingSchema);