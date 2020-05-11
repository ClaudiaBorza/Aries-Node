//'use strict'

const express = require('express');
const app = express();

const config = require('./config')
const dateHelper = require('./helpers/date');
// foarte importanta ordinea

require('./config/express').init(app);
require('./config/routes').init(app);
require('./config/mongoose').init(app);

app.all('*', function (req, res, next) {
    res.status(404).json({
        status: 'fail',
        message: `Can't find this page: ${req.url} in the project`
    })
})

// generic middleware for errors
app.use(function (err, req, res, next) {
    console.log('error', err)
    return res.status(400).json({
        status: 'error',
        message: err && err.message || 'default message',
        date: `Today ${dateHelper.formattedDate()}`
    })
})

app.listen(config.PORT, function () {
    console.log(`API on port ${config.PORT}`)
});

