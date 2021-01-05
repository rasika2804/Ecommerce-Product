/**
 * initilize app.
 */

// importing all required modules

const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
const createError = require('http-errors');
const route = require('./routes/index');   // importing all route
const model = require('./models/index');

const app = express();

// parse the req params and atteche them to req.body.
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

const router = express.Router();
var port = process.env.PORT ? process.env.PORT : 8000;  // define port

app.use('/api', route);  // intialize route

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

app.use(function (err, req, res, next) {
    res.status(500).send({ message: err.message });
});

app.listen(port, () => {
    console.log('server running on port ' + port);
});
