const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded(
    {
        extended: false
    }
));
app.use(bodyParser.json());

app.use(cors());

const userRoute = require('./api/routes/users');
app.use('/users', userRoute);

module.exports = app;