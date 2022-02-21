const Sauce = require('../models/sauce');
const fs = require('fs');

exports.createThing = (req, res, next) =>  {
    console.log('coucou');
    const sauceObject = JSON.parse(req.body.sauce);
    
    delete sauceObject._id;
    const sauce = new Sauce({
        ...sauceObject,
        imageUrl: `${req.protocol}://${req.get('host')}/image/${req.file.filename}`
    });
    sauce.save()
    .then(() => res.status(200).json({message: 'Objet crée !'}))
    .catch(error => res.status(400).json({ error }));
};

exports.showSauce = ('/api/stuff', (req, res, next) => {
    Sauce.find()
      .then(things => res.status(200).json(things))
      .catch(error => res.status(400).json({ error }));
  });


exports.showOneSauce = (req, res, next) => {
    Sauce.findOne( {_id: req.params.id})
    .then(things => res.status(200).json(things))
    .catch(error => res.status(400).json({ error }));
};


exports.modifySauce = (req, res, next) => {
    const object = req.file ?
    { 
        ...JSON.parse(req.body.sauce)
    }:{ ...req.body }
    Sauce.updateOne( {_id: req.params.id}, {...object, _id: req.params.id})
    .then(() => res.status(200).json({message:'Objet modifié !'}))
    .catch(error => res.status(400).json({ error }));
};

exports.deleteSauce = (req, res, next) => {
    Sauce.findOne({ _id: req.params.id })
        .then(thing => {
            const filename = thing.imageUrl.split('/image/')[1];
            fs.unlink(`image/${filename}`, () => {
                Sauce.deleteOne({_id: req.params.id})
                .then(() => res.status(200).json({message:'Objet supprimé !'}))
                .catch(error => res.status(400).json({ error }));   
            });
        })
        .catch(error => res.status(500).json({ error })); 
};

