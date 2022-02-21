const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const sauceCtrl = require('../controllers/sauce')




router.get('/', auth, multer, sauceCtrl.showSauce);
router.get('/:id', auth, multer, sauceCtrl.showOneSauce);
router.post('/', auth, multer, sauceCtrl.createThing);
router.put('/:id', auth, multer, sauceCtrl.modifySauce);
router.delete('/:id', auth, sauceCtrl.deleteSauce)


module.exports = router;