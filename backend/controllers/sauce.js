const Sauce = require('../models/sauce');

exports.createThing = (req, res, next) =>  {
    const sauceObject = JSON.parse(req.body.sauce);
    delete sauceObject._id;
    const Sauce = new Sauce({
        ...sauceObject,
        imageUrl: `${req.protocol}://${req.get('host')}/image/${req.file.filename}`
    });
    Sauce.save()
    .then(() => res.status(200).json({message: 'Objet crée !'}))
    .catch(error => res.status(400).json({ error }));
};

exports.showSauce = (req, res, next) => {
    Sauce.find()
        .then(things => res.status(200).json(things))
        .catch(error => res.status(400).json({ error }));
};


exports.showOneSauce = (req, res, next) => {
    Sauce.findOne( {_id: req.params.id})
    .then(things => res.status(200).json(things))
    .catch(error => res.status(400).json({ error }));
};


exports.modifySauce = (req, res, next) => {
    sauce.updateOne( {_id: req.params.id}, {...req.body, _id: req.params.id})
    .then(() => res.status(200).json({message:'Objet modifié !'}))
    .catch(error => res.status(400).json({ error }));
};

exports.deleteSauce = (req, res, next) => {
    sauce.deleteOne({_id: req.params.id})
    .then(() => res.status(200).json({message:'Objet supprimé !'}))
    .catch(error => res.status(400).json({ error }));    
};

// router.like('/:id/like', (req, res, next) => {
//     Thing.like({_id: req.params.id})
//     .then(() => res.status(200).json({message:'Objet supprimé !'}))
//     .catch(error => res.status(400).json({ error }));    
// })