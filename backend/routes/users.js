const router = require('express').Router();
let User = require("../models/user.model");

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json("Error: " + err));
});

router.route('/add').post((req, res) => {

    const {username} = req.body;
    const newUser = new User({
        username
    });

    // res.json("Reached here");
    newUser.save()
        .then(user => res.json(user))
        .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;

