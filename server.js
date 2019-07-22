const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const port = process.env.PORT || 8080;

// to add secret variables to the process.env through the .env file which it ignored from gitting to github
require('dotenv').config();

const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

const db = require('./back/config/db.config');

db.sequelize.sync({ force: true }).then(() => {
    console.log('Drop and Resync with { force: true }');
});

require('./back/rout/user.route')(app);

// Create the server
var server = app.listen(port, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log(`App listening at http://${host}:${port}`)
});