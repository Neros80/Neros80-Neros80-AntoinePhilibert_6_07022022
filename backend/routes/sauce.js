const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const sauceCtrl = require('../controllers/sauce');

const like = require('../controllers/like');


//affiche une sauce
router.get('/:id', auth, sauceCtrl.showOneSauce);
//affiche toutes les sauces
router.get('/', auth, sauceCtrl.showSauces);
//création d'une nouvelle sauces
router.post('/', auth, multer, sauceCtrl.createThing);
//Modification d'une sauce
router.put('/:id', auth, multer, sauceCtrl.modifySauce);
//Sppression d'une sauce
router.delete('/:id', auth, multer,sauceCtrl.deleteSauce);
//Affichage des likes/dislikes
router.post('/:id/like', auth, multer,like.likeFicheUser);

module.exports = router;