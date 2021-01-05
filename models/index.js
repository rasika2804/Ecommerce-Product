// importing all required modules

const mongoose = require('mongoose');
const path = require('path')

mongoose.set('debug', false)
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/';    // database url
const dbName = process.env.DB_NAME || 'local';                      // database name

const uri = dbUrl + dbName;
mongoose.connect(uri, {
    server: { socketOptions: { connectTimeoutMS: process.env.timeoutms || 30000 } }
}, function (err) {
    if (err) {
        console.log(err)
        return process.exit()
    } else { return console.log('Connected to database...') }
})

const Models = { mongoose }

module.exports = Models;