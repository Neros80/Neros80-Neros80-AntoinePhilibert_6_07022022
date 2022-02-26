const mongoose = require('mongoose');


//schema mangoose création d'une nouvelle sauces
const sauceSchema = mongoose.Schema({
    name: {type: String, required: true },
    manufacturer: {type: String, required: true },
    description: {type: String, required: true },
    imageUrl: { type: String, required: true },
    mainPepper: { type: String, required: true },
    heat: {type: Number, required: true },
    userId: {type: String, required: true},

    //like & dislike
    likes: { type: Number, default: 0},
    dislikes: { type: Number, default: 0},
    usersLiked: { type: [String] },
    usersDisliked: { type: [String] }
  });


module.exports = mongoose.model('Sauce', sauceSchema);