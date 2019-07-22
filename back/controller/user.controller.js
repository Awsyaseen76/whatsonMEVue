const db = require('../config/db.config.js');
const User = db.users;

// Post a User
exports.create = (req, res) => {
    User.create({
        email: req.body.email,
        password: req.body.password
    }).then(user => {
        res.send(user);
    }).catch(err => {
        res.status(500).send("Error -> " + err);
    })
};

// Get all Users
exports.findAll = (req, res) => {
    User.findAll().then(users => {
        res.send(users);
    }).catch(err => {
        res.status(500).send("Error -> " + err);
    })
};

// Find a User by Id
exports.findById = (req, res) => {
    User.findById(req.params.userId).then(user => {
        res.send(user);
    }).catch(err => {
        res.status(500).send("Error -> " + err);
    })
};

// Find users by Email
exports.findByEmail = (req, res) => {
    User.findOne({
        where: {
            email: req.params.email
        }
    }).then(
        user => {
            res.send(user)
        }
    ).catch(err => {
        res.status(500).send("Error -> " + err);
    })
};

// Update a user
exports.updatePassword = (req, res) => {
    var user = req.body;
    const id = req.params.userId;
    User.update({ password: req.body.password },
        { where: { id: id } }
    ).then(() => {
        res.status(200).send(user);
    }).catch(err => {
        res.status(500).send("Error -> " + err);
    })
};

// Delete a user by Id
exports.delete = (req, res) => {
    const id = req.params.userId;
    User.destroy({
        where: { id: id }
    }).then(() => {
        res.status(200).send('user has been deleted!');
    }).catch(err => {
        res.status(500).send("Error -> " + err);
    });
};