const express = require('express');

const app = express();
const mongoose = require('mongoose');//Connection à Mongoose
const userRoutes = require('./routes/user')//liens vers la route user  
const sauceRoutes = require('./routes/sauce');//liens vers la route Sauce  
const path = require('path')


//connection a l'user de mangoose avec un message qui préçise si la connection et reussie ou non
mongoose.connect('mongodb+srv://Antoine:Rap80afh62@cluster0.hnxkk.mongodb.net/myFirstDatabase',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.json());

//----------------------------
//aide contre les erreur CORS 
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/image', express.static(path.join(__dirname, 'image')));

app.use('/api/auth', userRoutes);
app.use('/api/sauces', sauceRoutes);



module.exports = app;