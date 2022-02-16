const express = require('express');
const router = express.Router();
const Thing = require('../models/sauce');


router.post('/', (req, res, next) => {
    const thing = new Thing({
        ...req.body
    })

thing.save()
    .then(() => res.status(200).json({ message: 'Objet enregistré !'}))
    .catch(error => res.status(400).json({ error }));
});

router.get('/', (req, res, next) => {
    Thing.find()
    .then(things => res.status(200).json(things))
    .catch(error => res.status(400).json({ error }));
});

router.get('/:id', (req, res, next) => {
    Thing.findOne( {_id: req.params.id})
    .then(things => res.status(200).json(things))
    .catch(error => res.status(400).json({ error }));
});

router.put('/:id', (req, res, next) => {
    Thing.updateOne( {_id: req.params.id}, {...req.body, _ud: req.params.id})
    .then(() => res.status(200).json({message:'Objet modifié !'}))
    .catch(error => res.status(400).json({ error }));
});

router.delete('/:id', (req, res, next) => {
    Thing.deleteOne({_id: req.params.id})
    .then(() => res.status(200).json({message:'Objet supprimé !'}))
    .catch(error => res.status(400).json({ error }));    
})

// router.like('/:id/like', (req, res, next) => {
//     Thing.like({_id: req.params.id})
//     .then(() => res.status(200).json({message:'Objet supprimé !'}))
//     .catch(error => res.status(400).json({ error }));    
// })

module.exports = router;