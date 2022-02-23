const Sauce = require('../models/sauce');


exports.likeFicheUser = (req, res, next) => {
    // console.log('je suis dans les like');
    // console.log(req.params);
    // console.log({_id : req.params.id});

    
    Sauce.findOne({_id : req.params.id})
    .then((object) => {
        if(!object.userLiked.includes(req.body.userId) && req.body.like === 1){
            //mise a jour BDD
            Sauce.updateOne(
                {_id : req.params.id},
                {
                    $inc: {likes : 1},
                    $push: {userLiked: req.body.userId}
                }
            
            )
            .then(() => res.status(201).json({message: 'User like + 1'}))
            .catch((error) => res.status(400).json({ error }));
        }
        if(object.userLiked.includes(req.body.userId) && req.body.like === 0){
            //mise a jour BDD
            Sauce.updateOne(
                {_id : req.params.id},
                {
                    $inc: {likes : -1},
                    $pull: {userLiked: req.body.userId}
                }
            
            )
            .then(() => res.status(201).json({message: 'User like 0'}))
            .catch((error) => res.status(400).json({ error }));
        }

        //Dislike
        if(!object.userDisliked.includes(req.body.userId) && req.body.like === -1){
            //mise a jour BDD
            Sauce.updateOne(
                {_id : req.params.id},
                {
                    $inc: {dislikes : 1},
                    $push: {userDisliked: req.body.userId}
                }
            
            )
            .then(() => res.status(201).json({message: 'User DisLike + 1'}))
            .catch((error) => res.status(400).json({ error }));
        }
        if(object.userDisliked.includes(req.body.userId) && req.body.like === 0){
            //mise a jour BDD
            Sauce.updateOne(
                {_id : req.params.id},
                {
                    $inc: {dislikes : -1},
                    $pull: {userDisliked: req.body.userId}
                }
            
            )
            .then(() => res.status(201).json({message: 'User dislike 0'}))
            .catch((error) => res.status(400).json({ error }));
        }

        

    })
    .catch((error) => res.status(404).json({ error }));
};




