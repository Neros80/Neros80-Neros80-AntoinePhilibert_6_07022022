const Sauce = require('../models/sauce');
const fs = require('fs');



//Création d'une nouvelle sauce
exports.createThing = (req, res, next) => {
    const sauceObject = JSON.parse(req.body.sauce);

    delete sauceObject._id;
    const sauce = new Sauce({
        ...sauceObject,
        imageUrl: `${req.protocol}://${req.get('host')}/image/${req.file.filename}`
    });
    sauce.save()
        .then(() => res.status(200).json({ message: 'Objet crée !' }))
        .catch(error => res.status(400).json({ error }));
};

//afficher une sauce
exports.showOneSauce = (req, res, next) => {
    Sauce.findOne({ _id: req.params.id })
        .then(sauce => {
            res.status(200).json(sauce)
        })
        .catch(error => res.status(400).json({ error }));
};

//afficher toutes les sauce
exports.showSauces = (req, res, next) => {
    Sauce.find()
        .then(sauces => res.status(200).json(sauces))
        .catch(error => res.status(400).json({ error }));
};



//modification d'une sauce
exports.modifySauce = (req, res, next) => {
    Sauce.findOne({ _id: req.params.id })  
    .then(thing => {
        console.log(thing);

        if (!thing) {
            res.status(404).json({
              error: new Error('Objet non trouvé!')
            });
            return false
          }
          if (thing.userId !== req.auth.userId) {
            res.status(400).json({
              error: new Error('Requete non valide!')
            });
            return false
          }
        const filename = thing.imageUrl.split('/image/')[1];
        fs.unlink(`image/${filename}`, () => {console.log('image supp');})
    })

    const object = req.file ?
        {   
            ...JSON.parse(req.body.sauce), 
            imageUrl: `${req.protocol}://${req.get('host')}/image/${req.file.filename}`
        } : { ...req.body }
    Sauce.updateOne({ _id: req.params.id }, { ...object, _id: req.params.id })
        .then(() => {
            console.log(req.body);
            res.status(200).json({ message: 'Objet modifié !' })
        })
        .catch(error => res.status(400).json({ error }));
    
};

//suppression d'une sauce
exports.deleteSauce = (req, res, next) => {
    Sauce.findOne({ _id: req.params.id })
        .then(thing => {
            if (!thing) {
                res.status(404).json({
                  error: new Error('Objet non trouvé')
                });
                return false
              }
              if (thing.userId !== req.auth.userId) {
                res.status(400).json({
                  error: new Error('Requete non valide!')
                });
                return false
              }
            const filename = thing.imageUrl.split('/image/')[1];
            fs.unlink(`image/${filename}`, () => {
                Sauce.deleteOne({ _id: req.params.id })
                    .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
                    .catch(error => res.status(400).json({ error }));
            });
        })
        .catch(error => res.status(500).json({ error }));

};

