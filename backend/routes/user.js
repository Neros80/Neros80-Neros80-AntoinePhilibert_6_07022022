const express = require('express');//connection à express
const router = express.Router();
const userCtrl = require('../controllers/user');

//enregistrement d'un nouvel Utilisateur
router.post('/signup',  userCtrl.signup);

//Connection par un utilisateur déjà existant
router.post('/login',  userCtrl.login);

module.exports = router;