const express = require('express');
const router = express.Router();
// const Sauce = require('../models/sauce');
const multer = require('../middleware/multer-config');
const auth = require('../middleware/auth');

const sauceCtrl = require('../controllers/sauce')




router.get('/', auth, multer, sauceCtrl.showSauce);
router.get('/:id', auth, multer, sauceCtrl.showOneSauce);
// router.post('/sauces', sauceCtrl.createThing);
// router.put('/:id', sauceCtrl.modifySauce);
// router.delete('/:id', sauceCtrl.deleteSauce);


module.exports = router;