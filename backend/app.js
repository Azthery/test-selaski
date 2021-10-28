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

const route = require('./api/routes');
app.use('/', route);

module.exports = app;