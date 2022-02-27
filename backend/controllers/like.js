const Sauce = require('../models/sauce');


exports.likeFicheUser = (req, res, next) => {
    Sauce.findOne({ _id: req.params.id })
        .then((object) => {
            //si like +1
            if (!object.usersLiked.includes(req.body.userId) && req.body.like === 1) {
                //mise a jour BDD
                Sauce.updateOne(
                    { _id: req.params.id },
                    {
                        $inc: { likes: 1 },
                        $push: { usersLiked: req.body.userId }
                    }

                )
                    .then(() => res.status(201).json({ message: 'User like + 1' }))
                    .catch((error) => res.status(400).json({ error }));
            }
            //si like retourne à zero
            if (object.usersLiked.includes(req.body.userId) && req.body.like === 0) {
                //mise a jour BDD
                Sauce.updateOne(
                    { _id: req.params.id },
                    {
                        $inc: { likes: -1 },
                        $pull: { usersLiked: req.body.userId }
                    }

                )
                    .then(() => res.status(201).json({ message: 'User like 0' }))
                    .catch((error) => res.status(400).json({ error }));
            }

            //Si dislike +1
            if (!object.usersDisliked.includes(req.body.userId) && req.body.like === -1) {
                //mise a jour BDD
                Sauce.updateOne(
                    { _id: req.params.id },
                    {
                        $inc: { dislikes: 1 },
                        $push: { usersDisliked: req.body.userId }
                    }

                )
                    .then(() => res.status(201).json({ message: 'User DisLike + 1' }))
                    .catch((error) => res.status(400).json({ error }));
            }
            //Si dislike retourne à zero
            if (object.usersDisliked.includes(req.body.userId) && req.body.like === 0) {
                //mise a jour BDD
                Sauce.updateOne(
                    { _id: req.params.id },
                    {
                        $inc: { dislikes: -1 },
                        $pull: { usersDisliked: req.body.userId }
                    }

                )
                    .then(() => res.status(201).json({ message: 'User dislike 0' }))
                    .catch((error) => res.status(400).json({ error }));
            }



        })
        .catch((error) => res.status(404).json({ error }));
};




