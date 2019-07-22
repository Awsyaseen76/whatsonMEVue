module.exports = function (app) {

    const users = require('../controller/user.controller.js');

    // Create a new User
    app.post('/api/user', users.create);

    // Retrieve all Users
    app.get('/api/users', users.findAll);

    // Retrieve a single User by Id
    app.get('/api/user/:userId', users.findById);

    // Retrieve users by email
    app.get('/api/users/email/:email', users.findByEmail);

    // Update a User with Id
    app.put('/api/user/:userId', users.updatePassword);

    // Delete a User with Id
    app.delete('/api/user/:userId', users.delete);
}