const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const sauceCtrl = require('../controllers/sauce');

const like = require('../controllers/like');



router.get('/:id', auth, sauceCtrl.showOneSauce);
router.get('/', auth, sauceCtrl.showSauces);
router.post('/', auth, multer, sauceCtrl.createThing);
router.put('/:id', auth, multer, sauceCtrl.modifySauce);
router.delete('/:id', auth, multer,sauceCtrl.deleteSauce);

router.post('/:id/like', auth, multer,like.likeFicheUser);

module.exports = router;