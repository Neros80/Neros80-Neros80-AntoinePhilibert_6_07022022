const express = require('express');

const app = express();
const mongoose = require('mongoose');
const Thing = require('./models/Thing');

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


app.post('/api/auth/signup', (req, res, next) => {
  console.log(req.body);
  res.status(201).json({
    message: 'Compte crée'
  });
  
});

app.post('/api/auth/login', (req, res, next) => {
  
  console.log(req.body);

});

// app.get('/api/sauces', (req, res, next) => {
//   Thing.find()
//   .then(things => res.status(200).json(things))
//   .catch(error => res.status(400).json({ error }))
//   next()
// });

// app.get('/api/sauces/:id', (req, res, next) => {
//   Thing.findOne({ _id: req.params.id})
//   .then(things => res.status(200).json(things))
//   .catch(error => res.status(400).json({ error }))
// });

app.post('/api/sauces', (req, res, next) => {
 const thing = new thing({ ...req.body});
 thing.save()
 .then(() => res.status(200).json({message:'verb'}))
 .catch(() => res.status(400).json({ error }));
});

module.exports = app;